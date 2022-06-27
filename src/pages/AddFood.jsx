import React from 'react'
import {useState} from 'react';
import { toast } from 'react-toastify';

function AddFood() {
    const [formData , setFormData] = useState({
        foodName :'',
        price :'',
        imgPath : ''
    });

    const { foodName , price ,imgPath} = formData;

    const onSubmit = (e) => {
        e.preventDefault();
        if(foodName === '' || price === '' || imgPath ===''){
            toast.error('All field are necessary!!!')
            return
        }
        const newFood ={
            name : foodName,
            price : price,
            imgUrl : imgPath
        }
        console.log(newFood);
        
        fetch('http://localhost:5000/stored', {
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
        
        setFormData({
          foodName :'',
          price :'',
          imgPath : ''
      });
    } )
      .catch((err) => {
        console.log(err.message);
        toast.error(err)
      });
   
    }
    const onChange = (e) =>{
        setFormData((prevState) => {
            return {
              ...prevState,
              [e.target.id] : e.target.value
            }
          })

    }
  return (
    <div className='container-fluid my-3'>
    <div className='container' >
        <div className='col-12 bg-dark rounded-2 py-2'>
        <h2 className='text-center text-warning py-5' >Add your food</h2>
            <form onSubmit={onSubmit} >
            <div className='m-3'>
                <input 
                type='text'
                id='foodName' 
                className='form-control' 
                placeholder='Food Name...'
                value={foodName}
                onChange={onChange}
                ></input>
            </div>
            <div className='m-3'>
                <input 
                type='text' 
                id='price' 
                className='form-control' 
                placeholder='Price...'
                value={price}
                onChange={onChange}
                ></input>
            </div>
            <div className='m-3'>
                <input 
                type='text' 
                id='imgPath' 
                className='form-control' 
                placeholder='Image URL...'
                value={imgPath}
                onChange={onChange}
                ></input>
            </div>
            <div className='m-5 text-center'>
            <button className='btn btn-warning'>Send</button>
            </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default AddFood