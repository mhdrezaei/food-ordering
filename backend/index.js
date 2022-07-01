const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
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
        count : Number,
        imgUrl : String
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
    const availableUser = await Cart.findOne({ user : item.user }).exec();
    if(availableUser){
        const availableFood = await Cart.findOne({user : item.user , foodName : item.food[0].foodName }).exec();
        const index = availableFood.food.findIndex((element)=> element.foodName === item.food[0].foodName)

        if(availableFood.food.find((element)=> element.foodName === item.food[0].foodName)){
            await Cart.findOneAndUpdate({user : item.user ,foodName : item.food[0].foodName},{count: 2});
                
                return {success :`${item.food[index].foodName} added to Cart!`}
    }else{
        await Cart.updateOne({user : item.user},{food :[{item}]})
        return {success :`${item.food[0].foodName} added to Cart!!`}
    }
    }else{
        await cartFoods.save()
        return {success :`${item.food} added to Cart!!!`}
    }
}

// Show Food function
async function showFood(){
   const allFoods = await Food.find({});
   return JSON.stringify(allFoods);
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
    console.log(req.body)
    const Food = async ()=>{
        let foods = await showFood();
        return foods
        }
        (async () => {
            const foods = await Food();
            res.send(foods)
          })()
})
// Store food in DB
app.post('/stored', (req, res) => {
    console.log(req.body);
    const saveFood = async ()=>{
    let message = await storeFood(req.body);
    return message
    }
    (async () => {
        const message =await saveFood();
        console.log('msg :' + message)
        res.send({"message" : message})
      })()    
});
// Add to Cart
app.post('/add-to-cart', (req, res) => {
    // console.log(req.body);
    const addFoodCart = async ()=>{
    let message = await addToCart(req.body);
    return message
    }
    (async () => {
        const message = await addFoodCart();
        res.send({"message" : message})
      })()    
});

// app.listen(5000,() => console.log('server is running'))
app.listen(5000, function() {
    console.log("Node app is running at localhost:" + 5000)
});