import React from 'react'
import AuthContext from './context/AuthContext'
import TaskContext from './context/TaskContext'
import LocalStorage from './utlis/LocalStorage'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

function page() {
  return (
    <div >
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboard/>

      
      
    </div>
  )
}

export default page
