"use client"
import { getLocalStorage } from '@/app/utlis/LocalStorage';
import React, { createContext ,useState} from 'react'
export const MyContext = createContext();

function Context({children}) {
  const {e}=getLocalStorage();
  console.log(typeof(e))

  const [state, setstate] = useState(e);
  

  return (
    <div>
        <MyContext.Provider value={[state,setstate]}>
            {children}

        </MyContext.Provider>
      
    </div>
  )
}

export default Context
