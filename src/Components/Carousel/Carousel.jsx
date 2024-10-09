import React from 'react';
import Slider from 'react-slick';
import silder1 from '../../assets/silder1.jpg'
import silder2 from '../../assets/silder2.jpg'
import silder3 from '../../assets/silder3.jpg'
import silder4 from '../../assets/silder4.jpg'
import silder5 from '../../assets/silder5.jpg'
import silder6 from '../../assets/silder6.jpg'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
              <span className='font-poppins font-medium text-xl text-[#FCC703] py-2'>Top Pick</span>
              <h2 className='py-2 font-poppins font-bold text-5xl text-[#333]'>Best <span className='text-[#199E9D]'>Tour Packages</span></h2>
              <p className='font-poppins font-light text-[#333] text-base py-2 w-[63%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
            </div>
        </div>
        <div className="mt-6">
        <Slider {...settings} className='bg-[#F1F1F1]'>
          
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg">
            <div className="group relative overflow-hidden">
                <img
                  src={silder1}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
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
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg">
            <div className="group relative overflow-hidden">
                <img
                  src={silder2}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
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
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg">
            <div className="group relative overflow-hidden">
                <img
                  src={silder3}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="text-lg font-semibold">Star Sukhumvit</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg">
            <div className="group relative overflow-hidden">
                <img
                  src={silder4}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="">
                      <h3 className="text-lg font-semibold">FabExpress Nest</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg">
            <div className="group relative overflow-hidden">
                <img
                  src={silder5}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="">
                      <h3 className="text-lg font-semibold">Norn Yaowarat Hotel</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div className="w-[24%] p-2">
            <div className="bg-white shadow-lg rounded-lg ">
                <div className="group relative overflow-hidden">
                <img
                  src={silder6}
                  alt="Piazza Castello"
                  className="w-full h-64 object-cover duration-700 ease-in-out group-hover:scale-125"
                />
                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="">
                      <h3 className="text-lg font-semibold">Piazza Castello</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>Santa Maria Novella, Italy, Florence</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>100 meters</p>
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
export default Carousel;
<button className=''></button>