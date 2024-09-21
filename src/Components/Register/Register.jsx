import React, { useState } from 'react'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import loginImg from '../../assets/trending5.jpg'
const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => {
    setIsLogin(true)
  }
  const handleLogup = () => {
    setIsLogin(false)
  }
  return (
    <div className="bg-[rgb(51,51,51,0.6)] w-full h-screen relative">
      <section className='w-[1000px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 mx-auto bg-white py-8 px-6'>
      <div className="flex py-4 px-4 gap-x-6">
        <div className="w-[45%]">
          <div onClick={handleLogin} className={`bg-[#029E9D] hover:bg-[#029E9D] ${isLogin ? "bg-[#029E9D]" : "bg-transparent border-2"} py-3 rounded-xl text-center`}>
            <button className={`${isLogin ? "text-white" : "text-[#333]"} text-xl font-poppins font-medium`}>Login</button>
          </div>
          <div className="mt-8 h-full">
            <img className='rounded-xl h-[88%]' src={loginImg} alt="" />
          </div>
        </div>
        <div className="w-[55%]">
          <div onClick={handleLogup} className={`hover:bg-[#029E9D] ${isLogin ? "bg-transparent border-2" : "bg-[#029E9D]"} py-3 rounded-xl text-center`}>
            <button className={`${isLogin ? "text-[#333]" : "text-white"} text-xl font-poppins font-medium`} href="">Register</button>
          </div>
          <div className="mt-2 border-b-2 border-dotted text-center">
            <h3 className='text-[#333] font-poppins font-semibold text-2xl py-4'>{isLogin ? "Login" : "Register"}</h3>
          </div>
          <div className="mt-6">
            <div className="flex gap-x-6 justify-between">
              <div className="w-2/4 bg-[#506DAB] rounded-lg py-3 px-4">
                <i><FaFacebook className='text-white inline-block' /></i>
                <span className='font-poppins font-normal text-base text-white'> Login with Facebook</span>
              </div>
              <div className="w-2/4 bg-red-500 rounded-lg py-3 px-4">
                <i><FaGoogle className='text-white inline-block' /></i>
                <span className='font-poppins font-normal text-base text-white'> Login with Google</span>
              </div>
            </div>
          </div>
          <div className="mt-6 relative">
            <hr className='' />
            <span className='text-[#029e9d] bg-white mx-auto absolute -top-3 left-[44%] px-4'>Or</span>
          </div>
          <div className="mt-6">
            <input className={`w-full border border-[#f1f1f] rounded-lg py-3 px-4 text-base font-poppins text-[#333] ${isLogin ? "hidden" : "block"} outline-none`} type="text" placeholder='User Name' />
            <input className={`${isLogin ? "mt-0" : "mt-4"} w-full border border-[#f1f1f] rounded-lg py-3 px-4 text-base font-poppins text-[#333] outline-none`} type="email" placeholder='User Name or Email Address' />
            <input className='w-full border border-[#f1f1f] rounded-lg py-3 px-4 text-base font-poppins text-[#333] outline-none mt-4' type="password" placeholder='Password'/>
            <input className={`mt-4 w-full border border-[#f1f1f] rounded-lg py-3 px-4 text-base font-poppins text-[#333] ${isLogin ? "hidden" : "block"} outline-none`} type="password" placeholder='Re-enter Password' />

            <div className="">
              {
                isLogin ? 
                <div className="mt-4 flex justify-between">
                  <div className="">
                    <input className='py-2 px-2' type="checkbox" />
                    <label className='ml-2 font-poppins font-light text-base text-[#333]' htmlFor="">Remember me</label>
                  </div>
                  <div className="">
                    <p className='font-poppins font-light text-[#333] text-base'>Lost your password?</p>
                  </div>
                </div>
                : 
                <div className="mt-4">
                  <input className='py-4 px-4' type="checkbox" />
                  <label className='ml-2 font-poppins font-light text-[#333] text-base' htmlFor="">
                  I have read and accept the Terms and Privacy </label>
                </div>
              }
            </div>

            <div className={`mt-8 bg-[#029E9D] py-3 rounded-xl text-center`}>
            <button className={`text-white text-xl font-poppins font-medium`}>{isLogin ? "Login" : "Register"}</button>
          </div>
          <div className="text-center mt-6">
            {
              isLogin ?
              <p className='font-poppins font-light text-[#333] text-base'>Don't have an account? <span className='text-[#029E9D]'>Register</span></p>
              : <p className='font-poppins font-light text-[#333] text-base'>Already have an account? <span className='text-[#029E9D]'>Login</span></p>
            }
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Register