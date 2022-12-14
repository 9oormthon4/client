import type { NextPage } from 'next';
import { useEffect } from 'react';

import { Layout } from '@/components/common/Layout';
import ProgressBar from '@/components/common/ProgressBar';
import Button from '@/components/common/Button';
import styled from '@emotion/styled';
import { useSelector } from '@/store';

type SurveyDetailProps = {
  id: number;
};

const SurveyDetail: NextPage<SurveyDetailProps> = ({ id }) => {
  const data = useSelector((state) => state.questions);

  console.log(data)
  
  useEffect(() => {
    document.title = '어드레감디 | 설문';
  }, []);

  return (
    <Layout>
      <ProgressBar id={id} />
      <Question>{data.questions[id]?.questionContent}</Question>
      <TopMargin>
      </TopMargin>
        <ButtonWrapper><Button onClick={() => console.log()}>{data.questions[id]?.optionOne}</Button></ButtonWrapper>
      <ButtonWrapper><Button onClick={() => console.log()}>{data.questions[id]?.optionTwo}</Button></ButtonWrapper>
      <ButtonWrapper><Button onClick={() => console.log()}>{data.questions[id]?.optionThree}</Button></ButtonWrapper>
      <Button onClick={() => console.log()}>{data.questions[id]?.optionFour}</Button>
    </Layout>
  );
};

SurveyDetail.getInitialProps = async ({ query }: any) => {
  const { id } = await query;
  return { id };
};

const Question = styled.div`
  margin-top: 70px;
`

const TopMargin = styled.div`
  margin-top: 270px;
`

const ButtonWrapper = styled.div`
  margin-bottom: 13px;
`

export default SurveyDetail;
