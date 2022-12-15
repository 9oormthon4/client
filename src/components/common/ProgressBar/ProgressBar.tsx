import {GraphDiv,GraphBack, Graph, Img } from './ProgressBar.styled';

interface ProgressBarProps {
  id: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({id, total}) => {

  return (
    <GraphDiv>
      <GraphBack>
        <Graph total={total} index={id}>
          <Img src={'/round.png'} total={total} index={id} />
        </Graph>
      </GraphBack>
    </GraphDiv>
  )
}

export default ProgressBar