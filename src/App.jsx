import React from 'react';
import './App.css';

function Calendar2026Feb() {
  const year = 2026;
  const month = 1; // 0:1월, 1:2월

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevLastDate = new Date(year, month, 0).getDate();

  const calendarDays = [];

  // 이전 달 날짜 채우기
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevLastDate - i,
      inactive: true,
      key: `prev-${prevLastDate - i}`
    });
  }

  // 이번 달 날짜 채우기
  for (let i = 1; i <= lastDate; i++) {
    calendarDays.push({
      day: i,
      inactive: false,
      key: `curr-${i}`
    });
  }

  // 다음 달 날짜는 삭제하고 5주(35칸)까지만 표시
  while (calendarDays.length < 35) {
    calendarDays.push({
      day: "",
      inactive: true,
      key: `next-${calendarDays.length}`
    });
  }

  return (
    <section className="calendar" aria-label="2026년 2월 달력">
      <h2 className="calendar-title">2026년 2월</h2>

      {/* 요일 */}
      <div className="calendar-grid" aria-hidden="true">
        {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
          <div key={d} className="weekday">{d}</div>
        ))}
      </div>

      {/* 날짜 */}
      <div className="date-grid">
        {calendarDays.map(({ day, inactive, key }) => {
          const isToday = !inactive && day === 28;

          return (
            <div
              key={key}
              className={`date-cell ${inactive ? "inactive" : ""} ${isToday ? "today" : ""}`}
              aria-current={isToday ? "date" : undefined}
            >
              {day}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="wrapper" role="main" aria-label="결혼식 청첩장">

      {/* 메인 날짜 및 이름 */}
      <section aria-labelledby="date-title">
        <h1 className="date-large" id="date-title">02 / 28</h1>
        <p className="name">길동 그리고 순신</p>
        <p className="save-the-date">SAVE THE DATE</p>
      </section>

      {/* 배경 이미지 */}
      <section className="image-box" aria-label="배경 이미지">
        <img src="./images/14.jpg" alt="초원이 펼쳐진 자연 풍경 일러스트" />
      </section>

      {/* 결혼식 일정 */}
      <section aria-labelledby="schedule-title">
        <p className="schedule" id="schedule-title">
          2026.02.28 SAT AM 11:30<br />
          빌라드지디 논현
        </p>
      </section>

      {/* 2월 달력 */}
      <Calendar2026Feb />
      
    </main>
  );
}

export default App;
