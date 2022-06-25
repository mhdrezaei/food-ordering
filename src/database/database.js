const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/food-ordering')
.then(() => console.log('database isconnected'))
.catch((err) => console.log('somthing went wrong'));

const foodSchema = new mongoose.Schema({
    name : string,
    price : number,
    imgUrl : string
});

const Food = mongoose.model('Food' ,foodSchema);

export async function storeFood (food){
    const saveFood = new Food ({
        ...food
    })
    await saveFood.save();
}