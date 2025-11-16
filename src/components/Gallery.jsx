import React, { useState } from "react";

const allImages = Array.from(
  { length: 25 },
  (_, i) => `./images/${(i + 2).toString().padStart(2, "0")}.jpg`
);

function Gallery() {
  const [showAll, setShowAll] = useState(false); // 전체 보기 on/off
  const [previewSrc, setPreviewSrc] = useState(null);

  const visibleCount = showAll ? allImages.length : 9; // 9개 또는 전체
  const imagesToShow = allImages.slice(0, visibleCount);

  const openPreview = (src) => setPreviewSrc(src);
  const closePreview = () => setPreviewSrc(null);

  const toggleShowAll = () => setShowAll(prev => !prev); // on/off 토글

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ color: "#000" }}>갤러리</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
        }}
      >
        {imagesToShow.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-${idx}`}
            style={{ width: "100%", cursor: "pointer", borderRadius: "5px" }}
            onClick={() => openPreview(src)}
          />
        ))}
      </div>

      {/* 더보기/접기 버튼 */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={toggleShowAll}
          className="gallery-button" // 클래스 추가
        >
          {showAll ? "접기" : "더보기"}
        </button>
      </div>

      {/* 이미지 미리보기 모달 */}
      {previewSrc && (
        <div
          className="modal-overlay"
          onClick={closePreview}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
            cursor: "pointer",
          }}
        >
          <img
            src={previewSrc}
            alt="preview"
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "10px" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
