import React, { useState } from 'react'
import ImageViewer from 'react-images-viewer';
import card1 from '../../assets/popular1.jpg'
import card2 from '../../assets/popular2.jpg'
import card3 from '../../assets/popular3.jpg'
import card4 from '../../assets/popular4.jpg'
import card5 from '../../assets/popular5.jpg'
import card6 from '../../assets/popular6.jpg'

const BookGallaery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        { src: `${card1}` },
        { src: `${card2}` },
    ];

    const openViewer = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    const closeViewer = () => {
        setIsOpen(false);
    };

  return (
    <div>
            <div>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => openViewer(index)}
                        style={{ width: '100px', margin: '10px', cursor: 'pointer' }}
                    />
                ))}
            </div>
            {isOpen && (
                <ImageViewer
                    imgs={images}
                    currImg={currentImage}
                    isOpen={isOpen}
                    onClickNext={() => setCurrentImage((currentImage + 1) % images.length)}
                    onClickPrev={() => setCurrentImage((currentImage + images.length - 1) % images.length)}
                    onClose={closeViewer}
                />
            )}
        </div>
  )
}

export default BookGallaery