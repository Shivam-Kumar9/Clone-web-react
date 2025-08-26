import React from 'react'
import './css/404.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar/>
       <div className='page_not_found_div'>
         <h1>404 - Page Not Found</h1>
       </div>
      <Footer/>
    </>
  )
}
