import type { NextPage } from 'next';
import { useEffect } from 'react';

import { Layout } from '@/components/common/Layout';
import ProgressBar from '@/components/common/ProgressBar';
import Button from '@/components/common/Button';
import styled from '@emotion/styled';

type SurveyDetailProps = {
  id: number;
};

const SurveyDetail: NextPage<SurveyDetailProps> = ({ id }) => {
  useEffect(() => {
    document.title = '어드레감디 | 설문';
  }, []);

  return (
    <Layout>
      <ProgressBar id={id} />
      {/* <div>설문 {id}쪽</div> */}
      <Question>Q1. 여행기간이 어떻게 되시나요?</Question>
      <TopMargin>
        <ButtonWrapper><Button onClick={() => console.log()}>답변1</Button></ButtonWrapper>
      </TopMargin>
      <ButtonWrapper><Button onClick={() => console.log()}>답변2</Button></ButtonWrapper>
      <ButtonWrapper><Button onClick={() => console.log()}>답변3</Button></ButtonWrapper>
      <Button onClick={() => console.log()}>답변4</Button>
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
