import React, { useState } from 'react'
import { Link, Navigate, redirect } from 'react-router-dom'
import axios from 'axios'
import '../AuthStyle.css'

const Login = () => {
   const [form, setForm] = useState({
      email:'',
      password: ''
   })
   const [message, setMessage] = useState('')

   const fetch = async () => {
      try {
         const response = await axios.post('http://localhost:5000/login',form)
         const success = await response.data
         localStorage.setItem('token', success.token)
         setMessage(success.message)
         window.location.href = '/'
      } catch (error) {
         console.log(`login fetch error: ${error}`);
         setMessage('Email & Password incorrect!')
      }
    }
   
   const changeHandler = (e) => {
      setForm({
         ...form,[e.target.name]:e.target.value
      })
   }

   const loginHandler = (e) => {
      e.preventDefault()
      fetch()
   }

  return (
    <>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Application<br /> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>Email</label>
                     <input type="text" className="form-control" onChange={changeHandler} placeholder="Email" name='email' required value={form.email}/><br/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" onChange={changeHandler} placeholder="Password" name='password' required value={form.password}/><br/>
                  </div>
                  <button className="btn btn-black" onClick={loginHandler}>Login</button>&nbsp;&nbsp;
                  <Link to='/signup' className="btn btn-secondary">Signup</Link>
                  <hr/>
                  
                  { message.startsWith('Login ') ? <><div className="alert alert-success" role="alert">{ message }</div></>
                     : <><div className="alert alert-danger" role="alert">{ message }</div></>
                  }
               </form>
            </div>
         </div>
      </div>
    </>
  )
}

export default Login