import React, { useState } from 'react';
import video from '../../assets/hotes.mp4'
import { IoBedOutline } from "react-icons/io5";
import { FaCalendarAlt, FaRegUser } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Banner = () => {
  const [show, setShow] = useState(false)
  const [button, setButton] = useState(false)
  const [count,setCount] = useState(1)
  const [count2,setCount2] = useState(0)
  const [count3,setCount3] = useState(1)
  const [buttonlast, setButtonlast] = useState(false)
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const handleShow = () => {
    setShow(!show)
  }
  const handleButton = () =>{
    setButton(!button)
  }
  const handleButtonLast = () =>{
    setButtonlast(!buttonlast)
  }
  const increment = () => {
    setCount(count + 1);
  };
  const increment2 = () => {
    setCount2(count2 + 1);
  };
  const increment3 = () => {
    setCount3(count3 + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    if(count > 1){
      setCount(count - 1);
    }
  };
  const decrement2 = () => {
    if(count2 > 0){
      setCount3(count2 - 1);
    }
  };
  const decrement3 = () => {
    if(count3 > 1){
      setCount3(count3 - 1);
    }
  };
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
              <div className="w-[29%] relative">
                <input onClick={handleShow} className='w-full border py-3 px-9 rounded-lg outline-none border-transparent ' type="text" placeholder={`${count} adults · ${count2} children · ${count3} room`} />
                <i onClick={handleShow}><FaRegUser className='inline-block absolute top-4 text-2xl left-2' /></i>
                <div className={`absolute top-14 left-0 w-[350px] bg-white py-6 px-6 ${show ? "block" : "hidden"}`}>
                  <div className="border-b-2 pb-6 border-[#333]">
                    <div className="flex items-center justify-between">
                      <div className="">
                        <p className='font-poppins font-normal text-base text-black'>Adults</p>
                      </div>
                      <div className="border">
                        <button onClick={decrement} className='text-2xl px-3 py-2'>-</button>
                        <span className='mx-4'>{count}</span>
                        <button  onClick={increment} className='text-2xl px-3 py-2'>+</button>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="">
                        <p className='font-poppins font-normal text-base text-black'>Children</p>
                      </div>
                      <div className="border">
                        <button onClick={decrement2} className='text-2xl px-3 py-2'>-</button>
                        <span className='mx-4'>{count2}</span>
                        <button onClick={increment2} className='text-2xl px-3 py-2'>+</button>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="">
                        <p className='font-poppins font-normal text-base text-black'>Rooms</p>
                      </div>
                      <div className="border border-[#e7e7e7]">
                        <button onClick={decrement3} className='text-2xl px-3 py-2'>-</button>
                        <span className='mx-4'>{count3}</span>
                        <button onClick={increment3} className='text-2xl px-3 py-2'>+</button>
                      </div>
                    </div>
                  </div>
                  <div onClick={handleButton} className="flex justify-between items-center mt-4">
                        <div className="">
                          <p className='font-poppins font-normal text-base text-[#333]'>Looking for a holiday home or apartment?</p>
                        </div>
                        <div className="relative">
                            <div className={`w-10 rounded-full h-5 ${button ? "bg-[#0057B8]" : "bg-[#868686]"}`}></div>
                            <div className={`w-5 rounded-full h-5 bg-white absolute top-[0px] ${button ? "right-[1px]" : "left-[1px]"} duration-500`}></div>
                         </div>
                  </div>
                  <div onClick={handleButtonLast} className="flex justify-between items-center mt-4">
                        <div className="">
                          <p className='font-poppins font-normal text-base text-[#333]'>Travelling with pets?</p>
                        </div>
                        <div className="relative">
                            <div className={`w-10 rounded-full h-5 ${buttonlast ? "bg-[#0057B8]" : "bg-[#868686]"}`}></div>
                            <div className={`w-5 rounded-full h-5 bg-white absolute top-[0px] ${buttonlast ? "right-[1px]" : "left-[1px]"} duration-500`}></div>
                         </div>
                  </div>
                  <div className="mt-6">
                  <button className='w-full text-center border-[#0057B8] border-2 rounded-lg py-2 text-base font-poppins font-medium text-[#0057B8]'>Done</button>
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
