import { createContext , useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FoodContext = createContext();

export const FoodProvider = ({children}) => {
    // const initialState = {
    //     foods : [] ,
    //     loading : true
    // }
    const [foods , setFoods] = useState([]);
    const [loading , setLoading] = useState(true);

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
        actualData.message.error ?  toast.error(actualData.message.error) : toast.success(actualData.message.success)
        console.log(actualData);
        
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
        foods,
        loading

    }}>{children}</FoodContext.Provider>
}

export default FoodContext;