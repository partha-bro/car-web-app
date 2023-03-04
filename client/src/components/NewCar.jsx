import React, { useEffect, useState } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import axios from "axios";

const NewCar = () => {
  const { name } = useParams("name");
  const [car, setCar] = useState({
    brandName:'',
    model: ''
 })
 const [message, setMessage] = useState('')

 const fetch = async () => {
    const token = localStorage.getItem('token')
    if(!token){
        window.location.href = '/login';
    }
    try {
       const response = await axios.post('http://localhost:5000/api/v1/cars',car,{
        headers: {
          authorization: `Bearer ${token}`
        }
       })
       const success = await response.data
       setMessage(success.message)
    } catch (error) {
       console.log(`fetch error: ${error}`);
       setMessage('Something went wrong!')
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
      <Header username={name} />
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
        {message.startsWith("Something ") ? (
            <>
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </>
         
        ) : (
            <>
            <div className="alert alert-success" role="alert">
              {message}
            </div>
          </>
        )}
      </form>
      <Footer />
    </>
  );
};

export default NewCar;
