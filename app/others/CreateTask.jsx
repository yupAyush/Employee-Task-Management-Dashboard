import React from 'react'

function CreateTask() {
  return (
    <div className='w-full h-[450px] p-10 text-white'>
            <form action="" className='flex flex-wrap bg-[#1b1f1ff2] rounded-sm items-start justify-between'>
               <div>

               <div className='p-3 mt-3 '>
               <h3  >Task Title</h3>
               <input type="text" placeholder="Enter task" className='border-white border-1 p-1 w-[300px]' />

               </div>

               <div className='p-3 mt-3 '>

                <h3>Date</h3>
                <input type="date"   className='border-white border-1 p-1 w-[300px]'/>
                </div>

                <div className='p-3 mt-3 '>
                <h3>Assign To</h3>
                <input type="text" placeholder='Enter the name'  className='border-white border-1 p-1 w-[300px]' />
                </div>

                <div className='p-3 mt-3 '>
                <h3>Category</h3>
                <input type="text" placeholder='enter catogery'   className='border-white border-1 p-1 w-[300px]' />
                </div>


               </div>
                <div className='flex flex-col items-start p-3 mr-4 mb-3'>

                 <h3 className='text-xl font-semibold p-2 mt-2'>Description</h3>
                 <textarea name="" id="" cols={30} rows={10} placeholder='Describe task'  className='border-white border-1 p-1 w-[600px]'></textarea>
                 <button className='text-xl p-3 w-[600px] text-white bg-emerald-600 rounded-xl border-0 mt-4 '>Create Task</button>
                </div>
                

               

                
            </form>
            
        </div>
  )
}

export default CreateTask
