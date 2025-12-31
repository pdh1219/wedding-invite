import React, { useEffect } from "react";

function Share() {
  useEffect(() => {
    // SDK 중복 로딩 방지
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.async = true;
      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init("91e36f4d5920813845d6ebe0ea0c48f6"); // ← 여기에 본인 JS key
        }
      };
      document.head.appendChild(script);
    } else {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("91e36f4d5920813845d6ebe0ea0c48f6"); // ← 여기에 본인 JS key
      }
    }
  }, []);

  // 공유 함수
  const handleShare = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "성윤♥대희, 2월 28일 결혼해요 💍",
        description: "빌라드지디 논현 · AM 11:30",
        imageUrl: "https://pdh1219.github.io/wedding-invite/images/357.jpg", // 원하는 이미지 URL 입력
        link: {
          mobileWebUrl: 'https://pdh1219.github.io/wedding-invite/',
          webUrl: 'https://pdh1219.github.io/wedding-invite/',
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: 'https://pdh1219.github.io/wedding-invite/',
            webUrl: 'https://pdh1219.github.io/wedding-invite/',
          },
        },
      ],
    });
  };

  return (
    <div className="share-wrapper" style={{ textAlign: "center", margin: "30px 0" }}>
      <button
        onClick={handleShare}
        className="toggle-account-btn"
      >
        카카오톡 공유하기
      </button>
    </div>
  );
}

export default Share;