import React from "react";

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=91e36f4d5920813845d6ebe0ea0c48f6"></script>

function MapSection() {
  return (
    <div className="section">
      <h3>오시는 길</h3>
      <iframe
        title="map"
        width="100%"
        height="200"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="	https://map.kakao.com/link/map/18577297">
      </iframe>
    </div>
  );
}

export default MapSection;
