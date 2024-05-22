import React, { useContext } from 'react';
import { mainContext } from '../context/ContextApi';

const Admin = () => {
    const [registerValue,setRegisterValue,Users,setUsers,cart,setCart,logValue,setLogValue,search,setSearch,findData,setFindData]=useContext(mainContext)
  return (
    <div>
      <h1>faras</h1>
      <p>I Love My Self</p>
    </div>
  )
}

export default Admin;
