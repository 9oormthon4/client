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

  const trees = [[89, 55], [88, 45], [87, 50], [99, 54], [88, 55], [50, 30], [50, 20], [50, 30],[50, 30], [50, 30], [50, 30], [50, 34], [50, 30], [50, 30], [51, 32], [50, 35], [57, 30], [50, 30], [50, 30], [50, 30], [50, 30], [50, 30], [59, 30], [50, 37], [59, 30], [53, 60], [50, 30], [50, 30], [50, 30], [51, 30], [50, 30], [50, 30]]


  // const putTree = () => {
  //   return <TreeImg src="/tree.png" />
  // }

  // let flag = false;


  // const display = () => {
  //     console.log(flag)
  //   if (!flag) {
  //     return 'none';
  //   } else {
  //     return 'block';
  //   }
  // };

  const list = () => {
    return trees.map((v, i) =>  <TreeImg src="/tree.png" display={treeView} top={`${(Math.random() * 65) + 25}`} right={`${(Math.random() * 240) + 60}`} key={i} height={42} width={42}/>)
  }

// top 25 90

// (Math.random() * 65) + 25

// right 60 300

// (Math.random() * 240) + 60

  return (
    <>
      {result.greenScore >= 70 ? 
      <AllBackground>
        <NextTime><Chip>제주도를 클릭해보세요</Chip></NextTime>
      <Wrapper>
       
      <IslandWrapper >
        <GreenIslandImg src='/island.png' onClick={() => {setTreeView(treeView === 'none' ? 'block': 'block')}}>
        </GreenIslandImg>

           {/* <div> */}
        {/* {list} */}
        {/* {trees.map((v, i) =>  <TreeImg src="/tree.png" display={treeView} top={(Math.random() * 65) + 25} right={(Math.random() * 240) + 60} key={i} height={42} width={42}/>)} */}
        {/* </div> */}
        
        <TreeImg src="/tree.png" display={treeView} width={42} height={42} 
        right={`${(Math.random() * 240) + 60}`}
        top={`${(Math.random() * 65) + 15}`} />
        <TreeImg2 src="/tree.png" display={treeView} width={42} height={42} 
        right={`${(Math.random() * 240) + 60}`} 
        top={`${(Math.random() * 65) + 15}`} />
        <TreeImg3 src="/tree.png" display={treeView} width={42} height={42} 
        right={`${(Math.random() * 240) + 60} `}
        top={`${(Math.random() * 65) + 15}`} />

       
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
  position: relative;
  left: 10%;
`

const IslandImg = styled.img`
  width: 330px;
  height: 189px;
  animation: ${bounce} 1s ease infinite;
`

interface styleTree {
  display: string;
  right: string;
  top: string;
height: number;
width: number;
}

const TreeImg = styled.img<styleTree>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
    top:${({ top }) => top}px;
    right: ${({ right }) => right}px;
  display: ${({ display }) => display}; // block
  z-index: 3;
`

const TreeImg2 = styled.img<styleTree>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
    top:${({ top }) => top}px;
    right: ${({ right }) => right}px;
  display: ${({ display }) => display}; // block
  z-index: 3;
`

const TreeImg3 = styled.img<styleTree>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
    top:${({ top }) => top}px;
    right: ${({ right }) => right}px;
  display: ${({ display }) => display}; // block
  z-index: 3;
`

const Wrapper = styled.div`
  background-color: ${Color.skyblue};
`

const IslandWrapper = styled.div`;
  // position: relative;
  display: flex;
  width: 420px;
  justify-content: center;
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
  margin-top: 30px;
`





export default Plant;
