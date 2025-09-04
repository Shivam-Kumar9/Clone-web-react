import  { useState, useContext,  } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { AuthData } from '../Context/authContext'
import { useNavigate } from 'react-router-dom'
function Register() {
  const navigate = useNavigate();
   const { userData, setUserData ,setToken } = useContext(AuthData);
   const [user, setUser] =  useState(null);
    
  const handle = (e)=>{
     const {name , value} = e.target ;
     setUser(prev => ({...prev , [name]:value }))}
     
     
 console.log(user);
  return ( 
    <> 
      <Navbar/> 
      <div>Register
         
      <form onSubmit={(e)=>{e.preventDefault();
        if( user?.name && user?.email && user?.password){
           let exist = userData?.some(isuser =>(isuser.name == user.name || isuser.email == user.email)) 
          if(exist){
            return alert("User already exists")
          }
          let newUser = {...user, cart : []}
          setUserData(prev => ([...prev , newUser]))

          console.log(userData);
          localStorage.setItem("userData" , JSON.stringify([...userData , newUser]))

          // setToken(localStorage.setItem("token" , user.name))

          alert("Registered Successfully")
          navigate('/login')
        }
        else{
          alert("Please fill all the details")
        }
      }}>
        <input type="text" value={ user?.name || ''} name='name' placeholder="Name" onChange={handle} />
        <input type="email" value={ user?.email || '' } name='email' placeholder="Email" onChange={handle} />
        <input type="password" value={user?.password || ''} name='password' placeholder="Password" onChange={handle} />
        <button type="submit" >Register</button>
      </form>

      </div>
     

      <Footer/>
    </>
  )
}
 
export default Register