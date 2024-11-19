import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Schemes from './components/Schemes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/user/signup' element={<Signup/>}/>
    <Route path='/user/login' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/schemes' element={<Schemes/>}/>
    </Routes>
    </>
  )
}

export default App
