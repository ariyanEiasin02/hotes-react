import React from 'react';
import Slider from 'react-slick';
import silder1 from '../../assets/silder1.jpg'
import silder2 from '../../assets/silder2.jpg'
import silder3 from '../../assets/silder3.jpg'
import silder4 from '../../assets/silder4.jpg'
import silder5 from '../../assets/silder5.jpg'
import silder6 from '../../assets/silder6.jpg'
import { IoIosArrowBack, IoIosArrowForward, IoIosStar, IoMdTime } from "react-icons/io";
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    prevArrow: <PreviousArrow />,  // Custom Previous Arrow
    nextArrow: <NextArrow />,
    slidesToShow: 4, // Number of items visible in the slider at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-[#F1F1F1] py-8 relative'>
      <div className="max-w-container mx-auto my-8">
        <div className="">
          <div className="">
            <span className='font-playfair font-medium text-xl text-[#FCC703] py-2'>Top Pick</span>
            <h2 className='py-2 font-playfair font-bold text-5xl text-[#333]'>Best <span className='text-[#199E9D]'>Tour Packages</span></h2>
            <p className='font-playfair font-light text-[#333] text-base py-2 w-[63%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
          </div>
        </div>
        <div className="mt-6">
          <Slider {...settings} className='bg-[#F1F1F1]'>
            <div className="w-[24%] p-2">
              <div className="group bg-white relative shadow-lg rounded-lg after:content-[''] after:w-0 after:h-[3px] after:bg-[#199E9D] after:absolute after:bottom-0 after:left-0 after:duration-300 after:hover:w-full">
                <div className="relative overflow-hidden">
                  <img
                    src={silder1}
                    alt="Piazza Castello"
                    className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                  />
                  <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 group-hover:h-full duration-700"></div>
                  <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-[#029E9D] py-3 px-4">
                      <ul className='flex gap-x-2'>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="text-lg font-semibold">Boss Suites Nana Hotel</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
                    </div>
                  </div>
                  <div className="border-t-[2px] border-dotted mt-2">
                    <h2 className='mt-1 font-playfair font-bold text-2xl text-[#029E9D]'>$260.00<span className='text-base text-[#333] font-normal'> | Per person</span></h2>
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <div className="flex items-center">
                      <i className='text-base text-[#333]'><IoMdTime /></i>
                      <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                    </div>
                    <div className="">
                      <Link to="/booknow">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[24%] p-2">
              <div className="group bg-white relative shadow-lg rounded-lg after:content-[''] after:w-0 after:h-[3px] after:bg-[#199E9D] after:absolute after:bottom-0 after:left-0 after:duration-300 after:hover:w-full">
                <div className="relative overflow-hidden">
                  <img
                    src={silder2}
                    alt="Piazza Castello"
                    className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                  />
                  <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 group-hover:h-full duration-700"></div>
                  <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-[#029E9D] py-3 px-4">
                      <ul className='flex gap-x-2'>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="text-lg font-semibold">FabExpress Scholer</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
                    </div>
                  </div>
                  <div className="border-t-[2px] border-dotted mt-2">
                    <h2 className='mt-1 font-playfair font-bold text-2xl text-[#029E9D]'>$260.00<span className='text-base text-[#333] font-normal'> | Per person</span></h2>
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <div className="flex items-center">
                      <i className='text-base text-[#333]'><IoMdTime /></i>
                      <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                    </div>
                    <div className="">
                      <Link to="/booknow">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[24%] p-2">
              <div className="group bg-white relative shadow-lg rounded-lg after:content-[''] after:w-0 after:h-[3px] after:bg-[#199E9D] after:absolute after:bottom-0 after:left-0 after:duration-300 after:hover:w-full">
                <div className="relative overflow-hidden">
                  <img
                    src={silder3}
                    alt="Piazza Castello"
                    className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                  />
                  <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 group-hover:h-full duration-700"></div>
                  <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-[#029E9D] py-3 px-4">
                      <ul className='flex gap-x-2'>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="text-lg font-semibold">FabExpress Scholer</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
                    </div>
                  </div>
                  <div className="border-t-[2px] border-dotted mt-2">
                    <h2 className='mt-1 font-playfair font-bold text-2xl text-[#029E9D]'>$260.00<span className='text-base text-[#333] font-normal'> | Per person</span></h2>
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <div className="flex items-center">
                      <i className='text-base text-[#333]'><IoMdTime /></i>
                      <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                    </div>
                    <div className="">
                      <Link to="/booknow">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[24%] p-2">
              <div className="group bg-white relative shadow-lg rounded-lg after:content-[''] after:w-0 after:h-[3px] after:bg-[#199E9D] after:absolute after:bottom-0 after:left-0 after:duration-300 after:hover:w-full">
                <div className="relative overflow-hidden">
                  <img
                    src={silder4}
                    alt="Piazza Castello"
                    className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                  />
                  <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 group-hover:h-full duration-700"></div>
                  <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-[#029E9D] py-3 px-4">
                      <ul className='flex gap-x-2'>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="text-lg font-semibold">FabExpress Scholer</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
                    </div>
                  </div>
                  <div className="border-t-[2px] border-dotted mt-2">
                    <h2 className='mt-1 font-playfair font-bold text-2xl text-[#029E9D]'>$260.00<span className='text-base text-[#333] font-normal'> | Per person</span></h2>
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <div className="flex items-center">
                      <i className='text-base text-[#333]'><IoMdTime /></i>
                      <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                    </div>
                    <div className="">
                      <Link to="/booknow">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[24%] p-2">
              <div className="group bg-white relative shadow-lg rounded-lg after:content-[''] after:w-0 after:h-[3px] after:bg-[#199E9D] after:absolute after:bottom-0 after:left-0 after:duration-300 after:hover:w-full">
                <div className="relative overflow-hidden">
                  <img
                    src={silder5}
                    alt="Piazza Castello"
                    className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                  />
                  <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 group-hover:h-full duration-700"></div>
                  <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-[#029E9D] py-3 px-4">
                      <ul className='flex gap-x-2'>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="text-lg font-semibold">FabExpress Scholer</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
                    </div>
                  </div>
                  <div className="border-t-[2px] border-dotted mt-2">
                    <h2 className='mt-1 font-playfair font-bold text-2xl text-[#029E9D]'>$260.00<span className='text-base text-[#333] font-normal'> | Per person</span></h2>
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <div className="flex items-center">
                      <i className='text-base text-[#333]'><IoMdTime /></i>
                      <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                    </div>
                    <div className="">
                      <Link to="/booknow">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[24%] p-2">
              <div className="group bg-white relative shadow-lg rounded-lg after:content-[''] after:w-0 after:h-[3px] after:bg-[#199E9D] after:absolute after:bottom-0 after:left-0 after:duration-300 after:hover:w-full">
                <div className="relative overflow-hidden">
                  <img
                    src={silder6}
                    alt="Piazza Castello"
                    className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                  />
                  <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 group-hover:h-full duration-700"></div>
                  <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 duration-300">
                    <div className="bg-[#029E9D] py-3 px-4">
                      <ul className='flex gap-x-2'>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                        <li><IoIosStar className='text-[#FFBC00]' /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="text-lg font-semibold">FabExpress Scholer</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
                    </div>
                  </div>
                  <div className="border-t-[2px] border-dotted mt-2">
                    <h2 className='mt-1 font-playfair font-bold text-2xl text-[#029E9D]'>$260.00<span className='text-base text-[#333] font-normal'> | Per person</span></h2>
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <div className="flex items-center">
                      <i className='text-base text-[#333]'><IoMdTime /></i>
                      <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                    </div>
                    <div className="">
                      <Link to="/booknow">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};


const PreviousArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className='absolute -top-28 right-20 py-4 px-4 rounded-md bg-white font-poppins font-bold text-2xl text-black'><IoIosArrowBack /></button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className='absolute -top-28 right-0 py-4 px-4 rounded-md bg-white font-poppins font-bold text-2xl text-black'><IoIosArrowForward /></button>
  );
};
export default Carousel;
<button className=''></button>