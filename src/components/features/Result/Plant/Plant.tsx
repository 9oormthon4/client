import { getPlantCount } from "@/api/survey";
import Chip from "@/components/common/Chip";
import Color from "@/components/common/Color";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ScoreResultType } from "../Result";
import NotPlantTree from "./NotPlantTree";
import PlantTree from "./PlantTree";

const Plant = (result: ScoreResultType) => {
  const [totalPlantCount, setTotalPlantCount] = useState(0);

  const getTotalPlantCount = () => {
    getPlantCount().then((result) => {
      setTotalPlantCount(result.data.totalPlantCount);
    })
  }

  useEffect(() => {
    getTotalPlantCount();
  }, [])

  const putTree = () => {
    console.log('dfasfdsadf')
    return <TreeImg src="/tree.png" />
  }

  return (
    <>
      {totalPlantCount >= 70 ? 
      <Wrapper><Chip>제주도를 클릭해보세요</Chip>

      <IslandWrapper >
        <IslandImg src='/island-full.jpeg' onClick={putTree}/>
      </IslandWrapper>
      <PlantTree count={totalPlantCount} /></Wrapper> 
      : 
      <>
        <Chip>다음기회에 만나요...</Chip>
        <Wrapper>
        <IslandImg src='/island-full.jpeg' />
        <NotPlantTree count={totalPlantCount}/>
        </Wrapper></>}
    </>
  )
}

const IslandImg = styled.img`
  width: 330px;
  height: 189px;
`

const TreeImg = styled.img`
  width: 42px;
  height: 42px;
  position: absolute;
  top: ${Math.floor(Math.random()*50)};
  // left: 50%;
  // transform: translate(-50%, -50%);
`

const Wrapper = styled.div`
  background-color: ${Color.skyblue}
`

const IslandWrapper = styled.div`

`

export default Plant;
