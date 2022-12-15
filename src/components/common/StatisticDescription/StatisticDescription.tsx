import useParticipantCount from "@/hooks/useParticipantCount";
import { Layout } from "./StatisticDescription.styled"

const StatisticDescription = () => {
  const { isLoading, data, isError, error } = useParticipantCount();

  return (
    <Layout>{!isLoading && data ? <>지금까지 {data?.data?.totalParticipantCount}명이 나무를 심었어요!</> : <></>}</Layout>
  )
}

export default StatisticDescription