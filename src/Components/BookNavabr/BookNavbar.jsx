import React from 'react'

const BookNavbar = () => {
  return (
    <div className='mt-8'>
        <div className="max-w-container mx-auto">
            <nav className='border-b-2'>
                <ul className='flex justify-between'>
                    <li className='py-3 px-8 hover:bg-[#F2F2F2]'>
                        <a className='font-playfair font-semibold text-base text-[#333] duration-300 tracking-[0.1rem]' href="#">Overview</a>
                    </li>
                    <li className='py-3 px-8 hover:bg-[#F2F2F2]'>
                        <a className='font-playfair font-semibold text-base text-[#333] duration-300 tracking-[0.1rem]' href="#">Apartment info & price</a>
                    </li>
                    <li className='py-3 px-8 hover:bg-[#F2F2F2]'>
                        <a className='font-playfair font-semibold text-base text-[#333] duration-300 tracking-[0.1rem]' href="#">Facilities</a>
                    </li>
                    <li className='py-3 px-8 hover:bg-[#F2F2F2]'>
                        <a className='font-playfair font-semibold text-base text-[#333] duration-300 tracking-[0.1rem]' href="#">House rules</a>
                    </li>
                    <li className='py-3 px-8 hover:bg-[#F2F2F2]'>
                        <a className='font-playfair font-semibold text-base text-[#333] duration-300 tracking-[0.1rem]' href="#">The fine print</a>
                    </li>
                    <li className='py-3 px-8 hover:bg-[#F2F2F2]'>
                        <a className='font-playfair font-semibold text-base text-[#333] duration-300 tracking-[0.1rem]' href="#">Guest reviews (383)</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default BookNavbar