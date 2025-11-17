import React from "react";

function Payment() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다!");
  };

  return (
    <div className="section">
      <h3>마음 전하기</h3>

      <p>신랑 계좌: 123-4567-8901 (OO은행)</p>
      <button onClick={() => copyToClipboard("123-4567-8901")}>복사하기</button>

      <p style={{ marginTop: "15px" }}>신부 계좌: 987-6543-2100 (OO은행)</p>
      <button onClick={() => copyToClipboard("987-6543-2100")}>복사하기</button>
    </div>
  );
}

export default Payment;
