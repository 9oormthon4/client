import {
  Html, Head, Main, NextScript,
} from 'next/document';

const META_DATA = {
  title: '어드레감디',
  description: '여행일정 입력하고 제주 지켜주기',
  author: '어드레감디',
  image: 'logo.png',
};

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={META_DATA.description} />
        <meta name="keyword" content="어드레감디" />
        <meta name="author" content={META_DATA.author} />
        <meta property="og:site_name" content={META_DATA.title} />
        <meta property="og:description" content={META_DATA.description} />
        <meta property="og:title" content={META_DATA.title} />
        <meta property="og:image" content={META_DATA.image} />
        <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
