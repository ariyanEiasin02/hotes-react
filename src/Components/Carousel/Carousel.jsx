import React from 'react';
import Slider from 'react-slick';
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

  const items = [
    { id: 1, title: 'Boss Suites Nana Hotel', location: 'Santa Maria Novella, Italy, Florence', distance: "100 meters", imageUrl: './src/assets/silder1.jpg' },
    { id: 2, title: 'FabExpress Scholer', location: 'Santa Maria Novella, Italy, Florence', distance: "100 meters", imageUrl: './src/assets/silder2.jpg' },
    { id: 3, title: 'Star Sukhumvit', location: 'Santa Maria Novella, Italy, Florence', distance: "100 meters", imageUrl: './src/assets/silder3.jpg' },
    { id: 4, title: 'FabExpress Nest', location: 'Santa Maria Novella, Italy, Florence', distance: "100 meters", imageUrl: './src/assets/silder4.jpg' },
    { id: 5, title: 'Norn Yaowarat Hotel', location: 'Santa Maria Novella, Italy, Florence', distance: "100 meters", imageUrl: './src/assets/silder5.jpg' },
    { id: 6, title: 'Piazza Castello', location: 'Santa Maria Novella, Italy, Florence', distance: "100 meters", imageUrl: './src/assets/silder6.jpg' },
  ];

  return (
    <div className='bg-[#F1F1F1] py-6 relative'>
      <div className="max-w-container mx-auto my-8">
        <div className="">
            <div className="">
              <span className='font-poppins font-medium text-xl text-[#FCC703] py-2'>Top Pick</span>
              <h2 className='py-2 font-poppins font-bold text-5xl text-[#333]'>Best <span className='text-[#199E9D]'>Tour Packages</span></h2>
              <p className='font-poppins font-light text-[#333] text-base py-2 w-[63%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
            </div>
        </div>
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white shadow-lg rounded-lg">
                <img
                  src={`/assets/${item.imageUrl}`}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className='font-poppins font-light text-xs text-[#333]'>{item.location}</p>
                    </div>
                    <div className="">
                      <p className='font-poppins font-light text-xs text-[#333]'>{item.distance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
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