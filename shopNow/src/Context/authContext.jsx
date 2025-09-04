import React, { createContext, useState } from 'react'

export  const AuthData = createContext()

function AuthContext({children}) {
  const [userData , setUserData] = useState(()=>{
    const data = localStorage.getItem("userData")
    return data ? JSON.parse(data) : []
  })
  const [ token , setToken] = useState(null)
     
  return (
    <AuthData.Provider value={{userData , setUserData , token , setToken}}>
        {children}
    </AuthData.Provider>
  )
}

export default AuthContext