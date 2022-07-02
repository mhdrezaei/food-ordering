import React from 'react'
import {ReactComponent as TrashCan} from '../../assets/trash.svg'
function CartList({name , price , image , count}) {
  return (
    <div className='row align-items-center'>
              <div className='col-3'><p className='text-light' ><img className='img-fluid' src={image} alt={name} /></p></div>
              <div className='col-3'><p className='text-light' >{name}</p></div>
              <div className='col-2'><p className='text-light' >{price} $</p></div>
              <div className='col-2'><p className='text-light' >{count}</p></div>
              <div className='col-2'><p className='text-light' >
              <TrashCan className='trash' fill='#fe005d' width='25px' height='25px' />
              </p></div>
            </div>
  )
}

export default CartList