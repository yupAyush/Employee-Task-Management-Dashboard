"use client"
import React from 'react'
import { useState,useEffect,useContext } from 'react'
import Login from '../Components/Auth/Login'
import AdminDashboard from '../Components/Dashboard/AdminDashboard'
import EmployeeDashboard from '../Components/Dashboard/EmployeeDashboard'
import { MyContext } from '@/context/Context'

function Call() {
 
 
  const a = localStorage.getItem("employee")
  console.log(a)
  const b=JSON.parse(a)
  

  const [userData, setuserData] = useState();
  
  

  


  
  const [user,setUser]=useState("")

  const LoginHandler=(username,password)=>{
    if(username=="admin@123" && password =="123"){
      setUser("admin");
    }else if(b){
      const employee =b && b.find((f)=>f.email==username && f.password==password)
      if(employee){
      setUser("employee");
      setuserData(employee)
     }  
    }
    else{
      alert("wrong user name or password")
      setUser("")

    }
  }
  
  return (
    <div>
        {!user?< Login LoginHandler={LoginHandler}  />:''}
      
      

      {user=="admin"?<  AdminDashboard changeuser={setUser}/>:( user == "employee" ? <EmployeeDashboard changeuser={setUser} data={userData}/>:null)}
      
    </div>
  )
}

export default Call
