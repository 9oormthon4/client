import { getScoreByUserId } from "@/api/survey";
import Chip from "@/components/common/Chip";
import { Container, Layout } from "@/components/common/Layout/Layout";
import Loading from "@/components/common/Loading";
import { useSelector } from "@/store";
import { useEffect, useState } from "react";
import Cost from "./Cost";
import Opinion from "./Opinion";
import Plant from "./Plant";
import { ButtonWrapper, TopWrapper, Wrapper } from "./Result.styled";
import ScoreBoard from "./Score";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import ButtonAnswer from "@/components/common/ButtonAnswer";
import Color from "@/components/common/Color";
import Button from "@/components/common/Button";
import Button2 from "@/components/common/Button2";
import Button3 from "@/components/common/Button3";

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

interface ResultProps {
  idd: number;
}

const Result: React.FC = () => {
  const [result, setResult] = useState<ScoreResultType>();

  let userId = useSelector((state) => state.requestId.userId);

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
          const saveConfirm = window.confirm("이미지를 저장하시겠습니까?")
          if(saveConfirm === true){
          saveAs(blob, 'download.png');
          }
      })
  }

const shareButton = () => {
  window.Kakao.Link.sendDefault({
    objectType: 'text',
    text: '🍊어드레감디🍊',
    link: {
      webUrl: `https://adregamdy.vercel.app/${userId}`,
      mobileWebUrl: `https://adregamdy.vercel.app/`,
    },
    serverCallbackArgs: {
      key: userId, 
    },
  });
}

const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
};

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
        <ButtonWrapper>
        {/* <Button onClick={shareButton}  backgroundColor={Color.orange} color={Color.white}>내 점수 자랑하기</Button> */}
       <Button3 onClick={() => handleCopyClipBoard('https://adregamdy.vercel.app/')} backgroundColor={Color.orange} color={Color.black}>친구들과 같이하기</Button3>
       <Button2 onClick={onDownloadBtn} backgroundColor={Color.white} color={Color.orange} ><img src="/download.png" height="36px" width="36px"></img></Button2>
        </ButtonWrapper>
        </>)
        
        : <Loading />}
        
      </Container>
    </Layout>
  );
}

export default Result;
