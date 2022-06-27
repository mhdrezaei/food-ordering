import React from 'react'

function FoodItems({price , name , image}) {
    
  return (
    <div className='shadow-sm  col-xl-6 col-md-6 col-sm-12 g-3'  >
        <div className='d-flex col-12 bg-dark rounded-3'>
          
            <div className="col-md-6 m-4">
                <img className='img-fluid rounded-1 img-thumbnail ' src={image} alt={name} />
            </div>
            <div className="col-md-6 my-5">
              <div className='d-flex justify-content-start'>
                <p className='h5 text-light px-2' >food :</p>
                <p className='h5 text-warning'>{name}</p>
                </div>
                <div className='d-flex justify-content-start'>
                <p className='h5 text-light px-2' >price :</p>
                <p className='h5 text-warning' >{price} $</p>
              </div>
                </div>
        </div>
    </div>
  )
}

export default FoodItems