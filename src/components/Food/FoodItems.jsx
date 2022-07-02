import React from 'react';
import { useContext } from 'react'; 
import FoodContext from '../../context/foodContext';
import {ReactComponent as AddToCart} from '../../assets/add-to-cart.svg'
import {ReactComponent as EyeIcon} from '../../assets/eye.svg'
import { useCookies } from 'react-cookie';


function FoodItems({inx ,price , name , image}) {
  const {addToCart} = useContext(FoodContext);
  const [cookies, setCookie] = useCookies(['user']);
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if(!cookies.user){
    setCookie('user' , randomNumberInRange(1000000,10000000),{ path: '/' });
    }
 
  const handleClick = (e) => {
    e.preventDefault();
     
    const thisFood = {
      user : cookies.user,
      food : [{
      foodName : name,
      price : price,
      imgUrl : image,
      foodId : inx 
      }
    ]
    }
    addToCart(thisFood);
  }
    
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
                  <button  className='btn btn-warning mx-2'>
                <EyeIcon  fill='#212529' width='1.5rem' height='1.5rem'  />
                  </button>
                  <a href='#' onClick={handleClick} className='btn btn-warning mx-2'>
                <AddToCart   fill='#212529' width='1.5rem' height='1.5rem'  />
                  </a>
                </div>
              </div>
                </div>
        </div>
    </div>
  )
}

export default FoodItems