import React from 'react'
import tour1 from '../../assets/tour1.jpg'
import tour2 from '../../assets/tour2.jpg'
import tour3 from '../../assets/tour3.jpg'
import tour4 from '../../assets/tour4.jpg'
const Tours = () => {
    return (
        <div>
            <section className='py-16'>
                <div className="max-w-container mx-auto">
                    <div className="flex justify-center text-center">
                        <div className="">
                            <h2 className='py-2 font-poppins font-bold text-5xl text-[#333]'>Best <span className='text-[#199E9D]'>Explore Bangladesh</span></h2>
                            <p className='mx-auto font-poppins font-light text-[#333] text-base py-2 w-[63%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                        </div>
                    </div>
                    <div className="mt-12 flex gap-x-6 items-center">
                        <div className="w-[60%]">
                            <div className="relative group overflow-hidden rounded-xl">
                                <img className='rounded-xl  duration-700 ease-in-out group-hover:scale-125 ' src={tour1} alt="" />
                                <div className="z-10 absolute bottom-3 left-4">
                                    <p className='text-[#FDC703] text-xl font-poppins font-semibold'>Cox's Bazar</p>
                                    <h4 className='text-white text-2xl font-poppins font-bold'>Bangladesh</h4>
                                </div>
                                <div className="z-10 absolute bottom-5 right-5">
                                    <p className='text-white text-2xl font-poppins font-bold bg-[#039E9D] rounded-md py-2 px-4'>60 properties</p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                            </div>
                            <div className="flex gap-x-6 mt-6">
                                <div className="w2/4">
                                    <div className="relative group overflow-hidden rounded-xl">
                                        <img className='rounded-xl  duration-700 ease-in-out group-hover:scale-125 ' src={tour2} alt="" />
                                        <div className="z-10 absolute bottom-3 left-4">
                                            <p className='text-[#FDC703] text-xl font-poppins font-semibold'>Cox's Bazar</p>
                                            <h4 className='text-white text-2xl font-poppins font-bold'>Bangladesh</h4>
                                        </div>
                                        <div className="z-10 absolute bottom-5 right-5">
                                            <p className='text-white text-2xl font-poppins font-bold bg-[#039E9D] rounded-md py-2 px-4'>60 Tours</p>
                                        </div>
                                        <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                                    </div>
                                </div>
                                <div className="w2/4">
                                    <div className="relative group overflow-hidden rounded-xl">
                                        <img className='rounded-xl  duration-700 ease-in-out group-hover:scale-125 ' src={tour3} alt="" />
                                        <div className="z-10 absolute bottom-3 left-4">
                                            <p className='text-[#FDC703] text-xl font-poppins font-semibold'>Cox's Bazar</p>
                                            <h4 className='text-white text-2xl font-poppins font-bold'>Bangladesh</h4>
                                        </div>
                                        <div className="z-10 absolute bottom-5 right-5">
                                            <p className='text-white text-2xl font-poppins font-bold bg-[#039E9D] rounded-md py-2 px-4'>60 Tours</p>
                                        </div>
                                        <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[40%]">
                        <div className="relative group overflow-hidden rounded-xl">
                                <img className='w-full rounded-xl  duration-700 ease-in-out group-hover:scale-125 h-full' src={tour4} alt="" />
                                <div className="z-10 absolute bottom-3 left-4">
                                    <p className='text-[#FDC703] text-xl font-poppins font-semibold'>England</p>
                                    <h4 className='text-white text-2xl font-poppins font-bold'>London</h4>
                                </div>
                                <div className="z-10 absolute bottom-5 right-5">
                                    <p className='text-white text-2xl font-poppins font-bold bg-[#039E9D] rounded-md py-2 px-4'>60 properties</p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-0 w-full bg-overlay opacity-30 rounded-xl group-hover:h-full duration-700"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tours