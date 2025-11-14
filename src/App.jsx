import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>돼-지꽃사슴</h1>
        <p>2025년 12월 31일, 서울 특별시</p>
      </header>

      <section className="details">
        <h2>신랑 & 신부</h2>
        <p>홍길동 & 김영희</p>
      </section>

      <section className="schedule">
        <h2>행사 일정</h2>
        <ul>
          <li>오후 1시: 예식 시작</li>
          <li>오후 3시: 피로연</li>
        </ul>
      </section>

      <footer className="footer">
        <p>많은 참석 부탁드립니다.</p>
        <p>문의: 010-1234-5678</p>
      </footer>
    </div>
  );
}

export default App;
