import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Header from './partials/Header'
import Footer from './partials/Footer'
import TableCars from './TableCars'
import axios from 'axios'

const HomePage = () => {
  const [cars,setCars] = useState([])
  const [username,setUsername] = useState('guest')
  const [isLoading,setLoading] = useState(false)



  const fetch = async () => {
    setLoading(true)
    const token = localStorage.getItem('token')
    if(!token){
      window.location.href = '/login';
    }
    try {
       const response = await axios.get('http://localhost:5000/api/v1/cars',{
        headers: {
          authorization: `Bearer ${token}`
        }
       })
       const success = await response.data
       setCars(success.data)
       setUsername(success.user.name)
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
      <Header username={username}/>
        <TableCars data={cars} loading={isLoading} flag='allCar'/>
      <Footer />
    </>
  )
}

export default HomePage