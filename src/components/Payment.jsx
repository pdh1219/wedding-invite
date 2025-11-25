import React, { useState } from "react";

function AccountSection() {
  const [openTarget, setOpenTarget] = useState(null); 
  // null | "groom" | "bride"

  const toggleSection = (target) => {
    setOpenTarget((prev) => (prev === target ? null : target));
  };

  return (
    <section className="account-section" aria-label="마음 전하기">
      <h2 className="account-title">마음 전하기</h2>
      <br />
      {/* 신랑 버튼 */}
      <button
        className={`toggle-account-btn ${openTarget === "groom" ? "active" : ""}`}
        onClick={() => toggleSection("groom")}
      >
        신랑에게 마음 전하는 곳
      </button>

      {/* 신랑 계좌 정보 */}
      {openTarget === "groom" && (
        <div className="account-box fade-account">
          <p className="account-role">신랑측 계좌</p>
          <p className="account-info">
            <strong>하나은행 123-456789-01-001</strong><br />
            예금주 : 홍길동
          </p>

          <button
            className="copy-btn"
            onClick={() => {
              navigator.clipboard.writeText("하나은행 123-456789-01-001");
              alert("신랑측 계좌번호가 복사되었습니다.");
            }}
          >
            복사하기
          </button>
        </div>
      )}

      {/* 신부 버튼 */}
      <button
        className={`toggle-account-btn ${openTarget === "bride" ? "active" : ""}`}
        onClick={() => toggleSection("bride")}
      >
        신부에게 마음 전하는 곳
      </button>

      {/* 신부 계좌 정보 */}
      {openTarget === "bride" && (
        <div className="account-box fade-account">
          <p className="account-role">신부측 계좌</p>
          <p className="account-info">
            <strong>국민은행 987-654321-00-002</strong><br />
            예금주 : 이순신
          </p>

          <button
            className="copy-btn"
            onClick={() => {
              navigator.clipboard.writeText("국민은행 987-654321-00-002");
              alert("신부측 계좌번호가 복사되었습니다.");
            }}
          >
            복사하기
          </button>
        </div>
      )}
    </section>
  );
}

export default AccountSection;
