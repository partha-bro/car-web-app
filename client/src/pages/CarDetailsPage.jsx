import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './partials/Header'
import Footer from './partials/Footer'
// import axios from 'axios'

const CarDetailsPage = () => {
  const {id} = useParams('id')
  return (
    <>
    <Header />
        <h1>{id}</h1>
      <Footer />
    </>
  )
}

export default CarDetailsPage