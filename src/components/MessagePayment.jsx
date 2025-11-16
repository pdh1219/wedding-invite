import React, { useState } from "react";

function MessagePayment() {
  const accounts = [
    { side: "신랑 측", bank: "국민은행", account: "123-456-7890", holder: "홍길동" },
    { side: "신부 측", bank: "신한은행", account: "987-654-3210", holder: "김철수" },
  ];

  const [modalAccount, setModalAccount] = useState(null);
  const [copied, setCopied] = useState(false);

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
    <div className="section">
      <h3 style={{ color: "#7B5E57" }}>마음 전하기</h3>

      <div className="message-buttons">
        {accounts.map((acc, idx) => (
          <button
            key={idx}
            className="common-button"
            onClick={() => openModal(acc)}
          >
            {acc.side} 마음 전하기
          </button>
        ))}
      </div>

      {modalAccount && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>{modalAccount.side}</h4>
            <p>{modalAccount.bank}</p>
            <p style={{ fontWeight: "bold" }}>{modalAccount.account}</p>
            <p>{modalAccount.holder}</p>

            <button
              className={`copy-button ${copied ? "copied" : ""}`}
              onClick={() => copyToClipboard(modalAccount.account)}
            >
              {copied ? "복사 완료" : "계좌 복사"}
            </button>

            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagePayment;
