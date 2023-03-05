import React,{useState,useContext,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from './partials/Header'
import Footer from './partials/Footer'
import axios from "axios";
import { LOGIN,MESSAGE } from '../store/action/authActionType'
import AuthContext from '../store/AuthContext'

const CarDetailsPage = () => {
  const { userId,carId } = useParams('id')
  const [ state, dispatch ] = useContext(AuthContext)
  const [car, setCar] = useState({
    brandName:'',
    model: ''
 })

 const fetch = async () => {
  const token = localStorage.getItem('token')
  if(!token){
    dispatch({type:LOGIN,payload:false})
  }
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

useEffect(
  ()=>{
    fetch()
  },[]
 )

  return (
    <>
    <Header />
        <div className='container'>
          <div className='row'>
              <div className='col-lg-6'>
                <div className='row'>
                    <div className='col-lg-12'>
                      <h2 className='text-center'>Details</h2>
                      <hr/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                      <h3 >Brand Name</h3>
                    </div>
                    <div className='col-lg-6'>
                      <h3 >{car.brandName}</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                      <h3 >Model</h3>
                    </div>
                    <div className='col-lg-6'>
                      <h3 >{car.model}</h3>
                    </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <img src='/images/OIP.jpg' alt='Image of Car' height='100%' width='100%'/>
              </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default CarDetailsPage