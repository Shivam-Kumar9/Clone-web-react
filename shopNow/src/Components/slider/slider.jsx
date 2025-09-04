import { useState } from "react";
import { GoDotFill } from "react-icons/go";

const MainSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverArrow, setHoverArrow] = useState(false)
   const sliderStyles = {
    height : '100%',
    position : 'relative'
   }
   const leftArrowStyles = {
     position: 'absolute',
    //  width : '50px', height: "50px", 
    padding : '15px',
    color : hoverArrow ? 'gray' : 'white',
    backgroundColor : hoverArrow ? 'white' : '',
    //  border : '1px solid ',
     borderRadius : '9999px',
     top: '50%',
     left: '3%',
     transform: 'translateY(-50%)',
     fontSize: '5vh',
     zIndex: 1,
     cursor: 'pointer'
   };
   const rightArrowStyles = {
     position: 'absolute',
     padding : '15px',
     color : hoverArrow ? 'gray' : 'white',
     backgroundColor : hoverArrow ? 'white' : '',
     borderRadius : '9999px',
     top: '50%',
     right: '3%',
     transform: 'translateY(-50%)',
     fontSize: '5vh',
     zIndex: 1,
     cursor: 'pointer'
   };

  const slideStyles = {
     width : '100%', height : "100%",
     borderRadius  : '10px',
     backgroundPosition :"center",
     backgroundSize: 'cover',
     backgroundImage: `url(${slides[currentIndex]})` };
  
    const dotsContainerStyles = {
      display : 'flex',
      justifyContent: "center",
      // border : "1px solid",
      position : "absolute",
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)"
    }
     
  const dotStyles = {
    // border : "1px solid",
    // borderRadius : "999px",

    height : "20px",
    color : "white",
    margin: "0 10px",
    cursor : "pointer",
    fontSize : "10px"
  } 
     
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
   return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious} onMouseEnter={() =>setHoverArrow(true)} onMouseLeave={()=>setHoverArrow(false)}>⟪</div>
      <div style={rightArrowStyles} onClick={goToNext} onMouseEnter={() =>setHoverArrow(true)} onMouseLeave={()=>setHoverArrow(false)} >⟫</div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, index) => (
          <div key={index} style={{
        ...dotStyles,
        borderRadius: index === currentIndex ? '999px' : '0',
        backgroundColor: index === currentIndex ? 'white' : 'transparent',
        padding: index === currentIndex ? '3px 3px' : '4px',
        border: index === currentIndex ? '2px solid gray' : 'none'
      }} onClick={() => setCurrentIndex(index)}><GoDotFill/></div>
        ))}
      </div>
    </div>
  );
};

export default MainSlider;
