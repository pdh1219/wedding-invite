import React, { useState, useRef } from "react";

const images = [
  "./images/02.jpg",
  "./images/03.jpg",
  "./images/04.jpg",
  "./images/05.jpg",
  "./images/06.jpg",
  "./images/07.jpg",
  "./images/08.jpg",
  "./images/09.jpg",
  "./images/10.jpg",
  "./images/11.jpg",
  "./images/12.jpg",
  "./images/13.jpg",
  "./images/14.jpg",
  "./images/15.jpg",
  "./images/16.jpg",
  "./images/17.jpg",
  "./images/18.jpg",
  "./images/19.jpg",
  "./images/20.jpg"
];

const Gallery = () => {
  const [modalIndex, setModalIndex] = useState(null);
  const modalRef = useRef(null);

  const openModal = () => setModalIndex(0);
  const closeModal = () => setModalIndex(null);

  const prevImage = () => {
    setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setModalIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.slice(0, 9).map((src, idx) => (
          <div key={idx} className="gallery-cell">
            <img src={src} alt={`gallery-${idx}`} className="gallery-image" />
          </div>
        ))}
      </div>

      <br />

      <button className="toggle-account-btn" onClick={openModal}>
        상세보기
      </button>

      {modalIndex !== null && (
        <div className="modal-overlay" ref={modalRef}>
          <button className="modal-close-btn" onClick={closeModal}>
            ✕
          </button>
          <button className="modal-prev-btn" onClick={prevImage}>
            ‹
          </button>
          <img
            src={images[modalIndex]}
            alt={`modal-${modalIndex}`}
            className="modal-image"
          />
          <button className="modal-next-btn" onClick={nextImage}>
            ›
          </button>
          <div className="modal-thumbnails">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`thumb-${idx}`}
                className={`thumbnail ${modalIndex === idx ? "active" : ""}`}
                onClick={() => setModalIndex(idx)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

