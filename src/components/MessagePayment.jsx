import React, { useState } from "react";

function MessagePayment() {
  const accounts = [
    { side: "신랑 측", bank: "국민은행", account: "123-456-7890", holder: "홍길동" },
    { side: "신부 측", bank: "신한은행", account: "987-654-3210", holder: "김철수" },
  ];

  const [modalAccount, setModalAccount] = useState(null); // 현재 모달에 표시할 계좌
  const [copied, setCopied] = useState(false);            // 복사 완료 상태

  const openModal = (account) => {
    setModalAccount(account);
    setCopied(false);
  };

  const closeModal = () => setModalAccount(null);

  const copyToClipboard = (account) => {
    navigator.clipboard.writeText(account).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center", color: "#000" }}>마음 전하기</h3>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap"
      }}>
        {accounts.map((acc, idx) => (
          <button
            key={idx}
            onClick={() => openModal(acc)}
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
            {acc.side} 마음 전하기
          </button>
        ))}
      </div>

      {/* 모달 */}
      {modalAccount && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90%",
              maxWidth: "320px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              textAlign: "center",
              position: "relative"
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>{modalAccount.side}</h4>
            <p style={{ margin: "5px 0" }}>{modalAccount.bank}</p>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>{modalAccount.account}</p>
            <p style={{ margin: "5px 0" }}>{modalAccount.holder}</p>

            <button
              onClick={() => copyToClipboard(modalAccount.account)}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: copied ? "#28a745" : "#000",
                color: "#fff",
                cursor: "pointer",
                fontSize: "14px"
              }}
            >
              {copied ? "복사 완료" : "계좌 복사"}
            </button>

            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                cursor: "pointer"
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagePayment;
