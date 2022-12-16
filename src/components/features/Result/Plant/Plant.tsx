import { getPlantCount } from "@/api/survey";
import Chip from "@/components/common/Chip";
import Color from "@/components/common/Color";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ScoreResultType } from "../Result";
import NotPlantTree from "./NotPlantTree";
import PlantTree from "./PlantTree";

const Plant = (result: ScoreResultType) => {
  const [totalPlantCount, setTotalPlantCount] = useState(0);
  const [treeView, setTreeView] = useState('none');

  const getTotalPlantCount = () => {
    getPlantCount().then((result) => {
      setTotalPlantCount(result.data.totalPlantCount);
    })
  }

  useEffect(() => {
    getTotalPlantCount();
  }, [])


  // const putTree = () => {
  //   return <TreeImg src="/tree.png" />
  // }

  let flag = false;


  // const display = () => {
  //     console.log(flag)
  //   if (!flag) {
  //     return 'none';
  //   } else {
  //     return 'block';
  //   }
  // };

  

  return (
    <>
      {result.greenScore >= 70 ? 
      <AllBackground>
        <NextTime><Chip>제주도를 클릭해보세요</Chip></NextTime>
      <Wrapper>
      <IslandWrapper >
        <GreenIslandImg src='/island.png' onClick={() => {setTreeView(treeView === 'none' ? 'block': 'none')}}></GreenIslandImg>
        <TreeImg src="/tree.png" display={treeView} width={42} height={42} />
      </IslandWrapper>
      {/* <PlantTree count={totalPlantCount} /> */}
      </Wrapper> </AllBackground>
      : 
      <AllBackground>
      <NextTime>
        <Chip>다음기회에 만나요...</Chip></NextTime>
        <Wrapper>
        <IslandImg src='/frame.png' />
        <NotPlantTree count={totalPlantCount}/>
        </Wrapper></AllBackground>}
    </>
  )
}

const bounce = keyframes`
// from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }
//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }
//   70% {
//     transform: translate3d(0, -15px, 0);
//   }
//   90% {
//     transform: translate3d(0,-4px,0);
//   }
0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`

const GreenIslandImg= styled.img`
  width: 330px;
  height: 189px;
  cursor: pointer;
`

const IslandImg = styled.img`
  width: 330px;
  height: 189px;
  animation: ${bounce} 1s ease infinite;
`

interface styleTree {
  display: string;
  width: number;
  height: number;
}

const TreeImg = styled.img<styleTree>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: absolute;
  top: 1000px;
  left: 500px;
  display: ${({ display }) => display};
`

const Wrapper = styled.div`
  background-color: ${Color.skyblue};
`

const IslandWrapper = styled.div`;

`

const AllBackground = styled.div`
  background-color: ${Color.skyblue};
      display: flex;
    flex-direction: column;
    align-items: center;
`

const NextTime = styled.div`
width: 200px;
background-color: ${Color.skyblue};

`





export default Plant;
