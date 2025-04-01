"use client"
import React, { createContext } from 'react'
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  return (
    
     <AuthContext.Provider value={"ayush"}>
      {children}
     </AuthContext.Provider>
    
  )
}

export default AuthProvider
