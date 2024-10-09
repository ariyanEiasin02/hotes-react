import React from 'react';
import Slider from 'react-slick';
import popular1 from '../../assets/popular1.jpg'
import popular2 from '../../assets/popular2.jpg'
import popular3 from '../../assets/popular3.jpg'
import popular4 from '../../assets/popular4.jpg'
import popular5 from '../../assets/popular5.jpg'
import popular6 from '../../assets/popular6.jpg'
import { IoIosArrowBack, IoIosArrowForward,IoMdTime,IoIosStar } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";

const PopularTour = () => {
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
    <div className='bg-[#E9F7FA] py-8 relative'>
      <div className="max-w-container mx-auto my-8">
        <div className="">
            <div className="">
              <span className='font-playfair font-medium text-xl text-[#FCC703] py-2'>Best Place For You</span>
              <h2 className='py-2 font-playfair font-bold text-5xl text-[#333]'>Most  <span className='text-[#199E9D]'>Popular Tour</span></h2>
              <p className='font-playfair font-light text-[#333] text-base py-2 w-[45%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className="mt-6">
        <Slider {...settings} className='bg-white'>
          
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg border border-[#6E7070]">
            <div className="group relative overflow-hidden">
                <img
                  src={popular1}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="">
                    <div className="">
                      <h3 className="text-xl font-semibold">Boss Suites Nana Hotel</h3>
                      <div className="flex mt-1 gap-x-2 items-center">
                        <div className="flex gap-x-1">
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                        </div>
                        <div className="">
                        <p className='font-playfair font-medium text-base text-[#333]'>(4.8 rating)</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h2 className='font-playfair font-medium text-xl text-[#333]'>$980.00/<span className='text-base'>Person</span></h2>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <i className='text-base text-[#333]'><IoMdTime/></i>
                            <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                        </div>
                        <div className="">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg border border-[#6E7070]">
            <div className="group relative overflow-hidden">
                <img
                  src={popular2}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="">
                    <div className="">
                      <h3 className="text-xl font-semibold">Boss Suites Nana Hotel</h3>
                      <div className="flex mt-1 gap-x-2 items-center">
                        <div className="flex gap-x-1">
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                        </div>
                        <div className="">
                        <p className='font-playfair font-medium text-base text-[#333]'>(4.8 rating)</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h2 className='font-playfair font-medium text-xl text-[#333]'>$980.00/<span className='text-base'>Person</span></h2>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <i className='text-base text-[#333]'><IoMdTime/></i>
                            <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                        </div>
                        <div className="">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg border border-[#6E7070]">
            <div className="group relative overflow-hidden">
                <img
                  src={popular3}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="">
                    <div className="">
                      <h3 className="text-xl font-semibold">Boss Suites Nana Hotel</h3>
                      <div className="flex mt-1 gap-x-2 items-center">
                        <div className="flex gap-x-1">
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                        </div>
                        <div className="">
                        <p className='font-playfair font-medium text-base text-[#333]'>(4.8 rating)</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h2 className='font-playfair font-medium text-xl text-[#333]'>$980.00/<span className='text-base'>Person</span></h2>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <i className='text-base text-[#333]'><IoMdTime/></i>
                            <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                        </div>
                        <div className="">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg border border-[#6E7070]">
            <div className="group relative overflow-hidden">
                <img
                  src={popular4}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="">
                    <div className="">
                      <h3 className="text-xl font-semibold">Boss Suites Nana Hotel</h3>
                      <div className="flex mt-1 gap-x-2 items-center">
                        <div className="flex gap-x-1">
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                        </div>
                        <div className="">
                        <p className='font-playfair font-medium text-base text-[#333]'>(4.8 rating)</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h2 className='font-playfair font-medium text-xl text-[#333]'>$980.00/<span className='text-base'>Person</span></h2>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <i className='text-base text-[#333]'><IoMdTime/></i>
                            <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                        </div>
                        <div className="">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg border border-[#6E7070]">
            <div className="group relative overflow-hidden">
                <img
                  src={popular5}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="">
                    <div className="">
                      <h3 className="text-xl font-semibold">Boss Suites Nana Hotel</h3>
                      <div className="flex mt-1 gap-x-2 items-center">
                        <div className="flex gap-x-1">
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                        </div>
                        <div className="">
                        <p className='font-playfair font-medium text-base text-[#333]'>(4.8 rating)</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h2 className='font-playfair font-medium text-xl text-[#333]'>$980.00/<span className='text-base'>Person</span></h2>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <i className='text-base text-[#333]'><IoMdTime/></i>
                            <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                        </div>
                        <div className="">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                        </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg border border-[#6E7070]">
                <div className="group relative overflow-hidden">
                <img
                  src={popular6}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="">
                    <div className="">
                      <h3 className="text-xl font-semibold">Boss Suites Nana Hotel</h3>
                      <div className="flex mt-1 gap-x-2 items-center">
                        <div className="flex gap-x-1">
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                            <i><IoIosStar  className='text-base text-[#FF833F]' /></i>
                        </div>
                        <div className="">
                        <p className='font-playfair font-medium text-base text-[#333]'>(4.8 rating)</p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h2 className='font-playfair font-medium text-xl text-[#333]'>$980.00/<span className='text-base'>Person</span></h2>
                    </div>
                    <div className="mt-5 flex justify-between items-center">
                        <div className="flex items-center">
                            <i className='text-base text-[#333]'><IoMdTime/></i>
                            <span className='ml-1 font-playfair font-medium text-base text-[#333]'>7 Days</span>
                        </div>
                        <div className="">
                        <button className='rounded-full border border-[#FF833F] w-full py-2 px-7 font-poppins font-medium text-[#333] text-base'>Book Now <MdArrowForward className='inline-block' /></button>
                        </div>
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
    <button onClick={onClick} className='absolute -top-28 right-20 py-4 px-4 rounded-md bg-white font-poppins font-bold text-2xl text-black'><IoIosArrowBack/></button>
  );
};

const NextArrow = ({onClick }) => {
  return (
    <button onClick={onClick} className='absolute -top-28 right-0 py-4 px-4 rounded-md bg-white font-poppins font-bold text-2xl text-black'><IoIosArrowForward/></button>
  );
};
export default PopularTour;
