import type { NextPage } from 'next';
import { useEffect } from 'react';

import { Layout } from '@/components/common/Layout';
import ProgressBar from '@/components/common/ProgressBar';

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
      <div>설문 {id}쪽</div>
    </Layout>
  );
};

SurveyDetail.getInitialProps = async ({ query }: any) => {
  const { id } = await query;
  return { id };
};

export default SurveyDetail;
