import {GraphDiv,GraphBack, Graph, Img } from './ProgressBar.styled';

interface ProgressBarProps {
  id: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({id}) => {

  return (
    <GraphDiv>
      <GraphBack>
        <Graph total={10} index={id}>
          <Img src={'/round.png'} total={10} index={id} />
        </Graph>
      </GraphBack>
    </GraphDiv>
  )
}

export default ProgressBar