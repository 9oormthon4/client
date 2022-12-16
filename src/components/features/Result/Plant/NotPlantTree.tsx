import Chip from "@/components/common/Chip";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface PlantTreeProps {
  count: number;
}

const getRandom = () => {
  return Math.floor(Math.random()*50);
}


const NotPlantTree: React.FC<PlantTreeProps> = ({count}) => {



  console.log(count)
return <>
    {Array.from({length: count}).map((_, i) => {

    //  return <TreeImg src={'/tree.png'} key={i} top={getRandom()} left={getRandom()}/>
      
    })}
  </>
}

interface ButtonProps {
  top: number;
  left: number;
}

const bounce = keyframes`
from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
`

const TreeImg = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  animation: ${bounce} 1s ease infinite;
}
`



const IslandImg = styled.img`
  width: 330px;
  height: 189px;
`

export default NotPlantTree;