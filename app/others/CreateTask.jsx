"use client"
import { MyContext } from '@/context/Context';
import { use, useContext, useState } from 'react';
import React from 'react'


function CreateTask() {
  const [userData,setuserData]=useContext(MyContext)
  const b =JSON.parse(userData)
  const [Task, setTask] = useState('');
  const [date, setdate] = useState('');
  const [AssignTo, setAssignTo] = useState('');
  const [Des, setDes] = useState();
  const [Category, setCategory] = useState();
  const [data, setdata] = useState({});



  const sumbitHandler=(e)=>{
    e.preventDefault(); 
    setdata({
      title:Task,
      date:date,
      description:Des,
      category:Category,
    
      newTask:true,
      active:false,
      completed:false,
    })

    console.log(data)
    
    const Data = localStorage.getItem("employee")
    const parsedData = JSON.parse(Data)
    
    console.log(typeof(Data))
   

    parsedData.forEach(function (elem) {
            if (AssignTo == elem.name) {
                elem.tasks.push(data)
                elem.taskCount.newTask = elem.taskCount.newTask + 1
            }
    })
    localStorage.setItem("employee", JSON.stringify(parsedData))
    
    console.log(userData)
   
    
  }




  return (
    <div className='w-full h-[450px] p-10 text-white'>
            <form onSubmit={sumbitHandler} action="" className='flex flex-wrap bg-[#1b1f1ff2] rounded-sm items-start justify-between'>
               <div>

               <div className='p-3 mt-3 '>
               <h3  >Task Title</h3>
               <input value={Task} onChange={(e)=>setTask(e.target.value)} type="text" placeholder="Enter task" className='border-white border-1 p-1 w-[300px]' />

               </div>

               <div className='p-3 mt-3 '>

                <h3>Date</h3>
                <input value={date} onChange={(e)=>setdate(e.target.value)} type="date"   className='border-white border-1 p-1 w-[300px]'/>
                </div>

                <div className='p-3 mt-3 '>
                <h3>Assign To</h3>
                <input  value={AssignTo} onChange={(e)=>setAssignTo(e.target.value)} type="text" placeholder='Enter the name'  className='border-white border-1 p-1 w-[300px]' />
                </div>

                <div className='p-3 mt-3 '>
                <h3>Category</h3>
                <input value={Category} onChange={(e)=>setCategory(e.target.value)}  type="text" placeholder='enter catogery'   className='border-white border-1 p-1 w-[300px]' />
                </div>


               </div>
                <div className='flex flex-col items-start p-3 mr-4 mb-3'>

                 <h3 className='text-xl font-semibold p-2 mt-2'>Description</h3>
                 <textarea value={Des} onChange={(e)=>setDes(e.target.value)}  name="" id="" cols={30} rows={10} placeholder='Describe task'  className='border-white border-1 p-1 w-[600px]'></textarea>
                 <button className='text-xl p-3 w-[600px] text-white bg-emerald-600 rounded-xl border-0 mt-4 '>Create Task</button>
                </div>
                

               

                
            </form>
            
        </div>
  )
}

export default CreateTask
