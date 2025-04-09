import React from 'react'
import Header from '../../others/Header'
import Tasklistnumbers from '../../others/Tasklistnumbers'
import TaskList from '../Tasklist/TaskList'



function EmployeeDashboard(props) {
  console.log(props.data.name)
  return (
    <div className='h-screen' >
        <Header changeuser={props.changeuser} name={props.data.name}/>
        <Tasklistnumbers data={props.data}/>
        <TaskList data={props.data}/>
       
        
      
    </div>
  )
}

export default EmployeeDashboard
