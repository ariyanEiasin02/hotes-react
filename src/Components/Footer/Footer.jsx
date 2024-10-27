import React from 'react'
import footerLogo from '../../assets/logo.png'
import { FaFacebookF,FaInstagram,FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <section className='py-8 bg-[#0B3E3F]'>
            <div className="max-w-container mx-auto">
                <div className="md:flex pb-10 gap-x-6 justify-between px-4 md:px-0">
                    <div className="">
                        <h3 className='font-poppins font-bold text-xl txt-[#333]'>
                            <img className='w-24 h-16' src={footerLogo} alt="" />
                        </h3>
                        <ul className='mt-6'>
                            <li className='mt-1'>
                                <a className='font-poppins font-bold text-base text-[#fff] hover:underline' href="#">Contact Number:</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">+88 01742264413</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">+88 01704037578</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-bold text-base text-[#fff] hover:underline' href="#">Email Address:</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff]' href="#">cityhotelsint@gmail.com</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-bold text-base text-[#fff] hover:underline' href="#">Location:</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">32/27/A-1 East Dhanmondi, Dhaka-1207</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5 md:mt-0">
                        <h3 className='font-poppins font-bold text-xl text-[#fff]'>About</h3>
                        <ul className='mt-3 md:mt-6'>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">Home</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">Our Story</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">Sleep</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">Experience Bruges</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">Inspiration</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5 md:mt-0">
                        <h3 className='font-poppins font-bold text-xl text-[#fff]'>Quick Link</h3>
                        <ul className='mt-3 md:mt-6'>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">Book a Room</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">Check In</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">Check Out</a>
                            </li>
                            <li className='mt-1'>
                                <a className='font-poppins font-light text-sm text-[#fff] hover:underline' href="#">FAQ’s</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5 md:mt-0">
                        <h3 className='font-poppins font-bold text-xl text-[#fff]'>Newsletter</h3>
                        <div className="mt-3 md:mt-6">
                            <p className='font-poppins font-light text-sm text-[#fff] w-[80%]'>Stay Informed through our newsletter & get offer any time!</p>
                            <div className="flex mt-2">
                                <div className="">
                                <input className='font-poppins font-light text-sm text-[#fff] py-2 px-4 outline-none border-2 border-[#209D9c]' type="email" placeholder='Your Email Addrese' />
                                </div>
                                <div className="">
                                    <p className='font-poppins font-medium text-sm text-[#fff] py-2 px-4 outline-none border-2 border-[#209D9c] bg-[#029D9C]'>Subscribe</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <ul className='flex gap-x-4'>
                                    <li className='p-3 rounded-full bg-white hover:bg-[#209D9c] hover:text-white duration-300'><a href="#"><FaFacebookF/></a></li>
                                    <li className='p-3 rounded-full bg-white hover:bg-[#209D9c] hover:text-white duration-300'><a href="#"><FaInstagram /></a></li>
                                    <li className='p-3 rounded-full bg-white hover:bg-[#209D9c] hover:text-white duration-300'><a href="#"><FaXTwitter/></a></li>
                                    <li className='p-3 rounded-full bg-white hover:bg-[#209D9c] hover:text-white duration-300'><a href="#"><FaYoutube /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-center mt-5">
                    <p className='font-poppins font-normal text-[#fff] text-base'>Hotes.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
                    <p className='font-poppins font-normal text-[#fff] text-base mt-1'>Copyright © 2024 Hotes.com™. All rights reserved.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer