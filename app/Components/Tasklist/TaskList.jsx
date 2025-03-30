import React from 'react'

function TaskList() {
  return (
    <div  id='TaskList' className='h-[55%] w-full flex items-centre justify-start gap-5 py-3 mt-10 overflow-auto'>
        <div className='h-full w-[300px] bg-red-400 flex-shrink-0 rounded-xl '> {/* flex-shrink-0 makes it swipeable */}
          <div className='flex justify-between mt-2 px-2 text-white '>
            <h3 className='bg-red-500 p-2 rounded-sm'>High</h3>
            <h3 className='px-1'>Date</h3>
            
          </div>
          <h1 className='text-2xl font-bold text-white mt-4 px-3'>Exercise</h1>
          <p className='text-sm text-white mt-4 px-3 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa assumenda alias non corporis ad expedita officiis inventore error voluptate animi ratione corrupti aliquam eveniet consectetur recusandae porro, tempora libero optio.</p>

        </div>
        <div className='h-full w-[300px] bg-green-400 flex-shrink-0 rounded-xl '> {/* flex-shrink-0 makes it swipeable */}

        </div>
        <div className='h-full w-[300px] bg-blue-400 flex-shrink-0 rounded-xl '> {/* flex-shrink-0 makes it swipeable */}

        </div>
        <div className='h-full w-[300px] bg-fuchsia-400 flex-shrink-0 rounded-xl '> {/* flex-shrink-0 makes it swipeable */}

        </div>
        <div className='h-full w-[300px] bg-emerald-400 flex-shrink-0 rounded-xl '> {/* flex-shrink-0 makes it swipeable */}

        </div>
        <div className='h-full w-[300px] bg-red-400 flex-shrink-0 rounded-xl '> {/* flex-shrink-0 makes it swipeable */}

        </div>
        <div className='h-full w-[300px] bg-yellow-400 flex-shrink-0 rounded-xl '> {/* flex-shrink-0 makes it swipeable */}

        </div>
        <div className='h-full w-[300px] bg-yellow-400 flex-shrink-0 rounded-xl '> {/* flex-shrink-0 makes it swipeable */}

        </div>

    </div>
  )
}

export default TaskList
