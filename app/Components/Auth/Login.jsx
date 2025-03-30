"use client"
import React, { useState } from 'react'

const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const handler =(e)=>{
    e.preventDefault();
    console.log("the email is",email)
    console.log("password is ",password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
     <div className='border-2 border-emerald-600 rounded-xl'>
       <form action=" "className='flex flex-col items-center justify-centre p-30' >
          <input  type="Email" value={email} onChange={(e)=>setEmail(e.target.value)}
          
         placeholder='Enter your email' 
          className='border-2 border-emerald-600 py-3 px-5 rounded-full text-xl text-white outline-0 bg-transparent placeholder:text-gray-400' required />


          <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} 
        
            placeholder='Enter yours password' className=' border-2 border-emerald-600 py-3 px-5 rounded-full mt-3 text-xl text-white outline-0 bg-transparent placeholder:text-gray-400' required />
          <button className=' bg-emerald-600 py-3 px-5 rounded-full text-xl text-white outline-0m-3 placeholder:text-gray-400 mt-6 ' onClick={handler}> Login</button>
       </form>




     </div>
    </div>
  )
}

export default Login
