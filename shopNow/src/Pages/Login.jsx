import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Navigate ,   } from 'react-router-dom'

function Login() {
  return (
    <>
     <Navbar/>

      
     <div>Login </div>
     <button onClick={()=> window.location.href = '/register'}>register</button>

      <footer/>

  </>
  )
}

export default Login