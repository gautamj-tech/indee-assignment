import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [dimensions, setDimensions] = useState({ width: '100%', height: 'auto' });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: '100%',
        height: window.innerWidth > 768 ? '500px' : '200px',
      });
    };

    updateDimensions();

    const resizeListener = window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={dimensions}>
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'slide active' : 'slide'}
            style={dimensions}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? 'dot active' : 'dot'}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
