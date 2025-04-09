import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './completeTAsk'
import FailedTask from './FailedTask'

function TaskList({data}){
  const { tasks } = data
  console.log(data.tasks)
 
  return (
    <div  id='TaskList' className='h-[55%] w-full flex items-centre justify-start gap-5 py-3 mt-10 overflow-auto'>
      {data.tasks.map((e,i)=>{
        if(e.active){
          return <AcceptTask data={e} key={i} />
         }
        if(e.completed ){
          return <CompleteTask data={e} key={i}/>
        }
        if(e.failed  ){
          return <FailedTask data={e} key={i}/>
        }
        if(e.newTask ){
          return <NewTask data={e} key={i}/>
        }
        
      }
       
      )}
       
        

    </div>
  )
}

export default TaskList
