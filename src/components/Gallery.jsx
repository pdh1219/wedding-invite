import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

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
  "./images/20.jpg",
];

const Gallery = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const thumbnailRefs = useRef([]);
  const thumbnailsContainerRef = useRef(null);

  const openModal = () => {
    setModalIndex(0); // 처음 선택할 이미지
  };

  const closeModal = () => setModalIndex(null);

  const prevImage = () => {
    setModalIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setModalIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ 모달 열림 + 이미지 변경 시 항상 "선택된 썸네일 기준"으로 이동
  useEffect(() => {
    if (
      modalIndex === null ||
      !thumbnailRefs.current[modalIndex] ||
      !thumbnailsContainerRef.current
    )
      return;

    const container = thumbnailsContainerRef.current;
    const thumbnail = thumbnailRefs.current[modalIndex];

    // ⭐ 렌더 & 레이아웃 완료 후 실행
    requestAnimationFrame(() => {
      const containerWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;

      const thumbnailCenter =
        thumbnail.offsetLeft + thumbnail.offsetWidth / 2;

      let targetScroll =
        thumbnailCenter - containerWidth / 2;

      // ✅ 스크롤 범위 보정 (첫/마지막 이미지 대응)
      const maxScroll = scrollWidth - containerWidth;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    });
  }, [modalIndex]);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-grid">
        {images.slice(0, 9).map((src, idx) => (
          <div key={idx} className="gallery-cell">
            <img
              src={src}
              alt={`gallery-${idx}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      <br />

      <button className="toggle-account-btn" onClick={openModal}>
        상세보기
      </button>

      {modalIndex !== null &&
        createPortal(
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
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

              <div
                className="modal-thumbnails"
                ref={thumbnailsContainerRef}
              >
                {images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`thumb-${idx}`}
                    ref={(el) => (thumbnailRefs.current[idx] = el)}
                    className={`thumbnail ${
                      modalIndex === idx ? "active" : ""
                    }`}
                    onClick={() => setModalIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Gallery;
