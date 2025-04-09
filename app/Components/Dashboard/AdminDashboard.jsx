
"use client"
import React, { useContext } from 'react'
import Header from '@/app/others/Header'
import CreateTask from '@/app/others/CreateTask'
import AllTask from '@/app/others/AllTask'



function AdminDashboard(props) {
  
  return (
    <div>
        <Header changeuser={props.changeuser}/>
        <CreateTask/>
        <AllTask/>
      
    </div>
  )
}

export default AdminDashboard
