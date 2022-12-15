import type { NextPage } from 'next';
import { useEffect } from 'react';

import { Layout } from '@/components/common/Layout';
import ProgressBar from '@/components/common/ProgressBar';
import ButtonAnswer from '@/components/common/ButtonAnswer';
import styled from '@emotion/styled';
import { useSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { answerActions } from '@/store/answer';
import { useRouter } from 'next/router';
import { Container } from '@/components/common/Layout/Layout';
import Color from '@/components/common/Color';

type SurveyDetailProps = {
  id: number;
};

const SurveyDetail: NextPage<SurveyDetailProps> = ({ id }) => {
  const router = useRouter();
  
  const data = useSelector((state) => state.questions);

  const requestId = useSelector((state) => state.requestId);

  const totalQuestionCount = useSelector((state) => state.questions.totalQuestionCount)

  const dispatch = useDispatch();

  const answers = useSelector((state) => state.answer.responses);

  // console.log(id, data.questions[id])
  
  useEffect(() => {
    document.title = '어드레감디 | 설문';
  }, []);

  const moveRouter = () => {
    if(id < totalQuestionCount) {
      router.push(`/survey/${Number(id) + 1}`);
    } else {
      // POST
      router.push(`/result`);
    }
  }

  return (
    <Layout>
      <Container>
        <Wrapper>
          <ProgressBar id={id} total={totalQuestionCount} />
          <QuestionType>Q{id}. {data.questions[id-1]?.questionContent}</QuestionType>
          <TopMargin>
          </TopMargin>
          <ButtonWrapper>
            <ButtonAnswer backgroundColor={Color.green} fontSize={'23px'} id={1} onClick={() => {
            const curAnswerList = [...answers];
            // curAnswerList[curAnswerList.length] = {
            //   "userId": requestId.userId,
            //   "questionId": id,
            //   "answerToQuestion": 1
            // };
            // dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          } }>{data.questions[id-1]?.optionOne}</ButtonAnswer></ButtonWrapper>
          <ButtonWrapper>
            <ButtonAnswer backgroundColor={Color.green} fontSize={'23px'} id={2} onClick={() => {
            const curAnswerList = [...answers];
            // curAnswerList[curAnswerList.length] = {
            //   "userId": requestId.userId,
            //   "questionId": id,
            //   "answerToQuestion": 2
            // };
            // dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>{data.questions[id-1]?.optionTwo}</ButtonAnswer></ButtonWrapper>
          <ButtonWrapper>
            <ButtonAnswer backgroundColor={Color.green} fontSize={'23px'} id={3} onClick={() => {
            const curAnswerList = [...answers];
            // curAnswerList[curAnswerList.length] = {
            //   "userId": requestId.userId,
            //   "questionId": id,
            //   "answerToQuestion": 3
            // };
            // dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>{data.questions[id-1]?.optionThree}</ButtonAnswer></ButtonWrapper>
          <ButtonAnswer backgroundColor={Color.green} fontSize={'23px'} id={4} onClick={() => {
            const curAnswerList = [...answers];
            // curAnswerList[curAnswerList.length] = {
            //   "userId": requestId.userId,
            //   "questionId": id,
            //   "answerToQuestion": 4
            // };
            // dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>{data.questions[id-1]?.optionFour}</ButtonAnswer>
        </Wrapper>
      </Container>
    </Layout>
  );
};

SurveyDetail.getInitialProps = async ({ query }: any) => {
  const { id } = await query;
  return { id };
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.orange}
`;

const QuestionType = styled.div`
  margin-top: 70px;
  font-weight: 700;
  font-size: 22px;
  line-height: 27.54px;
`

const TopMargin = styled.div`
  margin-top: 270px;
`

const ButtonWrapper = styled.div`
  margin-bottom: 13px;
`

export default SurveyDetail;
