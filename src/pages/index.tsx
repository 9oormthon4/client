import HomeLayout from '@/components/features/Home/Home'
import Head from 'next/head'

export default function Home() {

  return (
    <div>
      <Head>
        <title>어드레감디</title>
        <meta name="description" content="당신의 여행이 제주를 아프지 않게 만들도록" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeLayout />
      </main>

      {/* <footer>
      </footer> */}
    </div>
  )
}
