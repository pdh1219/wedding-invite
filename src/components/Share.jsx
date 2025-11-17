import React, { useEffect } from "react";

function Share() {
  useEffect(() => {
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js";
      script.async = true;
      script.onload = () => {
        window.Kakao.init("개발자_키");
      };
      document.head.appendChild(script);
    } else {
      window.Kakao.init("개발자_키");
    }
  }, []);

  const shareKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "우리 결혼합니다",
        description: "예식에 초대합니다.",
        imageUrl: "https://your-image-url",
        link: {
          mobileWebUrl: "https://your-site-url",
          webUrl: "https://your-site-url",
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: "https://your-site-url",
            webUrl: "https://your-site-url",
          },
        },
      ],
    });
  };

  return (
    <div className="section">
      <button onClick={shareKakao}>카카오톡으로 공유하기</button>
    </div>
  );
}

export default Share;
