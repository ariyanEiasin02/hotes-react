import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
const Navbar = () => {
    const [navbarShow, setNavbarShow] = useState(false)
    const [login, setLogin] = useState(false)

    const handleLoginButton = () => {
        setLogin(!login)
    }
    const handleNavbarShow = () => {
        setNavbarShow(!navbarShow)
    }
    return (
        <nav className='bg-[#fff] py-2 md:px-0 px-4'>
            <div className="max-w-container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="">
                        <a href="#">
                            <img className='w-14 h-10' src={logo} alt="" />
                        </a>
                    </div>
                    <div onClick={handleNavbarShow} className="md:hidden block">
                        {
                            navbarShow ? <IoCloseOutline className='text-[#333] text-2xl font-playfair font-bold' /> : <CiMenuFries className='text-[#333] text-2xl font-playfair font-bold' />
                        }
                    </div>
                    <div className={`md:flex md:static absolute items-center justify-between gap-x-16 z-50 ${navbarShow ? "top-[60px] bg-rgbaColor w-full left-0 px-3 duration-300 py-3" : "top-[60px] -left-96 duration-300"}`}>
                        <div className="md:flex justify-center">
                            <ul className='md:flex gap-x-6'>
                                <li className='mt-1 md:mt-0'>
                                    <a className='font-playfair font-semibold text-base text-[#fff] md:text-[#333] hover:text-[#20A9A9] duration-300 relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#20A9A9] after:absolute after:-bottom-[18px] after:left-0 after:hover:w-full after:duration-300' href="#">Home</a>
                                </li>
                                <li className='mt-1 md:mt-0'>
                                    <a className='font-playfair font-semibold text-base text-[#fff] md:text-[#333] hover:text-[#20A9A9] duration-300 relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#20A9A9] after:absolute after:-bottom-[18px] after:left-0 after:hover:w-full after:duration-300' href="#">Hotes</a>
                                </li>
                                <li className='mt-1 md:mt-0'>
                                    <a className='font-playfair font-semibold text-base text-[#fff] md:text-[#333] hover:text-[#20A9A9] duration-300 relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#20A9A9] after:absolute after:-bottom-[18px] after:left-0 after:hover:w-full after:duration-300' href="#">Special offer</a>
                                </li>
                                <li className='mt-1 md:mt-0'>
                                    <a className='font-playfair font-semibold text-base text-[#fff] md:text-[#333] hover:text-[#20A9A9] duration-300 relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#20A9A9] after:absolute after:-bottom-[18px] after:left-0 after:hover:w-full after:duration-300' href="#">Blog</a>
                                </li>
                                <li className='mt-1 md:mt-0'>
                                    <a className='font-playfair font-semibold text-base text-[#fff] md:text-[#333] hover:text-[#20A9A9] duration-300 relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#20A9A9] after:absolute after:-bottom-[18px] after:left-0 after:hover:w-full after:duration-300' href="#">Services</a>
                                </li>
                                <li className='mt-1 md:mt-0'>
                                    <a className='font-playfair font-semibold text-base text-[#fff] md:text-[#333] hover:text-[#20A9A9] duration-300 relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#20A9A9] after:absolute after:-bottom-[18px] after:left-0 after:hover:w-full after:duration-300' href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:flex gap-x-4  items-center">
                            <div className="mt-1 md:mt-0 relative rounded-full cursor-pointer">
                                <div class="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                    <input
                                        type="text"
                                        className="w-full py-1 px-3 text-gray-700 
                                        font-playfair
                                        font-normal
                                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Search..." />
                                    <span class="px-3 text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.415l4.297 4.297a1 1 0 11-1.415 1.415l-4.296-4.297zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>

                            </div>
                            <div className="">
                                <button onClick={handleLoginButton} className='ml-[3px] font-playfair font-medium text-[#fff] text-base bg-teal-500 py-1 px-4 rounded-md'>Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default Navbar