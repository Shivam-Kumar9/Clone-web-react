import React from 'react'
import './css/home.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import  MainSlider  from '../Components/slider/slider'

function Home() {
   const productImages = [
      "https://picsum.photos/id/1/300/200",
      "https://picsum.photos/id/2/300/200",
      "https://picsum.photos/id/3/300/200",
      "https://picsum.photos/id/4/300/200",
      "https://picsum.photos/id/5/300/200",
  ];
  const containerStyles = {
    width: '90vw',
    height : "70vh",
    margin: "0 auto"
  }

  return(
 <>
  <Navbar/>
    <div className='home' >home
     <div style={containerStyles}>
      <MainSlider slides={productImages}/>
      </div> 
    </div>
  <Footer/>
 </>
  )
}

export default Home