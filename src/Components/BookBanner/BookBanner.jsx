import React from 'react'
import Header from '../Header/Header'
import CheckInOut from '../check In-Out/CheckInOut'

const BookBanner = () => {
  return (
    <div className=''>
        <section className='bg-[#0B3E3F] py-10 relative top-0 left-0'>
            <div className="absolute top-0 left-0 w-full">
                <Header/>
            </div>
            <div className="absolute -bottom-6 left-0 w-full">
                <CheckInOut/>
            </div>
        </section>
    </div>
  )
}

export default BookBanner