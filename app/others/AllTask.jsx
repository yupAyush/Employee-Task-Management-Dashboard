"use client"
import { useContext } from 'react'
import { MyContext } from '@/context/Context'
import React from 'react'

function AllTask() {
    const [userdata,setuserData]=useContext(MyContext)
    const b =JSON.parse(userdata)
    console.log(b)
    
    
    
  return (
    <div  className='p-5  text-white mt-5 rounded-xl h-60 '>
            <div className=' flex mb-2 justify-between bg-red-400 py-2 px-4'>
             <h2 className='w-1/5'>Employee name</h2>
             <h3 className='w-1/5'>Newtask</h3>
             <h5 className='w-1/5'>ActiveTask</h5>
             <h5 className='w-1/5 '>Completed</h5>
             <h5 className='w-1/5'>Failed</h5>

            </div>
        
        <div id='AllTask' className='h-[80%] overflow-auto'>

            { b.map((e,i)=>{
               return <  div className=' flex  border-2 mb-2 justify-between text-bold border-emerald-400 py-2 px-4' key={i}> 
               <h2  className='w-1/5'>{e.name }</h2>
               <h3 className='w-1/5 text-blue-500'>{e.taskCount.newTask}</h3>
               <h5 className='w-1/5 text-yellow-500'>{e.taskCount.active}</h5>
               <h5 className='w-1/5 text-white' >{e.taskCount.completed}</h5>
                <h5 className='w-1/5 text-red-500'>{e.taskCount.failed}</h5>
             </div>
           })}
        </div> 
       
    </div>
  )
}

export default AllTask
