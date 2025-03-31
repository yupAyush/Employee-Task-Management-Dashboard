
import React from 'react'
import Header from '@/app/others/Header'
import CreateTask from '@/app/others/CreateTask'
import AllTask from '@/app/others/AllTask'

function AdminDashboard() {
  return (
    <div>
        <Header/>
        <CreateTask/>
        <AllTask/>
      
    </div>
  )
}

export default AdminDashboard
