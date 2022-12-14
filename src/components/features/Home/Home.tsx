import Button from "@/components/common/Button";
import { Description, StatisticDescription, Title, Wrapper } from "./Home.styled";
import {useRouter} from 'next/router'
import { Layout } from "@/components/common/Layout";
import useQuestionList from "@/hooks/useQuestionList";
import { useEffect } from "react";
import { getQuestions } from "@/api/question";
import { questionActions } from "@/store/question";
import { useDispatch } from 'react-redux';

const HomeLayout = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const { isLoading, data, isError, error } = useQuestionList();

  const handleQestionData = async () => {
    dispatch(questionActions.setQuestions(data?.data?.questions!));
    dispatch(questionActions.setTotalQuestionCount(data?.data?.totalQuestionCount!));
  };

  const getData = () => {
    // getQuestions().then((data) => {
    //   dispatch(questionActions.setQuestions(data?.data));
    //   dispatch(questionActions.setTotalQuestionCount(data.data.));
    // })
  }

  useEffect(() => {
    // getData();
    // console.log(isLoading, data)
  }, [])

  return (
    <Layout>
      <Wrapper>
        <Description>제주도 환경 오염 테스트</Description>
        <Title>어드레감디</Title>
        <StatisticDescription>지금까지 ㅇㅇㅇ명이 나무를 심었어요!</StatisticDescription>
        <Button onClick={()=>{
              handleQestionData().then(() => {
                router.push('/survey/1');
              });
        }}>출발하기</Button>
      </Wrapper>
    </Layout>
    )
}

export default HomeLayout;
