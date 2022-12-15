import Chip from "@/components/common/Chip";
import { useRef } from "react";
import { ScoreResultType } from "../Result";
import SmileFaceWrapper from "../SmileFaceWrapper";
import { FaceLine, GreenName, GreenScore, GreenScoreWrapper, MyGreenScoreWrapper, MyRank, RankWrapper, ScoreWrapper, TotalRank, YourScoreWrapper } from "./Score.styled";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const ScoreBoard = (result: ScoreResultType) => {

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
    <>
    <ScoreWrapper id='download'>
      <YourScoreWrapper>
        <Chip>당신의 그린스코어는</Chip>
        <GreenScore>{result.greenScore}</GreenScore>
        <RankWrapper>
          <MyRank>{result.greenScoreRank}등 / </MyRank>
          <TotalRank>372명 중</TotalRank>
        </RankWrapper>
      </YourScoreWrapper>
      <GreenScoreWrapper>
        <Chip>항목별 그린스코어는</Chip>
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
    <button onClick={onDownloadBtn}>저장하기</button>
    </>
  )
}

export default ScoreBoard;
