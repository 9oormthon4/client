import { Description, Wrapper } from './ResultWord.styled';

interface ResultWordProps {
  isOver70: boolean;
}

const ResultWord:React.FC<ResultWordProps> = ({ isOver70 }) => {
  return (
    <Wrapper>
      {isOver70 ?
        <Description>그린 스코어가 70점이 넘어<br />제주에 <>나무를 심을 수 있어요!</></Description> :
        <Description>그린 스코어가 70점이 넘지 않아<br />제주에 나무를 심을 수 없어요</Description>}
    </Wrapper>
  );
};

export default ResultWord;
