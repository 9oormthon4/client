import styled from "@emotion/styled";

export const GraphDiv = styled.div`
  clear: both;
  // padding: 2vh;
  margin-top: 78px;
`;

export const GraphBack = styled.div`
  width: 330px;
  height: 10px;
  border-radius: 50px;
  background-color: #faac69;
`;

interface GraphProps {
  total: number;
  index: number;
}

export const Graph = styled.div<GraphProps>`
  position: relative;
  z-index=0;
  width: ${(props) => {
    return (props.index / props.total) * 100;
  }}%;
  height: 10px;
  background-color: #FF7B30;
  border-radius: 10px;
`;

export const Img = styled.img<GraphProps>`
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 1;
  left: ${(props) => {
    return (props.index / props.total) * 100;
  }}%;
`
