import React, { useState } from 'react';

const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>No images available yet. Images will be added soon.</p>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', textAlign: 'center' }}>
      {images.length > 1 && (
        <>
          <button 
            className="nav-arrows prev" 
            onClick={prevImage}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button 
            className="nav-arrows next" 
            onClick={nextImage}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}
      
      <img 
        src={images[currentIndex].src} 
        alt={images[currentIndex].alt || `${title} ${currentIndex + 1}`}
        className="main-image"
      />
      
      {images[currentIndex].caption && (
        <p style={{ 
          marginTop: '1rem', 
          fontStyle: 'italic', 
          opacity: 0.8,
          fontSize: '1rem'
        }}>
          {images[currentIndex].caption}
        </p>
      )}
      
      {images.length > 1 && (
        <p style={{ 
          marginTop: '0.5rem', 
          opacity: 0.6,
          fontSize: '0.9rem'
        }}>
          {currentIndex + 1} of {images.length}
        </p>
      )}
    </div>
  );
};

export default ImageGallery; 