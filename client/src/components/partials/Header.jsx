import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({username}) => {

  const logoutFn = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand text-warning" to="#">Car Web App</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link text-white" to="/">Home </NavLink>
            <NavLink to={`/myCars/${username}`} className="nav-item nav-link text-white" >My Cars</NavLink>
            <NavLink to={`/newCar/${username}`} className="nav-item nav-link text-white" >New Car</NavLink>
            
          </div>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <NavLink className="nav-item nav-link disabled text-white text-center" to="#">{username.toUpperCase()}</NavLink>
          <button className="btn btn-danger my-2 my-sm-0" onClick={logoutFn}>Logout</button>
        </form>
      </nav>
    </div>
  )
}

export default Header