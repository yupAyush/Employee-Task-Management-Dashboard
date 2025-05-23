import React from 'react'
import Tasklistnumbers from './Tasklistnumbers'
import Login from '../Components/Auth/Login'

function Header(props) {
  const logout = () => {
    console.log(props.changeuser)
    props.changeuser("")
  }

 
  return (
    <>
    <div className='flex items-end justify-between text-white p-10'>
       <h1 className='text-2xl  font-medium '>Hello ,<br /><span className='text-3xl font-semibold'> {props.name}👋</span></h1>
       <button onClick={logout} className='bg-red-600 text-lg font-medium  rounded-small px-5 py-2 ' >Log out</button>
      
    </div>
   
    </>
  )
}

export default Header
