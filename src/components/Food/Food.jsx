import React from 'react';
import { useEffect , useState } from 'react';
import FoodItems from './FoodItems';
import axios from 'axios';

function Food() {
  const [foods , setFoods] = useState([]);

  useEffect(() => {
    const featchFood = async () =>{
      const foodsData = await axios('http://localhost:5000/showall',);
      console.log(foodsData.data);
      setFoods(foodsData.data);
    }
    featchFood();
   
  },[]);
  console.log(foods);
  return (
    <main>
        <div className='col-12 mt-5'>
            <div className='container'>
                <div className='row gx-1'>
                {foods.map((food) => {
                return <FoodItems key={food.id} price={food.price} name={food.name} image={food.imgUrl} />
               })}   
                </div>
            </div>
        </div>
    </main>
  )
}

export default Food