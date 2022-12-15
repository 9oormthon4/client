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
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import ButtonAnswer from "@/components/common/ButtonAnswer";
import Color from "@/components/common/Color";
import Button from "@/components/common/Button";

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

    const onDownloadBtn = ()=>{
        domtoimage
        .toBlob(document.querySelector("#download") as HTMLElement)
        .then((blob)=>{
            // const saveConfirm = window.confirm("이미지를 저장하시겠습니까?")
            // if(saveConfirm === true){
            saveAs(blob, 'download.png');
            // }
        })
    }

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
        <Button onClick={onDownloadBtn}  backgroundColor={Color.orange} color={Color.white}>내 점수 자랑하기</Button>
        </>)
        
        : <Loading />}
        
      </Container>
    </Layout>
  );
}

export default Result;
