import Color from "@/components/common/Color";
import styled from "@emotion/styled";

export const ScoreWrapper = styled.div`
  height: 495px;
  width: 330px;
  left: 30px;
  // margin-top: 88px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.orange};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
`;

export const YourScoreWrapper = styled.div`
  padding-top: 38px;
  padding-bottom: 53px;
  position: relative;
  text-align: center;
`

export const GreenScore = styled.div`
  font-family: 'Campton';
  font-size: 120px;
  font-style: italic;
  font-weight: 900;
  line-height: 140px;
  letter-spacing: 0em;
  color: ${Color.white};
  position: absolute;
`

export const ScoreText = styled.div`
  font-size: 18px;
  position: absolute;
  top: 162px;
  left: 132px;
`

export const RankWrapper = styled.div`
  margin-top: 133px;
`

export const MyRank = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`

export const TotalRank = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 22.54px;
`

export const GreenScoreWrapper = styled.div`

`

export const MyGreenScoreWrapper = styled.div`
  // vertical-align: middle;
`

export const GreenName = styled.div`

`

export const FaceLine = styled.div`

`