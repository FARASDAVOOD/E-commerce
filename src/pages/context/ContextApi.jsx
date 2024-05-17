import React, { createContext, useContext, useState } from 'react'

export const mainContext=createContext();

export const ContextApi = ({children}) => {
  const [registerValue,setRegisterValue]=useState({
    name:'',
    email:'',
    password:''
  });
  const [Users,setUsers]=useState([]);
  const[cart,setCart]=useState([]);



  return (
    <div>
        <mainContext.Provider value={[registerValue,setRegisterValue,Users,setUsers,cart,setCart]}>

            {children}

        </mainContext.Provider>
      
    </div>
  )
}

export default ContextApi;
