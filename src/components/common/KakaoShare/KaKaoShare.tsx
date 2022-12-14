import { useEffect } from "react";

const KakaoShare = () => {

  const handleKakaoShare = () => {
    const { Kakao, location } = window;
    Kakao.Link.sendScrap({
      requestUrl: 'https://adregamdy.vercel.app/',
    });
  };

  return <button onClick={handleKakaoShare}>카카오톡 공유하기</button>
}

export default KakaoShare;