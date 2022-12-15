import { getParticipantCount } from "@/api/survey";
import useParticipantCount from "@/hooks/useParticipantCount";
import { useEffect, useState } from "react";
import { Layout } from "./StatisticDescription.styled"

const StatisticDescription = () => {
  // const { isLoading, data, isError, error } = useParticipantCount();

  // const data = getParticipantCount();

  const [totalParticipantCount, setTotalParticipantCount] = useState(0);

  const getTotalParticipantCount = () => {
    getParticipantCount().then((result) => {
      console.log(result.data.totalParticipantCount)
      setTotalParticipantCount(result.data.totalParticipantCount);
    })
  }

  useEffect(() => {
    getTotalParticipantCount();
    // if (!isLoading && data ) {
    //   setTotalParticipantCount(data.)
    // }
}, [])

// console.log(data?.data, totalParticipantCount)

  return (
    <Layout>
      {totalParticipantCount!==0 ? <>지금까지 {totalParticipantCount}명이 나무를 심었어요!</> : <></>}
      
      {/* {data ? 

      // totalParticipantCount!==0 ? 
      //   (<>지금까지 {totalParticipantCount}명이 나무를 심었어요!</>) :  

    (<>지금까지 {data?.data?.totalParticipantCount}명이 나무를 심었어요!</>) : <></>} */}
    
    </Layout>
  )
}

export default StatisticDescription
