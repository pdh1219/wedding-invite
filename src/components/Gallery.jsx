import React, { useState, useRef, useEffect } from "react";

// 전체 갤러리 21장
const fullImages = Array.from(
  { length: 21 },
  (_, i) => `./images/${(i + 2).toString().padStart(2, "0")}.jpg`
);

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(null);
  const [fade, setFade] = useState(false);
  const [zoom, setZoom] = useState(1);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const lastTap = useRef(0);

  const visibleCount = showAll ? fullImages.length : 9;
  const imagesToShow = fullImages.slice(0, visibleCount);

  const openPreview = (index) => {
    setPreviewIndex(index);
    setZoom(1);
    setFade(true);
    setTimeout(() => setFade(false), 200);
  };

  const closePreview = () => {
    setPreviewIndex(null);
    setZoom(1);
  };

  const toggleShowAll = () => setShowAll((prev) => !prev);

  const prevImage = () => {
    setFade(true);
    setTimeout(() => {
      setPreviewIndex((prev) =>
        prev > 0 ? prev - 1 : fullImages.length - 1
      );
      setFade(false);
    }, 150);
  };

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setPreviewIndex((prev) =>
        prev < fullImages.length - 1 ? prev + 1 : 0
      );
      setFade(false);
    }, 150);
  };

  // 스와이프 시작/끝
  const handleTouchStart = (e) =>
    (touchStartX.current = e.changedTouches[0].screenX);

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
  };

  // 더블탭 줌
  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      setZoom((z) => (z === 1 ? 2 : 1));
    }
    lastTap.current = now;
  };

  // 마우스 휠 줌
  const handleWheel = (e) => {
    if (e.deltaY < 0) setZoom((z) => Math.min(z + 0.25, 3));
    else setZoom((z) => Math.max(z - 0.25, 1));
  };

  // 키보드 ← → ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (previewIndex === null) return;

      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closePreview();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewIndex]);

  return (
    <div className="section gallery-section">
      <h3 className="gallery-title">갤러리</h3>

      <div className="gallery-grid">
        {imagesToShow.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gallery-${idx}`}
            className="gallery-image"
            onClick={() => openPreview(idx)}
          />
        ))}
      </div>

      <button onClick={toggleShowAll} className="gallery-button">
        {showAll ? "접기" : "더보기"}
      </button>

      {/* ======================
          모달 시작
      ====================== */}
      {previewIndex !== null && (
        <div
          className="modal-overlay"
          onClick={closePreview}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          onDoubleClick={handleDoubleTap}
        >
          {/* 닫기 버튼 ✕ */}
          <button
            className="modal-close"
            onClick={(e) => {
              e.stopPropagation();
              closePreview();
            }}
          >
            ✕
          </button>

          {/* 좌 버튼 */}
          <button
            className="modal-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          {/* 메인 이미지 */}
          <img
            src={fullImages[previewIndex]}
            alt="preview"
            className={`modal-image ${fade ? "fade" : ""}`}
            style={{ transform: `scale(${zoom})` }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* 우 버튼 */}
          <button
            className="modal-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>

          {/* ======================
              썸네일 네비게이션
          ====================== */}
          <div className="thumbnail-bar" onClick={(e) => e.stopPropagation()}>
            {fullImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i}`}
                className={`thumbnail-item ${
                  i === previewIndex ? "active-thumbnail" : ""
                }`}
                onClick={() => openPreview(i)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
