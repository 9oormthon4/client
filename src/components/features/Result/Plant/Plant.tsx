import { getPlantCount } from '@/api/survey';
import Chip from '@/components/common/Chip';
import Color from '@/components/common/Color';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { ScoreResultType } from '../Result';
import NotPlantTree from './NotPlantTree';
import PlantTree from './PlantTree';

const Plant = (result: ScoreResultType) => {
  const [totalPlantCount, setTotalPlantCount] = useState(0);
  const [treeView, setTreeView] = useState('none');
  const [trees, setTrees] = useState([<></>]);

  const getTotalPlantCount = () => {
    getPlantCount().then((result) => {
      setTotalPlantCount(result.data.totalPlantCount);
    });
  };

  useEffect(() => {
    getTotalPlantCount();
    // console.log(totalPlantCount);
  }, [totalPlantCount]);

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

  useEffect(() => {
    const forest = makeForest();
    setTrees(forest);
  }, [totalPlantCount]);

  const makeForest = () => {
    const trees = [];
    for(let i=0; i<totalPlantCount; i++) {
      // trees.push(<TreeImg src="/tree.png" display={treeView} top={`${(Math.random() * 65) + 25}`} right={`${(Math.random() * 240) + 60}`} key={i} height={42} width={42}/>);
      trees.push(<TreeImg src="/tree.png" display={'block'} top={`${(Math.random() * 65) + 25}`} right={`${(Math.random() * 240) + 60}`} key={i} height={42} width={42}/>);
    }
    return trees;
  };

  const makeTree = () => <TreeImg src="/tree.png" display={treeView} top={`${(Math.random() * 65) + 25}`} right={`${(Math.random() * 240) + 60}`} key={'tree'} height={42} width={42}/>;

  // top 25 90
  // (Math.random() * 65) + 25
  // right 60 300
  // (Math.random() * 240) + 60

  return (
    <>
      {result.greenScore >= 70 ?
        <AllBackground>
          <NextTime>
            <Chip backgroundColor={Color.green}>제주도를 클릭해보세요</Chip>
          </NextTime>
          <Wrapper>

            <IslandWrapper
              onClick={() => {setTreeView(treeView === 'none' ?'block':'block');}}
            >
              <GreenIslandImg src='/island.png'>
              </GreenIslandImg>

              {/* {makeForest()} */}

              {makeTree()}
              {trees}

              {/* <TreeImg src="/tree.png" display={'block'} width={42} height={42}
                right={`${(Math.random() * 240) + 60}`}
                top={`${(Math.random() * 65) + 15}`} />
              <TreeImg2 src="/tree.png" display={'block'} width={42} height={42}
                right={`${(Math.random() * 240) + 60}`}
                top={`${(Math.random() * 65) + 15}`} />
              <TreeImg3 src="/tree.png" display={treeView} width={42} height={42}
                right={`${(Math.random() * 240) + 60}`}
                top={`${(Math.random() * 65) + 15}`} /> */}

            </IslandWrapper>
            {/* <PlantTree count={totalPlantCount} /> */}
          </Wrapper>
        </AllBackground>
        :
        <AllBackground>
          <NextTime>
            <Chip backgroundColor={Color.green}>다음기회에 만나요...</Chip>
          </NextTime>
          <Wrapper>
            <IslandImg src='/frame.png' />
            <NotPlantTree count={totalPlantCount}/>
          </Wrapper>
        </AllBackground>}
    </>
  );
};

const bounce = keyframes`
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
`;

const GreenIslandImg= styled.img`
  width: 330px;
  height: 189px;
  cursor: pointer;
  position: absolute;
  float: left; 
`;

const IslandImg = styled.img`
  margin-top: 16px;
  width: 330px;
  height: 189px;
  animation: ${bounce} 1s ease infinite;
`;

interface styleTree {
  display: string;
  right: string;
  top: string;
  height: number;
  width: number;
}

const TreeImg = styled.img<styleTree>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: absolute;
  top:${({ top }) => top}px;
  right: ${({ right }) => right}px;
  display: ${({ display }) => display}; // block
  z-index: 3;
`;

const TreeImg2 = styled.img<styleTree>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: absolute;
  top:${({ top }) => top}px;
  right: ${({ right }) => right}px;
  display: ${({ display }) => display}; // block
  z-index: 3;
`;

const Wrapper = styled.div`
  background-color: ${Color.skyblue};
`;

const IslandWrapper = styled.div`;
  position: relative;
  display: flex;
  width: 420px;
  justify-content: center;
  margin-top: 8px;
`;

const AllBackground = styled.div`
  background-color: ${Color.skyblue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NextTime = styled.div`
  width: 200px;
  background-color: ${Color.skyblue};
  margin-top: 58px;
`;

export default Plant;
