import React from 'react'
import {ReactComponent as TrashCan} from '../../assets/trash.svg'
import { useContext } from 'react';
import FoodContext from '../../context/foodContext';
function CartList({inx , name , price , image , count}) {

  const {cookie , removeFromCart } =useContext(FoodContext);

  const handleRemove = () =>{
    removeFromCart(cookie.user,inx)
  }
  return (
    <div className='row align-items-center'>
              <div className='col-3'><p className='text-light' ><img className='img-fluid' src={image} alt={name} /></p></div>
              <div className='col-3'><p className='text-light' >{name}</p></div>
              <div className='col-2'><p className='text-light' >{price} $</p></div>
              <div className='col-2'><p className='text-light' >{count}</p></div>
              <div className='col-2'><p className='text-light' >
                <button className='btn btn-danger' onClick={handleRemove} >
              <TrashCan  className='trash' fill='#fff' width='25px' height='25px' />
                </button>
              </p></div>
            </div>
  )
}

export default CartList