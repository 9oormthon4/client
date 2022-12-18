import HomeLayout from '@/components/features/Home/Home';
import useQuestionList from '@/hooks/useQuestionList';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    };
  }, []);

  return (
    <>
      <Head>
        <title>어드레감디</title>
        <meta name="description" content="당신의 여행이 제주를 아프지 않게 만들도록" />
        <link rel="icon" href="logo.png" />
      </Head>

      <main>
        <HomeLayout />
      </main>
    </>
  );
}
