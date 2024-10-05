import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png"
import Register from '../Register/Register';
import { RiCloseLargeLine } from 'react-icons/ri';
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
    const [navbarShow,setNavbarShow] = useState(false)
    const [login,setLogin] = useState(false)

    const handleLoginButton = ()=>{
        setLogin(!login)
    }
    const handleNavbarShow = ()=>{
        setNavbarShow(!navbarShow)
    }
    return (
        <nav className='bg-[#fff] py-4 md:px-0 px-4'>
            <div className="max-w-container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="">
                        <a href="#">
                            <img className='w-full h-78' src={logo} alt="" />
                        </a>
                    </div>
                    <div onClick={handleNavbarShow} className="md:hidden block">
                        {
                            navbarShow ? <IoCloseOutline/> : <CiMenuFries />
                        }
                    </div>
                    <div className={`md:flex md:static absolute items-center justify-between gap-x-16 z-50 ${navbarShow ? "top-[60px] bg-red-500 w-full left-0 px-3 duration-300 py-6" : "top-[60px] -left-60 duration-300"}`}>
                        <div className="md:flex justify-center">
                        <ul className='md:flex gap-x-5'>
                            <li>
                                <a className='font-poppins font-normal text-base text-[#333] uppercase hover:text-[#20A9A9] duration-300' href="#">Home</a>
                            </li>
                            <li>
                                <a className='font-poppins font-normal text-base text-[#333] uppercase hover:text-[#20A9A9] duration-300' href="#">Hotes</a>
                            </li>
                            <li>
                                <a className='font-poppins font-normal text-base text-[#333] uppercase hover:text-[#20A9A9] duration-300' href="#">Special offer</a>
                            </li>
                            <li>
                                <a className='font-poppins font-normal text-base text-[#333] uppercase hover:text-[#20A9A9] duration-300' href="#">Blog</a>
                            </li>
                            <li>
                                <a className='font-poppins font-normal text-base text-[#333] uppercase hover:text-[#20A9A9] duration-300' href="#">Services</a>
                            </li>
                            <li>
                                <a className='font-poppins font-normal text-base text-[#333] uppercase hover:text-[#20A9A9] duration-300' href="#">Contact</a>
                            </li>
                        </ul>
                        </div>
                        <div className="md:flex justify-end">
                        <div className="relative rounded-full cursor-pointer">
                            <input className={`border-2 py-1 rounded-lg px-4 text-[#333] text-base font-normal font-poppins w-full md:w-[220px] outline-none bg-transparent duration-300`} type="text" placeholder='Search...' />
                            <i><IoSearch className='inline-block absolute top-3 right-2 text-[#333]' /></i>
                        </div>
                        <div className="ml-3 cursor-pointer">
                            <i onClick={handleLoginButton}><FaUser className='inline-block' /></i>
                            <span onClick={handleLoginButton} className='ml-[3px] font-poppins font-medium text-[#333] text-base'>Register
                            </span>
                            <div className="relative">
                            <div className={`fixed top-0 left-0 z-40 w-full ${login ? "block" : "hidden"}`}>
                                <Register />
                            </div>
                            <div className="">
                            <p onClick={handleLoginButton} className={`fixed top-2 right-2 z-40 bg-red-500 py-4 px-4 rounded-md text-white ${login ? "block" : "hidden"}`}><RiCloseLargeLine/></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar