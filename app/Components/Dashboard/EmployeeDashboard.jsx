import React from 'react'
import Header from '../../others/Header'
import Tasklistnumbers from '../../others/Tasklistnumbers'
import TaskList from '../Tasklist/TaskList'



function EmployeeDashboard() {
  return (
    <div className='h-screen' >
        <Header/>
        <Tasklistnumbers/>
        <TaskList/>
       
        
      
    </div>
  )
}

export default EmployeeDashboard
