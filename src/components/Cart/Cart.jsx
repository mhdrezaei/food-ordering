import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/basket.svg'

function Cart() {
  return (
    <>
    <div className="cart-navigation">
      <input type="checkbox" className="cart-navigation__check" id="nav-check"/>
      <label for="nav-check" className="cart-navigation__button">
        <span className="cart-navigation__icon">
		<CartIcon className='cart-navigation__icon--svg' width='35px' height='35px' />
		</span>
		<span className="cart-navigation__circle"></span>
		
      </label>
      <div className="cart-navigation__background"></div>

	  <div className="menu-cart-navigation-container bg-dark">
        <div id="menu-cart-navigation" className="w-50 menu bg-dark p-3 rounded-3 shadow">
          <div className='col-12' >
            <h2 className='text-light border-1' >Cart</h2>
            <hr className='text-light' />
            <div className='row'>
              <div className='col-6'><h3 className='text-light' >Food Name</h3></div>
              <div className='col-2'><h3 className='text-light' >price</h3></div>
              <div className='col-2'><h3 className='text-light' >count</h3></div>
              <div className='col-2'><h3 className='text-light' >remove</h3></div>
            </div>
            <div className='row'>
              <div className='col-6'><p className='text-light' >Hamberger</p></div>
              <div className='col-2'><p className='text-light' >30 $</p></div>
              <div className='col-2'><p className='text-light' >3</p></div>
              <div className='col-2'><p className='text-light' >X</p></div>
            </div>
            <div className='row'>
              <div className='col-6'><p className='text-light' >Hamberger</p></div>
              <div className='col-2'><p className='text-light' >30 $</p></div>
              <div className='col-2'><p className='text-light' >3</p></div>
              <div className='col-2'><p className='text-light' >X</p></div>
            </div>
            <div className='row'>
              <div className='col-6'><p className='text-light' >Hamberger</p></div>
              <div className='col-2'><p className='text-light' >30 $</p></div>
              <div className='col-2'><p className='text-light' >3</p></div>
              <div className='col-2'><p className='text-light' >X</p></div>
            </div>
          </div>
          <li id="menu-item-61" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-61"><a href="https://mhdrezaei.ir/category/back-end/">Back end</a></li>
            <li id="menu-item-62" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-62"><a href="https://mhdrezaei.ir/category/front-end/">Front end</a></li>
            <li id="menu-item-63" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-63"><a href="https://mhdrezaei.ir/category/security/">security</a></li>
            <li id="menu-item-64" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-64"><a href="https://mhdrezaei.ir/category/seo/">SEO</a></li>
        </div>
        </div> 
    </div>
    </>
  )
}

export default Cart