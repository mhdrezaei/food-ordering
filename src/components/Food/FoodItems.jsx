import React from 'react';
import {ReactComponent as AddToCart} from '../../assets/add-to-cart.svg'
import {ReactComponent as EyeIcon} from '../../assets/eye.svg'



function FoodItems({price , name , image}) {
    
  return (
    <div className='shadow-sm  col-xl-6 col-md-6 col-sm-12 g-3'  >
        <div className='d-flex col-12 bg-dark rounded-3'>
          
            <div className="col-md-6 m-4">
                <img className='img-fluid rounded-1 img-thumbnail ' src={image} alt={name} />
            </div>
            <div className=" d-flex align-items-start flex-column col-md-6 my-4">
              <div className='d-flex justify-content-start'>
                <p className='h5 text-light px-2' >food :</p>
                <p className='h5 text-warning'>{name}</p>
                </div>
                <div className='d-flex justify-content-start'>
                <p className='h5 text-light px-2' >price :</p>
                <p className='h5 text-warning' >{price} $</p>
              </div>
              <div className='add-to-cart align-self-start w-100 mt-auto p-2 ' >
                <div className='d-flex flex-fill justify-content-end px-5'>
                <EyeIcon className='mx-2' fill='#ffc107' width='40px' height='40px'  />
                <AddToCart className='mx-2' fill='#ffc107' width='40px' height='40px'  />
                </div>
              </div>
                </div>
        </div>
    </div>
  )
}

export default FoodItems