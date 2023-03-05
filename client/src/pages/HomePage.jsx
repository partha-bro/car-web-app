import React, { useEffect, useState,useContext } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'
import TableCars from './TableCars'
import axios from 'axios'
import { LOGIN,LOADING } from '../store/action/authActionType'
import AuthContext from '../store/AuthContext'

const HomePage = () => {
  const [ state, dispatch ] = useContext(AuthContext)
  const [cars,setCars] = useState([])
  

  const fetch = async () => {
    dispatch({type:LOADING,payload:true})
    const token = localStorage.getItem('token')
    if(!token){
      dispatch({type:LOGIN,payload:false})
    }
    try {
       const response = await axios.get('/api/v1/cars',{
        headers: {
          authorization: `Bearer ${token}`
        }
       })
       const success = await response.data
       setCars(success.data)
       dispatch({type:LOADING,payload:false})
    } catch (error) {
       console.log(`Signup fetch error: ${error}`);
    }
  }

  useEffect(
    ()=>{
      fetch()
    },[]
  )


  return (
    <>
      <Header/>
        <TableCars data={cars} />
      <Footer />
    </>
  )
}

export default HomePage