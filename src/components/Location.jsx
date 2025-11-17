import React from "react";

export default function Location() {
  return (
    <section className="section-card">
      <h2 className="section-title">오시는 길</h2>
      <iframe
        title="map"
        src="https://map.kakao.com/?urlX=492396&urlY=1123451&name=웨딩홀"
      ></iframe>
    </section>
  );
}
