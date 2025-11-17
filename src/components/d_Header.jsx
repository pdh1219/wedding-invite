import React from "react";

function Header() {
  return (
    <div className="section header-section">
      <img
        src="./images/header.png"
        alt="헤더 이미지"
        className="header-original-image"
      />
      <img src="./images/greeting.png" alt="인삿말" />
    </div>
  );
}

export default Header;
