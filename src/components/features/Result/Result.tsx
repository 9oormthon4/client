import { getScoreByUserId } from "@/api/survey";
import { Container, Layout } from "@/components/common/Layout/Layout";
import { useSelector } from "@/store";
import { useEffect, useState } from "react";
import Cost from "./Cost";
import { Wrapper } from "./Result.styled";
import ScoreBoard from "./Score";

export interface ScoreResultType {
  "economicCost": number,
  "greenScore": number,
  "greenScoreRank": number,
  "economicCostBreakDown": {
    "sky": {
      "score": number,
      "commentary": string
    },
    "land": {
      "score": number,
      "commentary": string
    },
    "ocean": {
      "score": number,
      "commentary": string
    }
  }
}

const Result = () => {
  const [result, setResult] = useState<ScoreResultType>();

  const userId = useSelector((state) => state.requestId.userId);

  const getResult = () => {
    getScoreByUserId(userId).then((result) => {
      setResult(result.data);
    })
  }

  useEffect(() => {
    getResult();
  }, [])

  return (
    <Layout>
      <Container>
        <Wrapper>
          {result ? <ScoreBoard {...result} /> : <></>}
        </Wrapper>
        <Wrapper>
          {result ? <Cost {...result} /> : <></>}
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default Result;
