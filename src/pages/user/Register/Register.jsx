import React, { useCallback, useContext, useEffect, useInsertionEffect, useLayoutEffect, useMemo, useState } from 'react';
import Registerbg from "../../../assets/baby-register.jpeg"
import "./Register.css"
// import { mainContext } from '../../context/ContextApi';
import { NavLink, useNavigate } from 'react-router-dom';
import { memo } from 'react';
import axios from 'axios';




const Register = () => {





  const navigate=useNavigate();

  // const [registerValue,setRegisterValue,Users,setUsers,cart,setCart,logValue,setLogValue,search,setSearch,findData,setFindData] = useContext(mainContext);

  const [registerValue,setRegisterValue]=useState({
    name:'',
    email:'',
    password:''
  });


  function handleClick(e) {

    



    e.preventDefault();


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (registerValue.email.match(mailformat)) {
      if (registerValue.password.length >= 7) {
        axios.post("http://localhost:3000/user",registerValue);
        alert("success")
        // Users.push(registerValue);
        setRegisterValue({
          name: '',
          email: '',
          password: ''
        });
        navigate('/login')
      } else {
        alert("Password must be more that eight character")
      }
    } else {
      alert('Please enter the valid email')
    }

  }
 


  return (
    <> <div className='w-full h-screen flex items-start Container container-fluid '>

      <div className='relative w-1/2 h-full flex flex-col box'>
        <img src={Registerbg} alt="" className='h-full w-full object-cover' />
      </div>
      <div className='w-1/2 h-full  bg-[#f5f5f5] flex flex-col  justify-around p-20 items-center  box '>
        <h1 className=' text-[#060606] font-semibold item-center p-2 mt-6'>Welcome to our family!</h1>

        <div className='w-full flex flex-col max-w-[500px]  '>
          <div className='w-full flex flex-col '>
            <h3 className=' ml-12 text-3xl font-semobold '>Registration</h3>
            <p className=' ml-12 text-base '> please enter your details!</p>
          </div>
          <div className='w-full flex flex-col px-5 '>
            <input
              type='text'
              value={registerValue.name}
              onChange={(e) => setRegisterValue({ ...registerValue, name: e.target.value })}
              placeholder='Full Name'
              className=' pl-2 w-full text-balck bg-transparent border-b border-black outine-none focus:outline-none py-3  ' />

            <input
              type='email'
              placeholder='Email'
              value={registerValue.email}
              onChange={(e) => setRegisterValue({ ...registerValue, email: e.target.value })}
              className=' pl-2 w-full text-balck bg-transparent border-b border-black outine-none focus:outline-none py-3  ' />

            <input
              type='Password'
              placeholder='Password'
              value={registerValue.password}
              onChange={(e) => setRegisterValue({ ...registerValue, password: e.target.value })}
              className=' pl-2 w-full text-balck bg-transparent border-b border-black outine-none focus:outline-none py-3  ' />

          </div>

          <div className=' flex flex-col ml-12 mr-12 my-4'>

            <button className=' w-full my-2 h-[12px] text-[#060606] bg-black text-white border-black border-2 rounded-md p-4 my-2 font-semibold text-center flex items-center justify-center cursor-pointer ' onClick={handleClick}>Register</button>
          </div>
        </div>

        <div className='w-full flex- items-center justify-center '>
          <p className='text-sm font-normal text-[#060606] text-center'>You already have account? <span className='left_navlinks font-semibold underline underline-offset-2 cursor-pointer '><NavLink
            to="/login" className='navLink' style={isActive => ({ color: isActive ? "black" : '' })}>Login in
          </NavLink></span> </p>
        </div>


      </div>

    </div>
    </>

  )
}

export default memo(Register)  
