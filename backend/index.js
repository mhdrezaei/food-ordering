const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const { ObjectId } = require('mongodb');
const app = express();
corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
 // DB connect
mongoose.connect('mongodb://localhost:27017/foodordering')
.then(() => console.log('database is connected'))
.catch((err) => console.log('somthing went wrong'));

// Food Schema
const foodSchema = new mongoose.Schema({
    name : String,
    price : Number,
    imgUrl : String
});
const Food = mongoose.model('Food' ,foodSchema);

// Cart Schema
const cartSchema = new mongoose.Schema({
    user : String,
    food : [
        {
        foodName : String,
        price : Number,
        imgUrl : String,
        foodId : ObjectId
        }
    ]
});
const Cart = mongoose.model('Cart' ,cartSchema);

async function storeFood(food){
    const saveFood = new Food ({
        ...food
    })
    const available = await Food.findOne({ name : food.name }).exec();
    if(available){
        return {error :'this food is available!'}
    }
    await saveFood.save();
    return {success :'Food added to Foodlist!'}
}
// Add to Cart function
async function addToCart(item){
    const cartFoods = new Cart({
        ...item
    });
    const availableUser = await Cart.exists({ user : item.user });
    if(availableUser){
            
        await Cart.updateOne({user : item.user },
            {
             $push : {
                food :  {
                         'foodName' : item.food[0].foodName,
                         'price' : item.food[0].price,
                         'imgUrl' : item.food[0].imgUrl,
                         'foodId' : item.food[0].foodId
                       } //inserted data is the object to be inserted 
              }
            });
        
        return {success :`${item.food[0].foodName} added to Cart!!`}
    
    }else{
        await cartFoods.save()
        return {success :`${item.food[0].foodName} added to Cart!!!`}
    }
}

// Show Food function
async function showFood(){
   const allFoods = await Food.find({});
   return JSON.stringify(allFoods);
}

// Count Cart function
async function countCart(data){
    const cartFoods = await Cart.findOne({user : data.user}).exec();
    if(cartFoods){
    return JSON.stringify(cartFoods.food);
    }else{
        return '';
    }
 }
 // remove from cart function
 async function removeFromCart(data){
    const removedFood = await Cart.updateOne({ user: data.user }, {
        "$pull": {
            "food": {
              "_id": {
                "$in": [
                    data.foodId
                ]
              }
            }
          }
        
    },{ safe: true }).limit(1);
    
    console.log(removedFood)
    if(removedFood.modifiedCount){
    return {success : 'deleted from cart successfully'}
    }else{
    return {error : 'somthing went wrong!'};
    }
 }
app.use((req, res, next) => {
    // res.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Content-Type', 'application/jsons');
    next();
});
app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
  })
app.get('/showall' , (req , res) => {
    const Food = async ()=>{
        let foods = await showFood();
        return foods
        }
        (async () => {
            const foods = await Food();
            res.send(foods)
          })()
})

// delete from Cart 
app.delete('/remove-from-cart' , (req , res) => {
    const delFood = async ()=>{
        let deletedFood = await removeFromCart(req.body);
        return deletedFood
        }
        (async () => {
            const deletedFood = await delFood();
            res.send(deletedFood)
          })()
})
// count food in cart
app.post('/count-cart' , (req , res) => {
    // console.log(req.body)
    const cart = async ()=>{
        let foods = await countCart(req.body);
        return foods
        }
        (async () => {
            const foods = await cart();
            res.send(foods)
          })()
})
// Store food in DB
app.post('/stored', (req, res) => {
    const saveFood = async ()=>{
    let message = await storeFood(req.body);
    return message
    }
    (async () => {
        const message =await saveFood();
        res.send({"message" : message})
      })()    
});
// Add to Cart
app.post('/add-to-cart', (req, res) => {
    const addFoodCart = async ()=>{
    let message = await addToCart(req.body);
    console.log(message)
    return message
    }
    (async () => {
        const message = await addFoodCart(req.body);
        res.send({message})
      })()    
});

app.listen(5000, function() {
    console.log("Node app is running at localhost:" + 5000)
});