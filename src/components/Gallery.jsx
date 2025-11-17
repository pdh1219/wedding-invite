import React, { useState } from "react";

function Gallery() {
  const [expanded, setExpanded] = useState(false);

  const basicImages = Array.from({ length: 9 }, (_, i) => `/images/gallery${i+1}.jpg`);
  const allImages = Array.from({ length: 21 }, (_, i) => `/images/gallery${i+1}.jpg`);

  const images = expanded ? allImages : basicImages;

  return (
    <div className="section">
      {/* 상단 대표 사진 */}
      <img src="/images/gallery_top.jpg" alt="갤러리 메인" />

      {/* 갤러리 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
          marginTop: "10px",
        }}
      >
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`gallery${idx}`} />
        ))}
      </div>

      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "접기" : "더보기"}
      </button>
    </div>
  );
}

export default Gallery;
