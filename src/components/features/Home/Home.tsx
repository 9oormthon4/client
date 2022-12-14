import Button from "@/components/common/Button";
import { Description, Layout, StatisticDescription, Title, Wrapper } from "./Home.styled";
import {useRouter} from 'next/router'

const HomeLayout = () => {
  const router = useRouter();
  
  return (
    <Layout>
      <Wrapper>
        <Description>제주도 환경 오염 테스트</Description>
        <Title>어드레감디</Title>
        <StatisticDescription>지금까지 ㅇㅇㅇ명이 나무를 심었어요!</StatisticDescription>
        <Button onClick={()=>router.push('/survey/1')}>출발하기</Button>
      </Wrapper>
    </Layout>
    )
}

export default HomeLayout;