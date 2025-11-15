import React, { useState } from "react";

const allImages = Array.from({ length: 25 }, (_, i) => `./images/${(i + 2).toString().padStart(2, "0")}.jpg`);

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(3); // 처음 3개만 보이기
  const [previewSrc, setPreviewSrc] = useState(null);

  const imagesToShow = allImages.slice(0, visibleCount);

  const openPreview = (src) => setPreviewSrc(src);
  const closePreview = () => setPreviewSrc(null);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, allImages.length));
  };

  const handleCollapse = () => {
    setVisibleCount(3);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ color: "#000" }}>갤러리</h3>
      <div style={{
        display: "flex",
        gap: "5px",
        flexWrap: "wrap"
      }}>
        {imagesToShow.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-${idx}`}
            style={{ width: "calc(33.333% - 3.33px)", cursor: "pointer", borderRadius: "5px" }}
            onClick={() => openPreview(src)}
          />
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          onClick={handleLoadMore}
          disabled={visibleCount >= allImages.length}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: visibleCount >= allImages.length ? "#ccc" : "#000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: visibleCount >= allImages.length ? "default" : "pointer"
          }}
        >
          더보기
        </button>

        <button
          onClick={handleCollapse}
          style={{
            flex: 1,
            padding: "10px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          접기
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
            cursor: "pointer"
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
