import React, { useContext, useState  } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
// import { useNavigate    } from 'react-router-dom'
import { AuthData } from '../Context/authContext'

function Login() {
  const {userData ,setToken }  = useContext(AuthData)
  const [hidePass, setHidePass] = useState(false)
  const [logdata , setlogdata] = useState(null)
   const handle = (e) =>{
     const { name , value } = e.target;
     setlogdata(prev=>({ ...prev, [name]: value}))
   }
   
  return (
    <>    
     <Navbar/>

      
     <div>Login </div>
     <button onClick={()=> window.location.href = '/register'}>register</button>
      <div>
        <form onSubmit={e=>{
          e.preventDefault();
           if(logdata?.name && logdata?.password){
              let exist = userData?.some(isuser =>(isuser.name == logdata.name && isuser.password == logdata.password))
              if(exist){
                setToken(localStorage.setItem("token" , logdata.name))
                alert("Login Successful")
                return window.location.href = '/'
              }
              alert("Invalid Credentials")
            }
            else{
              alert("Please fill all fields")
            }
        }}>
          <input value={logdata?.name || ''} name='name'  onChange={handle} type="text" placeholder='Username' />
          <input value={logdata?.password || ''} name='password' onChange={handle} type={hidePass ? "text" : "password"} placeholder='Password' /> 
          <button type='button' onClick={() => setHidePass(!hidePass)}>{hidePass ? 'Show' : 'Hide'}</button>
          <button type='submit' >Login</button>
        </form>
      </div>

       
      <Footer/>

  </>
  )
}

export default Login