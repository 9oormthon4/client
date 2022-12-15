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

const OptionHash = {
  optionOne: 1,
  optionTwo: 2,
  optionThree: 3,
  optionFour: 4
}

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

  const divideWord = (word: string) => {
    return word.split(/(<br\/>)|(\\n)|(<br>)/gi).map((v) => {`${<><p>ddddd</p><p>dsadf</p></>}`});
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
            {
              data.questions[id-1]?.optionOne.replace(/br/, '') === data.questions[id-1]?.optionOne ?
               <ButtonAnswer lineHeight={'27.54px'} backgroundColor={Color.orange} fontSize={'22px'} id={1} onClick={() => {
                const curAnswerList = [...answers];
                // curAnswerList[curAnswerList.length] = {
                //   "userId": requestId.userId,
                //   "questionId": id,
                //   "answerToQuestion": 1
                // };
                // dispatch(answerActions.setAnswer({responses: curAnswerList}));
                moveRouter();
              } }>{`${data.questions[id-1]?.optionOne}`}</ButtonAnswer>
              :
               <ButtonAnswer lineHeight={'21.91px'} backgroundColor={Color.orange} fontSize={'17.5px'} id={1} onClick={() => {
                const curAnswerList = [...answers];
                // curAnswerList[curAnswerList.length] = {
                //   "userId": requestId.userId,
                //   "questionId": id,
                //   "answerToQuestion": 1
                // };
                // dispatch(answerActions.setAnswer({responses: curAnswerList}));
                moveRouter();
              } }>
                {data.questions[id-1]?.optionOne.split('<br>').map((item:any) => <p key={OptionHash.optionOne}>{item}</p>)}
                </ButtonAnswer>
              }
          </ButtonWrapper>
          <ButtonWrapper>

              {
              data.questions[id-1]?.optionTwo.replace(/br/, '') === data.questions[id-1]?.optionTwo ?
               <ButtonAnswer lineHeight={'21.91px'} backgroundColor={Color.orange} fontSize={'22px'} id={2} onClick={() => {
            const curAnswerList = [...answers];
            // curAnswerList[curAnswerList.length] = {
            //   "userId": requestId.userId,
            //   "questionId": id,
            //   "answerToQuestion": 2
            // };
            // dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>{`${data.questions[id-1]?.optionTwo}`}
          </ButtonAnswer>
              :
               <ButtonAnswer lineHeight={'27.54px'} backgroundColor={Color.orange} fontSize={'17.5px'} id={1} onClick={() => {
                const curAnswerList = [...answers];
                // curAnswerList[curAnswerList.length] = {
                //   "userId": requestId.userId,
                //   "questionId": id,
                //   "answerToQuestion": 1
                // };
                // dispatch(answerActions.setAnswer({responses: curAnswerList}));
                moveRouter();
              } }>
                {data.questions[id-1]?.optionTwo.split('<br>').map((item:any) => <p key={OptionHash.optionTwo}>{item}</p>)}
                </ButtonAnswer>
              }

            </ButtonWrapper>
          <ButtonWrapper>

              {
              data.questions[id-1]?.optionThree.replace(/br/, '') === data.questions[id-1]?.optionThree ?
               <ButtonAnswer lineHeight={'27.54px'} backgroundColor={Color.orange} fontSize={'22px'} id={3} onClick={() => {
            const curAnswerList = [...answers];
            // curAnswerList[curAnswerList.length] = {
            //   "userId": requestId.userId,
            //   "questionId": id,
            //   "answerToQuestion": 3
            // };
            // dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>{data.questions[id-1]?.optionThree}</ButtonAnswer>
              :
               <ButtonAnswer lineHeight={'21.91px'} backgroundColor={Color.orange} fontSize={'17.5px'} id={3} onClick={() => {
            const curAnswerList = [...answers];
            // curAnswerList[curAnswerList.length] = {
            //   "userId": requestId.userId,
            //   "questionId": id,
            //   "answerToQuestion": 3
            // };
            // dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>
            {data.questions[id-1]?.optionThree.split('<br>').map((item:any) => <p key={OptionHash.optionThree}>{item}</p>)}
            </ButtonAnswer>
              }

            
          
          </ButtonWrapper>

              {
              data.questions[id-1]?.optionFour.replace(/br/, '') === data.questions[id-1]?.optionFour ?
               <ButtonAnswer lineHeight={'27.54px'} backgroundColor={Color.orange} fontSize={'22px'} id={3} onClick={() => {
            const curAnswerList = [...answers];
            // curAnswerList[curAnswerList.length] = {
            //   "userId": requestId.userId,
            //   "questionId": id,
            //   "answerToQuestion": 3
            // };
            // dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>{data.questions[id-1]?.optionFour}</ButtonAnswer>
              :
               <ButtonAnswer lineHeight={'21.91px'} backgroundColor={Color.orange} fontSize={'17.5px'} id={3} onClick={() => {
            const curAnswerList = [...answers];
            // curAnswerList[curAnswerList.length] = {
            //   "userId": requestId.userId,
            //   "questionId": id,
            //   "answerToQuestion": 3
            // };
            // dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>
            {data.questions[id-1]?.optionFour.split('<br>').map((item:any) => <p key={OptionHash.optionFour}>{item}</p>)}
            </ButtonAnswer>
              }
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
  background-color: ${Color.green}
`;

const QuestionType = styled.div`
  margin-top: 70px;
  font-weight: 700;
  font-size: 22px;
  color: ${Color.white};
  line-height: 27.54px;
`

const TopMargin = styled.div`
  margin-top: 270px;
`

const ButtonWrapper = styled.div`
  margin-bottom: 13px;
`

export default SurveyDetail;
