import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Header from './partials/Header'
import Footer from './partials/Footer'
import TableCars from './TableCars'
import axios from 'axios'

const MyCars = () => {

  const [cars,setCars] = useState([])
  const {name} = useParams('name')
  const [isLoading,setLoading] = useState(false)

  const fetch = async () => {
    setLoading(true)
    const token = localStorage.getItem('token')
    if(!token){
      window.location.href = '/login';
    }
    try {
       const response = await axios.get(`http://localhost:5000/api/v1/cars/${name}`,{
        headers: {
          authorization: `Bearer ${token}`
        }
       })
       const success = await response.data
       setCars(success.data)
       setLoading(false)
    } catch (error) {
       console.log(`Signup fetch error: ${error}`);
    }
  }

  useEffect(
    ()=>{
      fetch()
      return ()=>{}
    },[]
  )

  return (
    <>
      <Header username={name}/>
        <TableCars data={cars} loading={isLoading} flag='myCar'/>
      <Footer />
    </>
  )
}

export default MyCars