import React, { useEffect } from "react";

function MapSection() {
  useEffect(() => {
    // -----------------------
    // 지도 초기화 함수
    // -----------------------
    const initMap = () => {
      // kakao 객체와 maps 존재 여부 확인
      if (!window.kakao || !window.kakao.maps) return;

      const { kakao } = window;

      const container = document.getElementById("map");
      if (!container) return;

      // 목적지 좌표
      const destination = new kakao.maps.LatLng(37.51406, 127.0373);

      // 지도 생성
      const map = new kakao.maps.Map(container, {
        center: destination,
        level: 5,
      });

      // 확대/축소 컨트롤 추가
      const zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      // 목적지 마커
      const marker = new kakao.maps.Marker({
        map,
        position: destination,
        title: "서울 빌라드지디 논현",
      });

      // 인포윈도우 표시
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">서울 빌라드지디 논현</div>`,
      });
      infowindow.open(map, marker);
    };

    // -----------------------
    // SDK 스크립트 로드
    // -----------------------
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        // 이미 SDK 로드됨
        window.kakao.maps.load(initMap);
      } else {
        // 스크립트 생성
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
    <div className="section">
      <h3 style={{ color: "#7B5E57" }}>오시는 길</h3>
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
