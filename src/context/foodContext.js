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
    const [cookie , setCookie] = useCookies('user');
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
        foods,
        loading,
        countFoodCart,
        cartList

    }}>{children}</FoodContext.Provider>
}

export default FoodContext;