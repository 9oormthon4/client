import Button from "@/components/common/Button";
import { ButtonWrapper, Description, LogoImage, Wrapper } from "./Home.styled";
import {useRouter} from 'next/router'
import { Layout } from "@/components/common/Layout";
import useQuestionList from "@/hooks/useQuestionList";
import { questionActions } from "@/store/question";
import { useDispatch } from 'react-redux';
import StatisticDescription from "@/components/common/StatisticDescription";
import { requestIdActions } from "@/store/requestId";
import { getRequestId } from "@/api/survey";
import { Container } from "@/components/common/Layout/Layout";
import Color from "@/components/common/Color";
import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "@/api/question";

const HomeLayout = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const {data: questions} = useQuery(['questionList'], getQuestions )

  // const { isLoading, data, isError, error } = useQuestionList();


   console.log(questions)

  const handleQestionData = async () => {
    // dispatch(questionActions.setQuestions(data?.data?.questions!));
    // dispatch(questionActions.setTotalQuestionCount(data?.data?.totalQuestionCount!));
  };

  const handleRequestId = async () => {
    getRequestId().then((result) => {
      dispatch(requestIdActions.setUserId(result?.data?.userId!));
      dispatch(requestIdActions.setUserCode(result?.data?.userCode!));
    })
  }

  // const getRequestId = () => {
    // getQuestions().then((data) => {
    //   dispatch(questionActions.setQuestions(data?.data));
    //   dispatch(questionActions.setTotalQuestionCount(data.data.));
    // })
  // }

  // useEffect(() => {
    // getData();
    // console.log(isLoading, data)
  // }, [])

  return (
    <Layout>
      <Container>
        <Wrapper>
          <Description>아름다운 제주의 환경을 보호하고<br />제주에 나무를 심어보세요!</Description>
          <LogoImage src="/logo.gif" alt="어드레감디 로고 이미지" />
          <ButtonWrapper>
            <Button color={Color.white} backgroundColor={Color.green} onClick={() => {
                handleQestionData().then(() => {
                  handleRequestId().then(()=>{
                    // console.log(questions)
                  router.push('/survey/1');
                });
              })
            } }>출발하기</Button>
          </ButtonWrapper>
          <StatisticDescription />
        </Wrapper>
      </Container>
    </Layout>
    )
}

export default HomeLayout;
