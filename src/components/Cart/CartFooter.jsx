import React from 'react'
import { useContext , useEffect , useState } from 'react';
import FoodContext from '../../context/foodContext';


function CartFooter({total}) {
    const {cartList} = useContext(FoodContext);
    const [totalPrice , setTotalPrice] = useState();


useEffect(() => {
    const sumall = cartList.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
    setTotalPrice(sumall);
},[cartList])
  return (
    <div className='col-12'>
        <div className='container'>
            <hr className='text-light' />
        <div className='row justify-content-end'>
            
            <p className='total-price text-light h3' >
                total : {totalPrice} $
            </p>
           
            
                <button className='btn btn-warning'>pay</button>
          
        </div>
        </div>
        </div>
  )
}

export default CartFooter