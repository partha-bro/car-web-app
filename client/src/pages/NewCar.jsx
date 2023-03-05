import React, { useState,useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import axios from "axios";
import { LOGIN,MESSAGE } from '../store/action/authActionType'
import AuthContext from '../store/AuthContext'

const NewCar = ({workStatus}) => {

  let url
  const token = localStorage.getItem('token')
  const {userId,carId} = useParams()
  const [ state, dispatch ] = useContext(AuthContext)
  const [car, setCar] = useState({
    brandName:'',
    model: ''
 })

 useEffect(
  ()=>{
    if(workStatus === 'new') dispatch({type:MESSAGE,payload:'Please write your Car name and Model.'})
    else {
      const editData = async () =>{
        try {
          const response = await axios.get(`/api/v1/car/${userId}/${carId}`,{
            headers: {
              authorization: `Bearer ${token}`
            }
           })
           const success = await response.data
           setCar(success.data)
           dispatch({type:MESSAGE,payload:success.message})
        } catch (error) {
           console.log(`fetch error: ${error}`)
           dispatch({type:MESSAGE,payload:'Something went wrong!'})
        }
      }
      editData()
    }
  },[]
 )


 const fetch = async () => {
    if(!token){
      dispatch({type:LOGIN,payload:false})
    }
    try {
      if(workStatus === 'new') {
        url = '/api/v1/cars'
        const response = await axios.post(url,car,{
          headers: {
            authorization: `Bearer ${token}`
          }
         })
         const success = await response.data
       dispatch({type:MESSAGE,payload:success.message})
      }else{
        url= `/api/v1/car/${userId}/${carId}`
        const response = await axios.patch(url,car,{
          headers: {
            authorization: `Bearer ${token}`
          }
         })
         const success = await response.data
        dispatch({type:MESSAGE,payload:success.message}) 
      }
       
       
    } catch (error) {
       console.log(`fetch error: ${error}`)
       dispatch({type:MESSAGE,payload:'Something went wrong!'})
    }
  }
 
 const changeHandler = (e) => {
    setCar({
       ...car,[e.target.name]:e.target.value
    })
 }

 const createHandler = (e) => {
    e.preventDefault()
    fetch()
 }

  return (
    <>
      <Header />
      <form className="container">
        <div className="form-group">
          <label>Brand Name</label>
          <input type="text" className="form-control" onChange={changeHandler} placeholder="Brand Name" name="brandName" required value={car.brandName} />
          <br />
        </div>
        <div className="form-group">
          <label>Model</label>
          <input type="text" className="form-control" onChange={changeHandler} placeholder="Model" name="model" required value={car.model}
          />
          <br />
        </div>
        <button className="btn btn-black" onClick={createHandler}> Create </button>
        &nbsp;&nbsp;
        <Link to="/" className="btn btn-secondary"> Cancel </Link>
        <hr />
            <div className="alert alert-primary" role="alert">
              {state.message}
            </div>
      </form>
      <Footer />
    </>
  );
};

export default NewCar;
