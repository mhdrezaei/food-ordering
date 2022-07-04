import { createContext , useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';


const FoodContext = createContext();

export const FoodProvider = ({children}) => {
    // const initialState = {
    //     foods : [] ,
    //     loading : true
    // }
    const [foods , setFoods] = useState([]);
    const [loading , setLoading] = useState(true);
    const [countFoodCart , setCountFoodCart] = useState(0);
    const [cartList , setCartList] = useState([]);
    const [cookie, setCookie] = useCookies(['user']);
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  if(!cookie.user){
    setCookie('user' , randomNumberInRange(1000000,10000000),{ path: '/' });
    }
    const userCookie = {
      user : cookie.user
    }
    // Loading
    const isLoading = (status) => {
        setLoading(status);
    }

    //Get foods
    const getFoods = async () =>{
        const foodsData = await axios('http://localhost:5000/showall',);
        console.log(foodsData.data);
        setFoods(foodsData.data);
    }

    // count cart 
    const countCart = async (user) => {
      console.log(user)
      const countFoods = await fetch('http://localhost:5000/count-cart',{
        method : 'POST',
        mode : 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },
        body : JSON.stringify(user),
      }).then((res) => {
        if (!res.status) {
        toast.error(`This is an HTTP error: The status is ${res.status}`)
        return
        }
        return res.json() 
      }).then((actualData) => { 
        setCountFoodCart(actualData.length);        
        setCartList(actualData);        
    } )
      .catch((err) => {
        console.log(err.message);
        toast.error(err)
      });
      

    }
    // remove from cart
    const removeFromCart = async (user , foodId) =>{
      const deleteInfo = {
        user,
        foodId
      }

      const delFoods = fetch('http://localhost:5000/remove-from-cart',{
        method : 'DELETE',
        mode : 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*'
      },
        body : JSON.stringify(deleteInfo),
      }).then((res) => {
        if (!res.status) {
        toast.error(`This is an HTTP error: The status is ${res.status}`)
        return
        }
        return res.json() 
      }).then((actualData) => { 
        console.log(actualData)
        actualData.error ?  toast.error(actualData.error) : toast.success(actualData.success); 
        const userInfo = {
          user
      }
      countCart(userInfo);

            
    } )
      .catch((err) => {
        console.log(err.message);
        toast.error(err)
      });
      




    }
    // add To Cart

    const addToCart = (newFood) => {
        fetch('http://localhost:5000/add-to-cart', {
        method: 'POST',
        mode : 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body : JSON.stringify(newFood)
      }).then((res) => {
        if (!res.status) {
        toast.error(`This is an HTTP error: The status is ${res.status}`)
        return
        }
        return res.json() 
      }).then((actualData) => { 
        actualData.message.error ?  toast.error(actualData.message.error) : toast.success(actualData.message.success);
        countCart(userCookie);
    } )
      .catch((err) => {
        console.log(err.message);
        toast.error(err)
      });
    }


    return <FoodContext.Provider value={{
        getFoods,
        isLoading,
        addToCart,
        countCart,
        removeFromCart,
        foods,
        loading,
        countFoodCart,
        cartList,
        cookie

    }}>{children}</FoodContext.Provider>
}

export default FoodContext;