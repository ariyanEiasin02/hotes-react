import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png"
import Register from '../Register/Register';
import { RiCloseLargeLine } from "react-icons/ri";
const Navbar = () => {
    const [search, setSearch] = useState(false)
    const [login,setLogin] = useState(false)

    const handleLogin = ()=>{
        setLogin(!login)
    }
    const handleSearch = () => {
        setSearch(!search)
    }
    return (
        <nav className='bg-[#fff] py-4'>
            <div className="max-w-container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-[20%]">
                        <a href="#">
                            <img className='w-full h-78' src={logo} alt="" />
                        </a>
                    </div>
                    <div className="w-[50%] flex justify-center">
                        <ul className='flex gap-x-5'>
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
                    <div className="w-[30%] flex justify-end">
                        <div className="relative rounded-full cursor-pointer">
                            <input className={`border-2 py-1 rounded-lg px-4 text-[#333] text-base font-normal font-poppins w-[220px] outline-none bg-transparent duration-300`} type="text" placeholder='Search...' />
                            <i onClick={handleSearch}><IoSearch className='inline-block absolute top-2 right-2 text-[#333]' /></i>
                        </div>
                        <div className="ml-3 cursor-pointer">
                            <i onClick={handleLogin}><FaUser className='inline-block' /></i>
                            <span onClick={handleLogin} className='ml-[2px] font-poppins font-medium text-[#333] text-base'>Register
                            </span>
                            <div className={`fixed top-0 left-0 z-40 w-full ${login ? "block" : "hidden"}`}>
                                <Register />
                            </div>
                            <p onClick={handleLogin} className={`fixed top-[15%] right-[13%] z-40 ${login ? "block" : "hidden"} bg-red-500 py-4 px-4 rounded-md text-white`}><RiCloseLargeLine/></p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar