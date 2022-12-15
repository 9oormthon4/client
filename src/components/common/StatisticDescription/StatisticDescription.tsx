import useParticipantCount from "@/hooks/useParticipantCount";
import { useEffect, useState } from "react";
import { Layout } from "./StatisticDescription.styled"

const StatisticDescription = () => {
  const { isLoading, data, isError, error } = useParticipantCount();

  const [totalParticipantCount, setTotalParticipantCount] = useState(0);

  useEffect(() => {
    if (!isLoading && data ) {
      setTotalParticipantCount(data?.data?.totalParticipantCount!)
    }
}, [])

console.log(data?.data, totalParticipantCount)

  return (
    <Layout>{!isLoading && data ? 

      // totalParticipantCount!==0 ? 
      //   (<>지금까지 {totalParticipantCount}명이 나무를 심었어요!</>) :  

    (<>지금까지 {data?.data?.totalParticipantCount}명이 나무를 심었어요!</>) : <></>}
    
    </Layout>
  )
}

export default StatisticDescription
