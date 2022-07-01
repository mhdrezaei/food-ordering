import React from 'react';
import { useEffect , useState , useContext } from 'react';
import FoodContext from '../../context/foodContext';
import FoodItems from './FoodItems';
import axios from 'axios';
import Spinner from '../../SharedComponnent/Spinner';

function Food() {
  const {loading ,isLoading , foods , getFoods} = useContext(FoodContext);
  // const [foods , setFoods] = useState([]);
  // const [loading , setLoading] = useState(true);

  useEffect(() => {
    isLoading(false)
    getFoods();
    isLoading(true)
   
  },[]);
  console.log(isLoading);

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