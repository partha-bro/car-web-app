import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../AuthStyle.css'

const Signup = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [message, setMessage] = useState('')

    const fetch = async () => {
      try {
         const response = await axios.post('http://localhost:5000/signup',form)
         const success = await response.data
         setMessage(success.message + ' Now you are goto Login Page.');
      } catch (error) {
         setMessage('Something went wrong!');
         console.log(`Signup fetch error: ${error}`);
         
      }
    }
   
   const changeHandler = (e) => {
      setForm({
         ...form,[e.target.name]:e.target.value
      })
   }

   const signupHandler = (e) => {
      e.preventDefault()
      fetch()
   }



  return (
    <>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Application<br /> Sign-Up Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <div>
                  <div className="form-group">
                     <label>Name</label>
                     <input type="text" className="form-control" onChange={changeHandler} placeholder="Name" name='name' required value={form.name}/><br/>
                  </div>
                  <div className="form-group">
                     <label>Email</label>
                     <input type="text" className="form-control" onChange={changeHandler} placeholder="Email" name='email' required value={form.email}/><br/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" onChange={changeHandler} placeholder="Password" name='password' required value={form.password}/><br/>
                  </div>
                    <Link to='/login'  className="btn btn-secondary">Login</Link>&nbsp;&nbsp;
                  <button className="btn btn-black" onClick={signupHandler}>Signup</button>
                  <hr/>
                  { message.startsWith('Something ') ? <><div className="alert alert-danger" role="alert">{ message }</div></>
                     : <><div className="alert alert-success" role="alert">{ message }</div></>
                  }
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Signup