import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import GSchemes from './components/GSchemes'
import Quiz from './components/Quiz'
import QuizTab from './components/QuizTab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path='/user/signup' element={<Signup/>}/>
    <Route path='/user/login' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/schemes' element={<GSchemes/>}/>
    <Route path='/quiz' element={<QuizTab/>}/>
    </Routes>
    </>
  )
}

export default App
