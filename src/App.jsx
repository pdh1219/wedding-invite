import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">

      {/* --- 커버 이미지 --- */}
      <section className="cover">
        <img 
          src="./images/01.jpg" 
          alt="wedding" 
          className="cover-img imageSize" 
        />
        <h1 className="title">김성윤 & 박대희</h1>
        <p className="subtitle">결혼식에 초대합니다</p>
      </section>

      {/* --- 인사말 --- */}
      <section className="greeting">
        <h2>INVITATION</h2>
        <p>
          인삿말 머릿말
        </p>
        <p>
          2025년 2월 28일 (토) 오전 11시 30분  
          서울 빌라드 G-Dragon 논현
        </p>
      </section>

      {/* --- 일정 안내 --- */}
      <section className="info">
        <h2>WEDDING DAY</h2>
        <div className="info-card">
          <p className="date">2025. 05. 25 SAT</p>
          <p className="time">PM 2:00</p>
          <p className="place">청담웨딩홀 3층 라벤더홀</p>
        </div>
      </section>

      {/* --- 갤러리 --- */}
      <section className="gallery">
        <h2>GALLERY</h2>
        <div className="photo-grid">
          <img src="./images/02.jpg" alt="gallery1" />
          <img src="./images/03.jpg" alt="gallery2" />
          <img src="./images/04.jpg" alt="gallery3" />
          <img src="./images/05.jpg" alt="gallery1" />
          <img src="./images/06.jpg" alt="gallery2" />
          <img src="./images/07.jpg" alt="gallery3" />
          <img src="./images/08.jpg" alt="gallery1" />
          <img src="./images/11.jpg" alt="gallery2" />
          <img src="./images/10.jpg" alt="gallery3" />
        </div>
      </section>

      {/* --- 마음 전하기 --- */}
      <section className="account">
        <h2>마음 전하기</h2>

        <details>
          <summary>신랑측 계좌 보기</summary>
          <p>국민은행 123-45-67890 김성윤</p>
        </details>

        <details>
          <summary>신부측 계좌 보기</summary>
          <p>신한은행 987-65-43210 박대희</p>
        </details>
      </section>

    {/* --- 구글맵 --- */}
    <section className="map">
      <h2>LOCATION</h2>
      <iframe
        title="wedding-map"
        src="https://www.google.com/maps/place/%EB%B9%8C%EB%9D%BC%EB%93%9C%EC%A7%80%EB%94%94+%EB%85%BC%ED%98%84/data=!3m1!4b1!4m6!3m5!1s0x357ca3f44c95009b:0xb0778c34b2b8cc1f!8m2!3d37.5140512!4d127.0372555!16s%2Fg%2F11bw5yy196?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
        width="100%"
        height="250"
        style={{ border: 0, borderRadius: "10px" }}
        loading="lazy"
        ></iframe>
    </section>
    
  <p>카카오톡 공유하기 추가하기</p>
      {/* --- 푸터 --- */}
      <footer>
        <p>© 2025 Wedding Invitation</p>
      </footer>
    
        </div>
  );
}

export default App;
