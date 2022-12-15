import { getScoreByUserId } from "@/api/survey";
import Chip from "@/components/common/Chip";
import { Container, Layout } from "@/components/common/Layout/Layout";
import Loading from "@/components/common/Loading";
import { useSelector } from "@/store";
import { useEffect, useState } from "react";
import Cost from "./Cost";
import Opinion from "./Opinion";
import Plant from "./Plant";
import { TopWrapper, Wrapper } from "./Result.styled";
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
        {result ? 
        
        (<>
        <Wrapper>
          <TopWrapper></TopWrapper>
          {result ? <ScoreBoard {...result} /> : <></>}
        </Wrapper>
        <Wrapper>
          {result ? <Cost {...result} /> : <></>}
        </Wrapper>
        <Wrapper>
          {result ? <Opinion {...result} /> : <></>}
        </Wrapper>
        <Plant {...result} />
        </>)
        
        : <Loading />}
        
      </Container>
    </Layout>
  );
}

export default Result;
