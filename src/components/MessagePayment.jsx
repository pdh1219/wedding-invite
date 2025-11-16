import React, { useState } from "react";

function MessagePayment() {
  const accounts = [
    { side: "신랑 측", bank: "국민은행", account: "123-456-7890", holder: "홍길동" },
    { side: "신부 측", bank: "신한은행", account: "987-654-3210", holder: "김철수" },
  ];

  const [visible, setVisible] = useState({ groom: false, bride: false });
  const [copied, setCopied] = useState(""); // 최근 복사한 계좌 표시
  const [copiedButton, setCopiedButton] = useState(""); // 복사 버튼 색상 변경용

  const toggleAccount = (type) => {
    setVisible(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const copyToClipboard = (account) => {
    navigator.clipboard.writeText(account).then(() => {
      setCopied(account);
      setCopiedButton(account); // 버튼 색상 변경

      setTimeout(() => {
        setCopied("");        // 메시지 사라짐
        setCopiedButton("");  // 버튼 색상 원래대로
      }, 2000); // 2초 유지
    });
  };

  const renderAccount = (account) => (
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
      <strong>{account.side}</strong>
      <p>{account.bank}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span>{account.account}</span>
        <button
          onClick={() => copyToClipboard(account.account)}
          style={{
            marginLeft: "10px",
            padding: "4px 8px",
            fontSize: "12px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: copiedButton === account.account ? "#28a745" : "#000",
            color: "#fff",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
        >
          {copiedButton === account.account ? "복사 완료" : "복사"}
        </button>
      </div>
      <p>{account.holder}</p>
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", color: "#000" }}>마음 전하기</h3>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px"
      }}>
        {/* 신랑 측 */}
        <div style={{ textAlign: "center", width: "180px" }}>
          <button
            onClick={() => toggleAccount("groom")}
            style={{
              width: "180px",
              height: "50px",
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
          {visible.groom && renderAccount(accounts[0])}
        </div>

        {/* 신부 측 */}
        <div style={{ textAlign: "center", width: "180px" }}>
          <button
            onClick={() => toggleAccount("bride")}
            style={{
              width: "180px",
              height: "50px",
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
          {visible.bride && renderAccount(accounts[1])}
        </div>
      </div>

      {/* 복사 알림 */}
      {copied && (
        <div style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#000",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "20px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
          fontSize: "14px"
        }}>
          {copied} 계좌가 복사되었습니다!
        </div>
      )}
    </div>
  );
}

export default MessagePayment;
