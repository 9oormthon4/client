import Chip from '@/components/common/Chip';
import Color from '@/components/common/Color';
import { ScoreResultType } from '../Result';
import { CostText, Description, ScoreText, Wrapper } from './Cost.styled';

const Cost = (result: ScoreResultType) => {
  return (
    <Wrapper>
      <Chip backgroundColor={Color.black}>제주가 부담해야하는 환경보전비용은</Chip>
      <CostText>{result.economicCost.toLocaleString()}</CostText>
      {/* <ScoreText>원</ScoreText> */}
    </Wrapper>
  );
};

export default Cost;
