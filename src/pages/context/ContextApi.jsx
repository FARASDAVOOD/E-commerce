import React, { createContext, useContext, useState } from 'react'
import Search from '../../components/Search/Search';

export const mainContext=createContext();

export const ContextApi = ({children}) => {
  const [registerValue,setRegisterValue]=useState({
    name:'',
    email:'',
    password:'',
    cart:[]
  });
  const [logValue, setLogValue] = useState({
    email: '',
    password: ''
  })
  const [Users,setUsers]=useState([]);
  const[cart,setCart]=useState([]);
 const [search,setSearch]=useState('');
 const [findData,setFindData]=useState([]);



  return (
    <div>
        <mainContext.Provider value={[registerValue,setRegisterValue,Users,setUsers,cart,setCart,logValue,setLogValue,search,setSearch,findData,setFindData]}>

            {children}

        </mainContext.Provider>
      
    </div>
  )
}

export default ContextApi;
