import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/auth/loginPage/Login'
import Signup from './components/auth/signupPage/Signup'
import MyCars from './components/MyCars'
import NewCar from './components/NewCar'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/newCar/:name' element={<NewCar />} />
        <Route path='/myCars/:name' element={<MyCars/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
