const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/foodordering')
.then(() => console.log('database is connected'))
.catch((err) => console.log('somthing went wrong'));


const foodSchema = new mongoose.Schema({
    name : String,
    price : Number,
    imgUrl : String
});
const Food = mongoose.model('Food' ,foodSchema);

async function storeFood(food){
    const saveFood = new Food ({
        ...food
    })
    await saveFood.save();
}

app.post('/stored', (req, res) => {
    console.log(req.body);
    mongoose.collection('food').insertOne(req.body, (err, data) => {
        if(err) return console.log(err);
        res.send(('saved to db: ' + data));
        storeFood(data);
    })
});

app.listen(5002,() => console.log('server is running'))