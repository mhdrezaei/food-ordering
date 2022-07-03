import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/basket.svg'
import BadgeCart from './BadgeCart';
import { useContext } from 'react';
import FoodContext from '../../context/foodContext';
import CartList from './CartList';
import CartFooter from './CartFooter';

function Cart() {
  const {cartList} = useContext(FoodContext);
  console.log(cartList);
  
  const result = [...cartList.reduce((r, e) => {
    let k = `${e.foodName}|${e.foodName}`;
    if(!r.has(k)) r.set(k, {...e, count: 1})
    else r.get(k).count++
    return r;
  }, new Map).values()];
  
  console.log(result)

  return (
    <>
    <div className="cart-navigation">
      <input type="checkbox" className="cart-navigation__check" id="nav-check"/>
      <label htmlFor="nav-check" className="cart-navigation__button">
        <span className="cart-navigation__icon">
        <BadgeCart/>
		<CartIcon className='cart-navigation__icon--svg' width='35px' height='35px' />
		</span>
		<span className="cart-navigation__circle"></span>
		
      </label>
      
      <div className="cart-navigation__background"></div>

	  <div className="menu-cart-navigation-container bg-dark mb-3">
        <div id="menu-cart-navigation" className="w-50 menu bg-dark p-3 rounded-3 shadow">
          <div className='col-12' >
            <h2 className='text-light border-1' >Cart</h2>
            <hr className='text-light' />
            {result.map((food) => {
              return <CartList key={food._id} count={food.count} name={food.foodName} price={food.price} image={food.imgUrl} />
            })}
            
            
          </div>
          
        <CartFooter/>
        </div>
        </div> 
    </div>
    </>
  )
}

export default Cart