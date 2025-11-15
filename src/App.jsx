import React from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
import MessagePayment from "./components/MessagePayment";
import MapSection from "./components/MapSection";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Header />
        <Greeting />
        <Schedule />
        <Gallery />
        <MessagePayment />
        <MapSection />
        {/* 카카오톡 공유 버튼 */}
        <div className="section" style={{ textAlign: "center" }}>
          <button
            className="share-button"
            onClick={() => {
              const url = window.location.href;
              const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(url)}`;
              window.open(kakaoUrl, "_blank");
            }}
          >
            카카오톡으로 공유하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
