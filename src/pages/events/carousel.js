import React, { useEffect, useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000)
  }, [currentIndex, images.length]);

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 px-2 py-1 bg-gray-500 text-white rounded-full"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 px-2 py-1 bg-gray-500 text-white rounded-full"
        onClick={nextImage}
      >
        &gt;
      </button>
      <img
        className="mx-auto"
        src={images[currentIndex]}
        alt={`${currentIndex}`}
      />
    </div>
  );
};

export default Carousel;
