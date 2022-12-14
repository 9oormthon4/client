import KakaoShare from '@/components/common/KakaoShare'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>어드레감디</title>
        <meta name="description" content="당신의 여행이 제주를 아프지 않게 만들도록" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>메인페이지
          <KakaoShare />
        </div>
      </main>

      {/* <footer>
      </footer> */}
    </div>
  )
}
