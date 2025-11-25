import React, { useEffect } from "react";

//91e36f4d5920813845d6ebe0ea0c48f6

function MapSection() {
  useEffect(() => {
    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      const { kakao } = window;
      const container = document.getElementById("map");
      if (!container) return;

      const lat = 37.51406;
      const lng = 127.0373;

      const destination = new kakao.maps.LatLng(lat, lng);

      const map = new kakao.maps.Map(container, {
        center: destination,
        level: 5,
      });

      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      const marker = new kakao.maps.Marker({
        map,
        position: destination,
        title: "서울 빌라드지디 논현",
      });

      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">서울 빌라드지디 논현</div>`,
      });
      infowindow.open(map, marker);

      // ----------------------------------
      // 🟡 지도 더블 클릭 시 카카오맵으로 이동
      // ----------------------------------
      kakao.maps.event.addListener(map, "click", function () {
        window.open(
          `https://map.kakao.com/link/map/서울 빌라드지디 논현,${lat},${lng}`,
          "_blank"
        );
      });
    };

    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(initMap);
      } else {
        const script = document.createElement("script");
        script.id = "kakao-map-sdk";
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=91e36f4d5920813845d6ebe0ea0c48f6&libraries=services&autoload=false";
        script.async = true;

        script.onload = () => {
          window.kakao.maps.load(initMap);
        };

        document.head.appendChild(script);
      }
    };

    loadKakaoMap();
  }, []);

  return (
    <div className="map-section-wrapper">
      <h3 className="map-title">오시는 길</h3>
      <br />
      <div
        id="map"
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "8px",
        }}
      ></div>
    </div>
  );
}

export default MapSection;