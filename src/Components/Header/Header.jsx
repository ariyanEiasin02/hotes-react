import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaFacebookF,FaInstagram,FaLinkedin,FaPhoneAlt  } from "react-icons/fa";
const Header = () => {
    return (
        <section className='bg-[#029E9D] py-3'>
            <div className="max-w-container mx-auto">
                <div className="md:flex justify-between items-center">
                    <div className="md:flex px-4 md:px-0">
                        <div className="md:pr-4 md:border-r-[1px]">
                        <FaPhoneAlt  className='inline-block text-white' />
                        <span className='ml-[2px] font-poppins font-medium text-white text-base'>+88 01742264413</span>
                        </div>
                        <div className="md:px-4">
                        <CgMail className='inline-block text-white text-xl' />
                        <span className='ml-[2px] font-poppins font-medium text-white text-base'>cityhotelsint@gmail.com</span>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex'>
                            <li className='px-4 py-1 border-r-[1px]'>
                                <a className='text-white text-base' href="#"><FaFacebookF/></a>
                            </li>
                            <li className='px-4 py-1 border-r-[1px]'>
                                <a className='text-white text-base' href="#"><FaXTwitter/></a>
                            </li>
                            <li className='px-4 py-1 border-r-[1px]'>
                                <a className='text-white text-base' href="#"><FaInstagram /></a>
                            </li>
                            <li className='py-1 pl-4'>
                                <a className='text-white text-base' href="#"><FaLinkedin /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header

