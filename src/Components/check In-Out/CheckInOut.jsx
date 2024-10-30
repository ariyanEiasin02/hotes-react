import React, { useState } from 'react'
import { IoBedOutline } from "react-icons/io5";
import { FaCalendarAlt, FaRegUser } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckInOut = () => {
    const [show, setShow] = useState(false)
    const [button, setButton] = useState(false)
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(1)
    const [buttonlast, setButtonlast] = useState(false)
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const handleShow = () => {
      setShow(!show)
    }
    const handleButton = () => {
      setButton(!button)
    }
    const handleButtonLast = () => {
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
      if (count > 1) {
        setCount(count - 1);
      }
    };
    const decrement2 = () => {
      if (count2 > 0) {
        setCount2(count2 - 1);
      }
    };
    const decrement3 = () => {
      if (count3 > 1) {
        setCount3(count3 - 1);
      }
    };
  return (
    <div>
        <div className="w-full z-30 px-4 md:px-0">
        <div className="max-w-container mx-auto">
          <div className="bg-[#FFB700] rounded-lg py-1 px-1">
            <div className="md:flex justify-between gap-x-2 items-center">
              <div className="md:w-[29%] relative mt-[2px] md:mt-0">
                <input className='w-full border py-3 px-9 rounded-lg outline-none border-transparent ' type="text" placeholder='Where are you going?' />
                <i><IoBedOutline className='inline-block absolute top-4 text-2xl left-2' /></i>
              </div>
              <div className="md:w-[29%] relative mt-1 md:mt-0">

                <div className={`w-full outline-none`}>
                  <DatePicker
                    className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    wrapperClassName="w-full"
                    placeholderText="Select a date"
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
              <div className="md:w-[29%] relative mt-1 md:mt-0">
                <input onClick={handleShow} className='w-full border py-3 px-9 rounded-lg outline-none border-transparent ' type="text" placeholder={`${count} adults · ${count2} children · ${count3} room`} />
                <i onClick={handleShow}><FaRegUser className='inline-block absolute top-4 text-2xl left-2' /></i>
                <div className={`absolute top-14 left-0 md:w-[350px] bg-white py-6 px-6 ${show ? "block" : "hidden"}`}>
                  <div className="border-b-2 pb-6 border-[#333]">
                    <div className="flex items-center justify-between">
                      <div className="">
                        <p className='font-poppins font-normal text-base text-black'>Adults</p>
                      </div>
                      <div className="border">
                        <button onClick={decrement} className='text-2xl px-3 py-2'>-</button>
                        <span className='mx-4'>{count}</span>
                        <button onClick={increment} className='text-2xl px-3 py-2'>+</button>
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
                    <button onClick={handleShow} className='w-full text-center border-[#0057B8] border-2 rounded-lg py-2 text-base font-poppins font-medium text-[#0057B8]'>Done</button>
                  </div>
                </div>
              </div>
              <div className="md:w-[13%] mt-1 md:mt-0">
                <button className='rounded-md bg-teal-500 w-full py-3 font-poppins font-medium text-white text-base'>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckInOut