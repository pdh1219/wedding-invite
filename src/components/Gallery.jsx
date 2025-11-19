import React, { useState } from "react";

const images = [
  "./images/01.jpg",
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
  "./images/20.jpg",
  "./images/21.jpg",
];

const Gallery = () => {
  const [expanded, setExpanded] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const visibleCount = expanded ? images.length : 9;

  const handleToggle = () => setExpanded(prev => !prev);
  const openModal = (idx) => setModalIndex(idx);
  const closeModal = () => setModalIndex(null);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>
      <br />
      <div className="gallery-grid">
        {images.slice(0, visibleCount).map((src, idx) => (
          <div key={idx} className="gallery-cell" onClick={() => openModal(idx)}>
            <img src={src} alt={`gallery-${idx}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {images.length > 9 && (
        <button className="gallery-button" onClick={handleToggle}>
          {expanded ? "접기" : "더보기"}
        </button>
      )}

      {/* 모달 상세보기 */}
      {modalIndex !== null && (
        <div className="gallery-modal" onClick={closeModal}>
          <img src={images[modalIndex]} alt={`gallery-${modalIndex}`} className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default Gallery;