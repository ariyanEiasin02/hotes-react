import React, { useState } from 'react';
import video from '../../assets/hotes.mp4'
import { IoBedOutline } from "react-icons/io5";
import { FaCalendarAlt, FaRegUser } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Banner = () => {
  const [show, setShow] = useState(false)
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div className='relative'>
      <div className="relative w-full h-[600px]">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-poppins text-white uppercase font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg mb-6 font-poppins font-light text-white w-[63%] mx-auto">Save 10% or more at participating properties. Just look for the blue Genius label.</p>
            <button className="px-6 py-3 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-700 transition duration-300">
              Sign in or register
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-7 left-0 w-full z-30">
      <div className="max-w-container mx-auto">
        <div className="bg-[#FFB700] rounded-lg py-1">
          <div className="flex justify-between gap-x-2 items-center px-6">
            <div className="w-[29%] relative">
              <input className='w-full border py-3 px-9 rounded-lg outline-none border-transparent ' type="text" placeholder='Where are you going?' />
              <i><IoBedOutline className='inline-block absolute top-4 text-2xl left-2' /></i>
            </div>
            <div className="w-[29%] relative">
              
              <div className={`z-20 absolute -bottom-5 left-10 outline-none`}>
                <DatePicker
                showIcon
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  isClearable={true}
                />
              </div>
            </div>
            <div onClick={handleShow} className="w-[29%] relative">
              <input className='w-full border py-3 px-9 rounded-lg outline-none border-transparent ' type="text" placeholder='2 adults · 0 children · 1 room' />
              <i><FaRegUser className='inline-block absolute top-4 text-2xl left-2' /></i>
              <div className={`absolute top-14 left-0 w-[350px] bg-white py-6 px-6 ${show ? "block" : "hidden"}`}>
                <div className="border-b-2 pb-6 border-[#333]">
                  <div className="flex items-center justify-between">
                    <div className="">
                      <p className='font-poppins font-normal text-base text-black'>Adults</p>
                    </div>
                    <div className="border">
                      <button className='text-2xl px-3 py-2'>-</button>
                      <span className='mx-4'>2</span>
                      <button className='text-2xl px-3 py-2'>+</button>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="">
                      <p className='font-poppins font-normal text-base text-black'>Children</p>
                    </div>
                    <div className="border">
                      <button className='text-2xl px-3 py-2'>-</button>
                      <span className='mx-4'>2</span>
                      <button className='text-2xl px-3 py-2'>+</button>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="">
                      <p className='font-poppins font-normal text-base text-black'>Rooms</p>
                    </div>
                    <div className="border">
                      <button className='text-2xl px-3 py-2'>-</button>
                      <span className='mx-4'>2</span>
                      <button className='text-2xl px-3 py-2'>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[13%]">
              <a className='rounded-md bg-teal-500 py-3 px-8 font-poppins font-medium text-white text-base' href="#">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
