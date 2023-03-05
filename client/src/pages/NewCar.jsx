import React, { useState,useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import axios from "axios";
import { LOGIN,MESSAGE } from '../store/action/authActionType'
import AuthContext from '../store/AuthContext'

const NewCar = () => {

  const [ state, dispatch ] = useContext(AuthContext)
  const [car, setCar] = useState({
    brandName:'',
    model: ''
 })

 useEffect(
  ()=>{
    dispatch({type:MESSAGE,payload:''})
  },[]
 )


 const fetch = async () => {
    const token = localStorage.getItem('token')
    if(!token){
      dispatch({type:LOGIN,payload:false})
    }
    try {
       const response = await axios.post('http://localhost:5000/api/v1/cars',car,{
        headers: {
          authorization: `Bearer ${token}`
        }
       })
       const success = await response.data
       dispatch({type:MESSAGE,payload:success.message})
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
        {state.message.startsWith("Something ") ? (
            <>
            <div className="alert alert-danger" role="alert">
              {state.message}
            </div>
          </>
         
        ) : (
            <>
            <div className="alert alert-success" role="alert">
              {state.message}
            </div>
          </>
        )}
      </form>
      <Footer />
    </>
  );
};

export default NewCar;
