import styled from '@emotion/styled';

export const GraphDiv = styled.div`
  clear: both;
  // padding: 2vh;
  // margin-top: 78px;
  margin-top: 7vh;
`;

export const GraphBack = styled.div`
  width: 330px;
  height: 10px;
  border-radius: 50px;
  background-color: #FFFFFF;
`;

interface GraphProps {
  total: number;
  index: number;
}

export const Graph = styled.div<GraphProps>`
  position: relative;
  z-index: 0;
  width: ${(props) => {
    return (props.index / props.total) * 100;
  }}%;
  height: 10px;
  background-color: #2B2B2B;
  border-radius: 10px;
`;

export const Img = styled.img<GraphProps>`
  width: 39.94px;
  height: 23.38px;
  position: absolute;
  z-index: 1;
  right: -10px;
  top: -17px;
`;
