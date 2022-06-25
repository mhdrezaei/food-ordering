import React from 'react'

function FoodItems({price , name , image}) {
    
  return (
    <div className='col-xl-6 col-md-6 col-sm-12 bg-dark rounded-1'  >
        <div className='col-12'>
            <div className="col-md-6">
                <img src={image} alt={name} />
            </div>
            <div className="col-md-6">
                <p className='text-light'>{name}</p>
                <p className='text-light'>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default FoodItems