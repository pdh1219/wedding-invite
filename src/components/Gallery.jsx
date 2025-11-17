import React from "react";

export default function Gallery() {
  const images = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg'
  ];

  return (
    <section className="section-card">
      <h2 className="section-title">갤러리</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <img src={img} alt={`gallery ${idx}`} key={idx} />
        ))}
      </div>
    </section>
  );
}
