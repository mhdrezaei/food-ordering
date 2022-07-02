import React from 'react'
import { useContext , useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import FoodContext from '../../context/foodContext';
function BadgeCart() {
    const [cookie , setCookie] = useCookies('user')
    
    const {countFoodCart , countCart} = useContext(FoodContext);
    const user = cookie.user;
    const userInfo = {
        user
    }
    useEffect(()=>{
        countCart(userInfo);
    },[]);
  return (
    <span className='cart-navigation__badge'>{countFoodCart}</span>
  )
}

export default BadgeCart