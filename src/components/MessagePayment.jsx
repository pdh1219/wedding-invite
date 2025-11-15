import React, { useState } from "react";

function MessagePayment() {
  const accounts = [
    { side: "신랑 측", bank: "국민은행", account: "123-456-7890", holder: "홍길동" },
    { side: "신부 측", bank: "신한은행", account: "987-654-3210", holder: "김철수" },
  ];

  const [visible, setVisible] = useState({ groom: false, bride: false });

  const toggleAccount = (type) => {
    setVisible(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", color: "#000" }}>마음 전하기</h3>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px"
      }}>
        {/* 신랑 측 버튼 */}
        <div style={{ textAlign: "center", width: "160px" }}>
          <button
            onClick={() => toggleAccount("groom")}
            style={{
              width: "160px",       // 고정 너비
              height: "50px",       // 고정 높이
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#000",
              color: "#fff",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            신랑 마음 전하기
          </button>
          {visible.groom && (
            <div
              style={{
                marginTop: "10px",
                padding: "15px",
                borderRadius: "10px",
                backgroundColor: "#fff4e6",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                color: "#000"
              }}
            >
              <strong>{accounts[0].side}</strong>
              <p>{accounts[0].bank}<br/>{accounts[0].account}</p>
              <p>{accounts[0].holder}</p>
            </div>
          )}
        </div>

        {/* 신부 측 버튼 */}
        <div style={{ textAlign: "center", width: "160px" }}>
          <button
            onClick={() => toggleAccount("bride")}
            style={{
              width: "160px",       // 고정 너비
              height: "50px",       // 고정 높이
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#000",
              color: "#fff",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            신부 마음 전하기
          </button>
          {visible.bride && (
            <div
              style={{
                marginTop: "10px",
                padding: "15px",
                borderRadius: "10px",
                backgroundColor: "#fff4e6",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                color: "#000"
              }}
            >
              <strong>{accounts[1].side}</strong>
              <p>{accounts[1].bank}<br/>{accounts[1].account}</p>
              <p>{accounts[1].holder}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessagePayment;
