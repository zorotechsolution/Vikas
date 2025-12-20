import React, { useRef, useState } from 'react';
import './Gallery.css';
import { FaTimes } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

const images = [
  { id: 1, category: 'students', src: 'https://ik.imagekit.io/zorotech/vikas/DSC_5183.JPG', alt: 'img' },
  { id: 2, category: 'celebration', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.56%20PM%20(1).jpeg', alt: 'img' },
  { id: 3, category: 'internship', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.51%20PM%20(1).jpeg', alt: 'img' },
  { id: 4, category: 'students', src: 'https://ik.imagekit.io/zorotech/vikas/DSC_5191.JPG', alt: 'img' },
  { id: 5, category: 'internship', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.51%20PM.jpeg', alt: 'img' },
  { id: 6, category: '', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.34%20PM.jpeg', alt: 'img' },
  { id: 7, category: 'students', src: 'https://ik.imagekit.io/zorotech/vikas/DSC_5195.JPG', alt: 'img' },
  { id: 8, category: 'celebration', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.43%20PM.jpeg', alt: 'img' },
  { id: 9, category: 'students', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.38%20PM%20(1).jpeg', alt: 'img' },
  { id: 10, category: 'students', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.53%20PM%20(1).jpeg', alt: 'img' },
  { id: 11, category: 'students', src: 'https://ik.imagekit.io/zorotech/vikas/DSC_5195.JPG', alt: 'img' },
  { id: 12, category: 'celebration', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.42%20PM.jpeg', alt: 'img' },
  { id: 13, category: 'celebration', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.48%20PM.jpeg', alt: 'img' },
  { id: 14, category: '', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.40%20PM%20(1).jpeg', alt: 'img' },
  { id: 15, category: 'celebration', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.56%20PM.jpeg', alt: 'img' },
  { id: 16, category: '', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.47%20PM.jpeg', alt: 'img' },
  { id: 18, category: 'celebration', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.54%20PM%20(1).jpeg', alt: 'img' },
  { id: 21, category: 'celebration', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.53%20PM.jpeg', alt: 'img' },
  { id: 24, category: 'celebration', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.47%20PM%20(1).jpeg', alt: 'img' },
  { id: 25, category: '', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.46%20PM.jpeg', alt: 'img' },
  { id: 26, category: 'celebration', src: 'https://ik.imagekit.io/zorotech/vikas/WhatsApp%20Image%202025-12-19%20at%205.41.52%20PM%20(1).jpeg', alt: 'img' }
];

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);
  const [active, setActive] = useState("All");
  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };
   const filteredImages =
    active === "All"
      ? images
      : images.filter(img => img.category === active);

      


  return (
    <div className="gallery-page">
      <div className="courses-header">
        <div className="container">
          <h1 style={{color:"white"}}>Life at Vikas</h1>
          <p style={{color:"whitesmoke"}}>Moments of learning, joy, and success</p>
        </div>
      </div>

       <section className="gallery-section">
      <div className="container">

        <div className="gallery-filters">
          {["All", "students", "celebration", "internship"].map(item => (
            <button
              key={item}
              className={`filter-btn ${active === item ? "active" : ""}`}
              onClick={() => setActive(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map(img => (
            <div key={img.id} className="gallery-card">
              <img src={img.src} alt={img.category} />
            </div>
          ))}
        </div>

      </div>
    </section>

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
