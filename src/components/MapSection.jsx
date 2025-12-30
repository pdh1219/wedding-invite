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
        content: `<div style="padding:5px; font-size:14px;">서울 빌라드지디 논현</div>`,
      });
      infowindow.open(map, marker);

      // 🟡 지도 클릭 시 카카오맵 이동
      kakao.maps.event.addListener(map, "click", function () {
        const goMap = window.confirm(
          "카카오맵에서 위치를 확인하시겠습니까?"
        );

        if (goMap) {
          window.open(
            `https://map.kakao.com/link/map/서울 빌라드지디 논현,${lat},${lng}`,
            "_blank"
          );
        }
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
      <h3 className="map-title">오시는 길 안내</h3>
      <br />

      <div
        id="map"
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "8px",
        }}
      ></div>

      {/* 🟡 여기서부터 ↓ 교통편 안내 섹션 */}
      <div
        className="transport-info"
        style={{
          marginTop: "16px",
          padding: "14px",
          background: "#f9f9f9",
          borderRadius: "8px",
          lineHeight: "1.6",
          fontSize: "14px",
          color: "#444",
        }}
      >
        <strong style={{ fontSize: "15px" }}>빌라드지디 논현</strong>
        <div>· 서울 강남구 언주로126길 23 (논현동)</div>
        <div>· 02-547-3381</div>

        <br />

        <strong style={{ fontSize: "15px" }}>자가용 이용 시 주차 안내</strong>
        <div>· 'SK 허브블루' 주차 후 셔틀버스 이용 <br />
        {"\u00A0\u00A0\u00A0\u00A0"}(SK 허브블루 : 강남구 학동로 342) 
        </div>
        <div>· 예식장 앞 발렛파킹 진행</div>

        <br />

        <strong style={{ fontSize: "15px" }}>무료 셔틀버스 운행</strong>
        <div>· 강남구청역 2번출구 20m 앞 10분 간격 운행</div>
        <div>· 강남구청역 → 예식장 : 10:30~12:00</div>
        <div>· 예식장 → 강남구청역 : 12:30~13:30</div>

        <br />

        <div style={{ color: "#800010" }}>※ 장소가 협소한 관계로<br/> 
        {"\u00A0\u00A0\u00A0\u00A0\u00A0"}축하 화환은 마음만 감사히 받겠습니다.</div>
      </div>
    </div>
  );
}

export default MapSection;