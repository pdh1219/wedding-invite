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
            <span className="account-row">
              <strong>하나은행 02913241889</strong>
              <button
                className="copy-btn-mini"
                onClick={() => {
                  navigator.clipboard.writeText("하나은행 02913241889");
                  alert("신랑측 계좌번호가 복사되었습니다.");
                }}
                aria-label="계좌번호 복사"
              >
                복사
              </button>
            </span>
            <br />
            예금주 : 김문태
          </p>
          <p className="account-info">
            <span className="account-row">
              <strong>케이뱅크 100149166673</strong>
              <button
                className="copy-btn-mini"
                onClick={() => {
                  navigator.clipboard.writeText("케이뱅크 100149166673");
                  alert("신랑측 계좌번호가 복사되었습니다.");
                }}
                aria-label="계좌번호 복사"
              >
                복사
              </button>
            </span>
            <br />
            예금주 : 김성윤
          </p>
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
            <span className="account-row">
              <strong>케이뱅크 100118753818</strong>
              <button
                className="copy-btn-mini"
                onClick={() => {
                  navigator.clipboard.writeText("케이뱅크 100118753818");
                  alert("신부측 계좌번호가 복사되었습니다.");
                }}
                aria-label="계좌번호 복사"
              >
                복사
              </button>
            </span>
            <br />
            예금주 : 박대희
          </p>
        </div>
      )}
    </section>
  );
}

export default AccountSection;
