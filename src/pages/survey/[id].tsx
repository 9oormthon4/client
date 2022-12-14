import type { NextPage } from 'next';
import { useEffect } from 'react';

import styled from '@emotion/styled';

type props = {
  id: number;
};

const SurveyDetail: NextPage<props> = ({ id }) => {
  useEffect(() => {
    document.title = '어드레감디 | 설문';
  }, []);

  return (
    <div>설문페이지</div>
  );
};

SurveyDetail.getInitialProps = async ({ query }: any) => {
  const { id } = await query;
  return { id };
};

export default SurveyDetail;
