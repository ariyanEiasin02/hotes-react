import React, { useEffect, useState } from 'react'

const BookCard = () => {

  return (
    <div>
      <section className='py-8'>
        <div className="max-w-container mx-auto">
          <div className="flex h-96">
            <div className="w-[25%]">
            <div className="w-full h-96 bg-cover bg-center animate-backgroundImages "></div>
            </div>
            <div className="w-[24%]">
              {/* <div>
                <div>
                  {imag.map((img, index) => (
                    <img
                      key={index}
                      src={img.src}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => openViewer(index)}
                      style={{cursor: 'pointer' }}
                    />
                  ))}
                </div>
                {isOpen && (
                  <ImageViewer
                    imgs={imagess}
                    currImg={currentImage}
                    isOpen={isOpen}
                    onClickNext={() => setCurrentImage((currentImage + 1) % images.length)}
                    onClickPrev={() => setCurrentImage((currentImage + images.length - 1) % images.length)}
                    onClose={closeViewer}
                  />
                )}
              </div> */}
              <div className="w-full bg-red-600 h-full"></div>
            </div>
            <div className="w-[25%]">
              <div className="relative w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.067940183906!2d90.3494703113122!3d23.76459789692691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1730343622271!5m2!1sen!2sbd"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>

            </div>
            <div className="w-[26%]">
              <div className="bg-[#f0f0f0] w-full h-96">
                <div className="p-4">
                  <h3>Checking Details:</h3>
                  <p>Check In:</p>
                  <p>Check Out:</p>
                  <p>#of Room:</p>
                  <p>#of Nights:</p>
                  <p>#Total Amount:</p>
                  <p>Meal Plan:</p>
                </div>
                <div className="p-4">
                  <h3>Hotel Conditions:</h3>
                  <p>Checl-in-From 16:00</p>
                  <p>Checl-out-Untill 12:00</p>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  )
}

export default BookCard