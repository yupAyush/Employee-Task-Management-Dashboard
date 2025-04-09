import React from 'react'

function Tasklistnumbers({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 '>
        <div className='bg-red-400 h-40 w-[45%] py-6 px-9 rounded-xl'>
            <h2 className='text-3xl text-white font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl text-white font-medium'>New Task</h3>
        </div>
        <div className='bg-blue-400 h-40 w-[45%] py-6 px-9 rounded-xl'>
            <h2 className='text-3xl text-white font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl text-white font-medium'>Active</h3>
        </div>
        <div className='bg-green-400 h-40 w-[45%] py-6 px-9 rounded-xl'>
            <h2 className='text-3xl text-white font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl text-white font-medium'>Completed</h3>
        </div>
        <div className='bg-yellow-400 h-40 w-[45%] py-6 px-9 rounded-xl'>
            <h2 className='text-3xl text-white font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl text-white font-medium'>Failed</h3>
        </div>
       
      
    </div>
  )
}

export default Tasklistnumbers
