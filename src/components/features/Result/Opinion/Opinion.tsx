import Chip from '@/components/common/Chip';
import { ScoreResultType } from '../Result';
import { MarginTop, OpinionList, OpinionText, Wrapper } from './Opinion.styled';

const Opinion = (result: ScoreResultType) => {
  return (
    <>
      <MarginTop></MarginTop>
      <Chip>제주를 위한 의견</Chip>
      <Wrapper>
        <OpinionList>
          <OpinionText>{result.economicCostBreakDown.sky.commentary}</OpinionText>
          <OpinionText>{result.economicCostBreakDown.land.commentary}</OpinionText>
          <OpinionText>{result.economicCostBreakDown.ocean.commentary}</OpinionText>
        </OpinionList>
      </Wrapper>
    </>
  );
};

export default Opinion;
