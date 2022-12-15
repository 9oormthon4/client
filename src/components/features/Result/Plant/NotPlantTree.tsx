import Chip from "@/components/common/Chip";
import styled from "@emotion/styled";

interface PlantTreeProps {
  count: number;
}


const NotPlantTree: React.FC<PlantTreeProps> = ({count}) => {

  console.log(count)
return <>
    {Array.from({length: count}).map((_, i) => {

     return <TreeImg src={'/tree.png'} key={i}/>
      
    })}
  </>
}

const TreeImg = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  top: ${Math.floor(Math.random()*50)};
  left: ${Math.floor(Math.random()*50)};
  // transform: translate(-50%, -50%);
`

const IslandImg = styled.img`
  width: 330px;
  height: 189px;
`

export default NotPlantTree;