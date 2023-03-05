import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './components/auth/loginPage/Login'
import Signup from './components/auth/signupPage/Signup'
import MyCars from './pages/MyCars'
import NewCar from './pages/NewCar'
import CarDetailsPage from './pages/CarDetailsPage'
import {  useReducer } from 'react'
import authReducer from './store/reducer/authReducer'
import { initState } from './store/initState'
import AuthContext from './store/AuthContext'

function App() {
    const [ state, dispatch ] = useReducer(authReducer,initState )

  return (
    <BrowserRouter>
      <AuthContext.Provider value={[ state, dispatch ]}>
        <Routes>
          <Route path='/' element={ state.isLogged ? <HomePage /> : <Navigate replace to={'/login'}/>} />
          <Route path='/newCar' element={state.isLogged ? <NewCar/> : <Navigate replace to={'/login'}/>} />
          <Route path='/myCars' element={state.isLogged ? <MyCars /> : <Navigate replace to={'/login'}/>} />
          <Route path='/login' element={state.isLogged ? <Navigate replace to={'/'}/> : <Login />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/details/:id' element={<CarDetailsPage/>} />
          <Route path='*' element={<Navigate replace to={'/login'}/>} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App
