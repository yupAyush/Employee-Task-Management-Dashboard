"use client"
import { MyContext } from '@/context/Context'
import React, { useContext, useEffect, useState } from 'react'
import Call from './others/Call'
import { getLocalStorage } from './utlis/LocalStorage'
import { setLocalStorage } from './utlis/LocalStorage'






function page() {
 
  // console.log(localStorage.getItem("admin"))

 
  useEffect(()=>{
      setLocalStorage();
      getLocalStorage();
    })
  // const data =getLocalStorage();
    // console.log(data)
 


  
  return (
    <div >
      <Call/>
      
      
      


      
      
      
    </div>
  )
}

export default page
