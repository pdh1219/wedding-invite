import React from "react";

function Header() {
  return (
    <div className="section">
      {/* 시간 및 장소 3장 사진 */}
      <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
        <img src="./images/info1.jpg" alt="정보1" />
        <img src="./images/14.jpg" alt="정보2" />
        <img src="./images/info3.jpg" alt="정보3" />
      </div>
    </div>
  );
}

export default Header;
