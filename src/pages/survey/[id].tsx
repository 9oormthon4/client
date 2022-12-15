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
import useQuestionList from '@/hooks/useQuestionList';
import { postAnswer } from '@/api/survey';

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
  
  // const data = useSelector((state) => state.questions);

  const { isLoading, data, isError, error } = useQuestionList();

  const requestId = useSelector((state) => state.requestId);

  // const totalQuestionCount = useSelector((state) => state.questions.totalQuestionCount)

  const dispatch = useDispatch();

  const answers = useSelector((state) => state.answer.responses);

  // console.log(id, data.questions[id])
  
  useEffect(() => {
    document.title = '어드레감디 | 설문';
  }, []);

  // useEffect(() => {
  //   if(data.questions.length===0 || id>totalQuestionCount) {
  //     router.push('/');
  //   }
  // }, []);

  // console.log(data, '*****')

  const moveRouter = () => {
    if(id < data?.data.totalQuestionCount!) {
      router.push(`/survey/${Number(id) + 1}`);
    } 
    if (answers.length === data?.data.totalQuestionCount!) {
      postAnswer({responses: answers}).then(() => {
        router.push('/result');
      })
    }
  }

  // console.log({data}, '.....', id, data?.data.totalQuestionCount!)

  return (
    <Layout>
      <Container>
        <Wrapper>
          <ProgressBar id={id} total={data?.data.totalQuestionCount!} />
          <QuestionType>Q{id}. {data?.data.questions[id-1]?.questionContent}</QuestionType>
          <QuestionImg src={`${data?.data.questions[id-1].questionImageUrl}`}  />
          {/* <TopMargin>
          </TopMargin> */}
          <ButtonWrapper>
            {
              data?.data.questions[id-1]?.optionOne.replace(/br/, '') === data?.data.questions[id-1]?.optionOne ?
               <ButtonAnswer lineHeight={'27.54px'} backgroundColor={Color.orange} fontSize={'22px'} id={1} onClick={() => {
                const curAnswerList = [...answers];
                curAnswerList[curAnswerList.length] = {
                  "userId": requestId.userId,
                  "questionId": Number(id),
                  "answerToQuestion": 1
                };
                dispatch(answerActions.setAnswer({responses: curAnswerList}));
                moveRouter();
              } }>{`${data?.data.questions[id-1]?.optionOne}`}</ButtonAnswer>
              :
               <ButtonAnswer lineHeight={'21.91px'} backgroundColor={Color.orange} fontSize={'17.5px'} id={1} onClick={() => {
                const curAnswerList = [...answers];
                curAnswerList[curAnswerList.length] = {
                  "userId": requestId.userId,
                  "questionId": Number(id),
                  "answerToQuestion": 1
                };
                dispatch(answerActions.setAnswer({responses: curAnswerList}));
                moveRouter();
              } }>
                {data?.data.questions[id-1]?.optionOne.split('<br>').map((item:any) => <p key={item.charAt(0) + OptionHash.optionOne}>{item}</p>)}
                </ButtonAnswer>
              }
          </ButtonWrapper>
          <ButtonWrapper>

              {
              data?.data.questions[id-1]?.optionTwo.replace(/br/, '') === data?.data.questions[id-1]?.optionTwo ?
               <ButtonAnswer lineHeight={'27.54px'} backgroundColor={Color.orange} fontSize={'22px'} id={2} onClick={() => {
            const curAnswerList = [...answers];
            curAnswerList[curAnswerList.length] = {
              "userId": requestId.userId,
              "questionId": Number(id),
              "answerToQuestion": 2
            };
            dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>{`${data?.data.questions[id-1]?.optionTwo}`}
          </ButtonAnswer>
              :
               <ButtonAnswer lineHeight={'21.91px'} backgroundColor={Color.orange} fontSize={'17.5px'} id={2} onClick={() => {
                const curAnswerList = [...answers];
                curAnswerList[curAnswerList.length] = {
                  "userId": requestId.userId,
                  "questionId": Number(id),
                  "answerToQuestion": 2
                };
                dispatch(answerActions.setAnswer({responses: curAnswerList}));
                moveRouter();
              } }>
                {data?.data.questions[id-1]?.optionTwo.split('<br>').map((item:any) => <p key={item.charAt(0) + OptionHash.optionTwo}>{item}</p>)}
                </ButtonAnswer>
              }

            </ButtonWrapper>
          <ButtonWrapper>

              {
              data?.data.questions[id-1]?.optionThree.replace(/br/, '') === data?.data.questions[id-1]?.optionThree ?
               <ButtonAnswer lineHeight={'27.54px'} backgroundColor={Color.orange} fontSize={'22px'} id={3} onClick={() => {
            const curAnswerList = [...answers];
            curAnswerList[curAnswerList.length] = {
              "userId": requestId.userId,
              "questionId": Number(id),
              "answerToQuestion": 3
            };
            dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>{data?.data.questions[id-1]?.optionThree}</ButtonAnswer>
              :
               <ButtonAnswer lineHeight={'21.91px'} backgroundColor={Color.orange} fontSize={'17.5px'} id={3} onClick={() => {
            const curAnswerList = [...answers];
            curAnswerList[curAnswerList.length] = {
              "userId": requestId.userId,
              "questionId": Number(id),
              "answerToQuestion": 3
            };
            dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>
            {data?.data.questions[id-1]?.optionThree.split('<br>').map((item:any) => <p key={item.charAt(0) + OptionHash.optionThree}>{item}</p>)}
            </ButtonAnswer>
              }

            
          
          </ButtonWrapper>

              {
              data?.data.questions[id-1]?.optionFour.replace(/br/, '') === data?.data.questions[id-1]?.optionFour ?
               <ButtonAnswer lineHeight={'27.54px'} backgroundColor={Color.orange} fontSize={'22px'} id={4} onClick={() => {
            const curAnswerList = [...answers];
            curAnswerList[curAnswerList.length] = {
              "userId": requestId.userId,
              "questionId": Number(id),
              "answerToQuestion": 4
            };
            dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>{data?.data.questions[id-1]?.optionFour}</ButtonAnswer>
              :
               <ButtonAnswer lineHeight={'21.91px'} backgroundColor={Color.orange} fontSize={'17.5px'} id={4} onClick={() => {
            const curAnswerList = [...answers];
            curAnswerList[curAnswerList.length] = {
              "userId": requestId.userId,
              "questionId": Number(id),
              "answerToQuestion": 4
            };
            dispatch(answerActions.setAnswer({responses: curAnswerList}));
            moveRouter();
          }}>
            {data?.data.questions[id-1]?.optionFour.split('<br>').map((item:any) => <p key={item.charAt(0) + OptionHash.optionFour}>{item}</p>)}
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
  // height: 100%;
  height: 100vh ;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.green}
`;

const QuestionType = styled.div`
  // margin-top: 70px;
  margin-top: 6vh;
  font-weight: 700;
  font-size: 22px;
  color: ${Color.white};
  line-height: 27.54px;
  margin-bottom: 30vh;
`

const ButtonWrapper = styled.div`
  margin-bottom: 13px;
`

const QuestionImg = styled.img`
  width: 230px;
  height: 230px;
  margin-top: 20vh;
  position: absolute;
`

export default SurveyDetail;
