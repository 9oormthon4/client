import Chip from "@/components/common/Chip";
import { useEffect, useRef, useState } from "react";
import { ScoreResultType } from "../Result";
import SmileFaceWrapper from "../SmileFaceWrapper";
import { FaceLine, GreenName, GreenScore, GreenScoreWrapper, MyGreenScoreWrapper, MyRank, RankWrapper, ScoreText, ScoreWrapper, TotalRank, YourScoreWrapper } from "./Score.styled";
// import domtoimage from 'dom-to-image';
// import { saveAs } from 'file-saver';
import { getInnerParticipantCount } from "@/api/survey";

const ScoreBoard = (result: ScoreResultType) => {

  const [totalParticipantCount, setTotalParticipantCount] = useState(0);

  const getTotalParticipantCount = () => {
    getInnerParticipantCount().then((result) => {
      // console.log(result.data.totalParticipantCount)
      setTotalParticipantCount(result.data.totalParticipantCount);
    })
  }

  useEffect(() => {
    getTotalParticipantCount();
  }, [])

  // const onDownloadBtn = ()=>{
  //       domtoimage
  //       .toBlob(document.querySelector("#download") as HTMLElement)
  //       .then((blob)=>{
  //           // const saveConfirm = window.confirm("이미지를 저장하시겠습니까?")
  //           // if(saveConfirm === true){
  //           saveAs(blob, 'download.png');
  //           // }
  //       })
  //   }

  return (
    <>
    <ScoreWrapper id='download'>
      <YourScoreWrapper>
        <Chip>당신의 그린스코어는</Chip>
        <GreenScore>{result.greenScore}</GreenScore>
        <ScoreText>점</ScoreText>
        <RankWrapper>
          <MyRank>{result.greenScoreRank}등 / </MyRank>
          <TotalRank>{totalParticipantCount !== 0 ? <>{totalParticipantCount}명 중</> : <></>}</TotalRank>
        </RankWrapper>
      </YourScoreWrapper>
        <Chip>항목별 그린스코어는</Chip>
      <GreenScoreWrapper>
        <MyGreenScoreWrapper>
          <FaceLine>
            <GreenName>하늘</GreenName>
            <SmileFaceWrapper score={result.economicCostBreakDown.sky.score}/>
          </FaceLine>
          <FaceLine>
            <GreenName>땅</GreenName>
            <SmileFaceWrapper score={result.economicCostBreakDown.land.score}/>
          </FaceLine>
          <FaceLine>
            <GreenName>바다</GreenName>
            <SmileFaceWrapper score={result.economicCostBreakDown.ocean.score}/>
          </FaceLine>
        </MyGreenScoreWrapper>
      </GreenScoreWrapper>
    </ScoreWrapper>
    {/* <button onClick={onDownloadBtn}>저장하기</button> */}
    </>
  )
}

export default ScoreBoard;
