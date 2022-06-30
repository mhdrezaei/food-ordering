import { createContext , useState } from "react";
import axios from "axios";

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


    return <FoodContext.Provider value={{
        getFoods,
        isLoading,
        foods,
        loading

    }}>{children}</FoodContext.Provider>
}

export default FoodContext;