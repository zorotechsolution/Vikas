import React, { useState } from 'react';
import './Gallery.css';
import { FaTimes } from 'react-icons/fa';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Classroom Training' },
  { id: 2, src: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Cabin Simulation' },
  { id: 3, src: 'https://images.unsplash.com/photo-1556388169-db19adc9608f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Ground Staff Operation' },
  { id: 4, src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Students Group' },
  { id: 5, src: 'https://images.unsplash.com/photo-1488554378835-f7cf477153b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Mock Interview' },
  { id: 6, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Graduation Day' },
];

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <div className="container">
          <h1>Life at Vikais</h1>
          <p>Moments of learning, joy, and success</p>
        </div>
      </div>

      <div className="container section">
        <div className="gallery-grid">
          {images.map((img) => (
            <div key={img.id} className="gallery-item" onClick={() => openModal(img)}>
               <div className="gallery-img-wrapper">
                 <img src={img.src} alt={img.alt} className="gallery-img" />
                 <div className="gallery-overlay">
                    <span>View Image</span>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <span className="close-modal" onClick={closeModal}>
            <FaTimes />
          </span>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.src} alt={modalImage.alt} />
            <caption>{modalImage.alt}</caption>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
