import React, { useContext } from 'react'
import { AuthContext } from '../Components/context/AuthProvider'
import Login from '../Components/Auth/Login'

function A() {
    const a=useContext(AuthContext)
    console.log(a)
  return (
    <div>
        
        
      
    </div>
  )
}

export default A
