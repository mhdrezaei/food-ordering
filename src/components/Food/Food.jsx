import React from 'react'
import FoodList from '../../Food-data.json'
import FoodItems from './FoodItems'

function Food() {
  return (
    <main>
        <div className='col-12 mt-5'>
            <div className='container'>
                <div className='row gx-1'>
                {FoodList.map((food) => {
                return <FoodItems key={food.id} price={food.price} name={food.name} image={food.image} />
               })}   
                </div>
            </div>
        </div>
    </main>
  )
}

export default Food