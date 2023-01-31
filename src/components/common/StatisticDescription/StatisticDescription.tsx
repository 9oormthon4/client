import { getInnerParticipantCount } from '@/api/survey';
import { useEffect, useState } from 'react';
import { Layout } from './StatisticDescription.styled';

const StatisticDescription = () => {
  const [totalParticipantCount, setTotalParticipantCount] = useState(0);

  const getTotalParticipantCount = () => {
    getInnerParticipantCount().then(result => {
      setTotalParticipantCount(result.data.totalParticipantCount);
    });
  };

  useEffect(() => {
    // getTotalParticipantCount();
    // if (!isLoading && data ) {
    //   setTotalParticipantCount(data.)
    // }
  }, []);

  return (
    <Layout>
      {/* {totalParticipantCount !== 0 ? (
        <>지금까지 {totalParticipantCount.toLocaleString()}명이 나무를 심었어요!</>
      ) : (
        <>
          <br />
        </>
      )} */}
    </Layout>
  );
};

export default StatisticDescription;
