import React, { useEffect } from "react";

function ShareButton() {
  useEffect(() => {
    // 카카오톡 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("91e36f4d5920813845d6ebe0ea0c48f6"); // 카카오 JS 키
    }
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "저희 결혼합니다!",
          description: "함께 축복해주시면 감사하겠습니다.",
          imageUrl: "https://yourdomain.com/images/01.jpg", // 대표 이미지 URL
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  return (
    <div className="section" style={{ textAlign: "center" }}>
      <button className="share-button" onClick={shareKakao}>
        카카오톡으로 공유하기
      </button>
    </div>
  );
}

export default ShareButton;
