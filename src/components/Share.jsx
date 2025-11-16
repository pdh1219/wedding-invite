import React, { useEffect } from "react";


function ShareButton() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("개발자_키"); // 카카오 JS 키
    }
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "저희 결혼합니다!",
          description: "함께 축복해주시면 감사하겠습니다.",
          imageUrl: "https://yourdomain.com/images/01.jpg",
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
    <div className="section">
      <button
        className="message-buttons"
        onClick={shareKakao}
      >
        카카오톡으로 공유하기
      </button>
    </div>
  );
}

export default ShareButton;
