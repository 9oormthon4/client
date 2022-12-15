import { getPlantCount } from "@/api/survey";
import Chip from "@/components/common/Chip";
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

  return (
    <>
  
      {totalPlantCount >= 70 ? <><Chip>제주도를 클릭해보세요</Chip><IslandImg src='/island.png' /><PlantTree count={totalPlantCount} /></> : <NotPlantTree  count={totalPlantCount}/>}
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



export default Plant;
