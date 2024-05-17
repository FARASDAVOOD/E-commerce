import React, { useContext, useState } from 'react'
import Loginbg from "../../../assets/baby_login.jpg"
import "./Login.css"
import Googlelogo from "../../../assets/google_logo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { mainContext } from '../../context/ContextApi'


const Login = () => {
 const navigate = useNavigate()
 
  const [registerValue, setRegisterValue, Users, setUsers] = useContext(mainContext);

  const [logValue, setLogValue] = useState({
    email: '',
    password: ''
  })



  const colors = {
    primary: "#060606",
    background: "#E0E0E0",
    disbaled: 'D9D9D9'


  }
  const handleClick = () => {
    const user = Users.find((user) => user.email === logValue.email); // Find the user with the matching email
    
    if (user) { // If user is found
      if (user.password === logValue.password) { // Check if the passwords match
        navigate('/');
        alert("Login successfully");
      } else {
        alert("Invalid password");
      }
    } else {
      alert("Invalid Email");
    }
  }
  
  return (

    <> <div className='w-full h-screen flex items-start Container container-fluid '>

      <div className='relative w-1/2 h-full flex flex-col box'>
        <img src={Loginbg} alt="" className='h-full w-full object-cover' />
      </div>
      <div className='w-1/2 h-full  bg-[#f5f5f5] flex flex-col  justify-between p-20 items-center  box '>
        <h1 className='text-xl text-[#060606] font-semibold item-center p-2'>Interactive Brand</h1>

        <div className='w-full flex flex-col max-w-[500px]  '>
          <div className='w-full flex flex-col mb-2'>
            <h3 className=' ml-12 text-3xl font-semobold '>Login</h3>
            <p className=' ml-12 text-base '>Welcome Back! please ennter your details.</p>
          </div>
          <div className='w-full flex flex-col px-5 mb-2'>
            <input
              type='email'
              placeholder='Email'
              value={logValue.email}
              onChange={(e) => setLogValue({ ...logValue, email: e.target.value })}
              className=' pl-2 w-full text-balck bg-transparent border-b border-black outine-none focus:outline-none py-2  ' />

            <input
              type='Password'
              placeholder='Password'
              value={logValue.password}
              onChange={(e) => setLogValue({ ...logValue,password: e.target.value })}
              className=' pl-2 w-full text-balck bg-transparent border-b border-black outine-none focus:outline-none py-2  ' />

          </div>
          <div className='w-full flex items-center '>
            <div className='w-full flex'>
              <input type='checkbox' className='w-4 h-4 mr-2 ml-12' />
              <p className='text-sm '>Remember</p>
            </div>
            <p className=' text-sm font-medium whitespace-newrap cursor-pointer underline underline-offset-2 mr-7 '>Forgot<span className='ml-1 mr-1'>Password</span>?</p>
          </div>
          <div className=' flex flex-col ml-12 mr-12 my-4'>
            <button className=' w-full my-2 h-[12px] text-white bg-[#060606] rounded-md p-4 text-center flex items-center font-semibold justify-center cursor-pointer  ' onClick={handleClick}>Log in</button>
            <NavLink
            to="/register" className='navLink' style={isActive => ({ color: isActive ? "black" : '' })}><button className=' w-full my-2 h-[12px] text-[#060606] bg-white border-black border-2 rounded-md p-4 my-2 font-semibold text-center flex items-center justify-center cursor-pointer '>Register</button>
          
          </NavLink>
            </div>
          <div className=' w-full flex items-center justify-center relative py-2'>
            <div className='w-full h-[1px] bg-black ml-12 mr-12 '> </div>
            <p className='text-lr absolute my-1 text-balck/80 bg-[#f5f5f5]'>or</p>

          </div>
          <div className='mr-12 ml-12 py-4'>
            <button className=' w-full  h-[12px] text-[#060606] bg-white  border-2 rounded-md p-4 my-2 font-semibold text-center flex items-center justify-center border-black/40 cursor-pointer'><img style={{ width: "25px", marginRight: '10px' }} src={Googlelogo} alt="logo" /> Sign up with Google</button>

          </div>

        </div>

        <div className='w-full flex- items-center justify-center '>
          <p className='text-sm font-normal text-[#060606] text-center'>Don't have a accont? <span className='left_navlinks font-semibold underline underline-offset-2 cursor-pointer '>
            <NavLink
            to="/register" className='navLink' style={isActive => ({ color: isActive ? "black" : '' })}>Sign up for free
          </NavLink></span> </p>
        </div>


      </div>

    </div>
    </>
  )
}

export default Login;
