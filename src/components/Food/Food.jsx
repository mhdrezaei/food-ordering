import React from 'react';
import { useEffect , useState } from 'react';
import FoodItems from './FoodItems';
import axios from 'axios';
import Spinner from '../../SharedComponnent/Spinner';

function Food() {
  const [foods , setFoods] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    const featchFood = async () =>{
      const foodsData = await axios('http://localhost:5000/showall',);
      console.log(foodsData.data);
      setFoods(foodsData.data);
      setLoading(true)
    }
    featchFood();
   
  },[]);
  console.log(foods);

  if(loading){
  return (
    <main>
        <div className='col-12 mt-5'>
            <div className='container'>
                <div className='row gx-1'>
                {foods.map((food) => {
                return <FoodItems key={food._id} price={food.price} name={food.name} image={food.imgUrl} />
               })}   
                </div>
            </div>
        </div>
    </main>
  )
              } else{
                return <Spinner/>
              }
}

export default Food