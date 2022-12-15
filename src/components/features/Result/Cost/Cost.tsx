import Chip from "@/components/common/Chip";
import { ScoreResultType } from "../Result";
import { CostText, Description } from "./Cost.styled";

const Cost = (result: ScoreResultType) => {
  return (
    <>
      <Chip>제주가 부담해야하는 환경보전비용은</Chip>
      <CostText>{result.economicCost}</CostText>
      <Description>제주를 찾는 1200만명의 여행자로 인한 비용은<br />약 600억원 이에요</Description>
    </>
  )
}

export default Cost;