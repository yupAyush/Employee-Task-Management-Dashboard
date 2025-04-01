"use client"
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from './context/AuthProvider'
import TaskContext from './context/TaskContext'
import LocalStorage, { getLocalStorage, setLocalStorage } from './utlis/LocalStorage'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

function page() {
  useEffect(()=>{
    setLocalStorage();
    getLocalStorage();
  })
  const [user,setUser]=useState("")

  const LoginHandler=(username,password)=>{
    if(username=="admin@123" && password =="123"){
      setUser("admin");
    }else if(username=="employee@123" && password =="123"){
      setUser("employee");
    }
    else{
      alert("wrong user name or password")
      setUser("")

    }
  }
  const data = useContext(AuthContext)



  
  return (
    <div >
      {!user?< Login LoginHandler={LoginHandler}  />:''}
      
      

      {user=="admin"?<AdminDashboard/>:<EmployeeDashboard/>}
      
      
    </div>
  )
}

export default page
