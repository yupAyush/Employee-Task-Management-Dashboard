import React from 'react'

function AcceptTask({data}) {
  console.log(data)
  return (
    <div className='h-full w-[300px] bg-fuchsia-400 flex-shrink-0 rounded-xl '> {/* flex-shrink-0 makes it swipeable */}
     <div className='flex justify-between mt-2 px-2 text-white '>
      <h3 className='bg-red-500 p-2 rounded-sm'>{data.category}</h3>
      <h3 className='px-1'>{data.date}</h3>
      
     </div>
     <h1 className='text-2xl font-bold text-white mt-4 px-3'>{data.title}</h1>
     <p className='text-sm text-white mt-4 px-3 font-semibold'>{data.description}</p>
      <div className='flex justify-between mt-5 px-3'> 
        <button className='bg-green-500 text-white font-semibold py-1 px-2 rounded-sm mt-3 mx-3'>Mark as completed</button>
        <button className='bg-red-500 text-white font-semibold py-1 px-2 rounded-sm mt-3 mx-3'>Mark as failed</button>
      </div>
  </div>
  )
}

export default AcceptTask
