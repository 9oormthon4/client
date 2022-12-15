import styled from '@emotion/styled';
import Color from '../Color';

interface ButtonProps {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
  fontSize: string;
  lineHeight: string;
}

interface lineHeightProps {
  lineHeight: string;
}

export const Layout = styled.div<ButtonProps>`
  width: 330px;
  height: 71px;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  

  // &:hover {
  //   color: ${({ hoverColor }) => hoverColor};
  //   background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  //   transition: transform 0.3s;
  // }

  &:active {
    background-color: ${Color.orange2};
    box-shadow: 0 0 0 3.5px ${Color.white} inset; 
    // transition: transform 0.3s;
  }
`;

export const Index = styled.div`
  left: 36px;
  height: 34px;
  line-height: 23.79px;  
  width: 34px;  
  font-size: 19px;
  font-weight: 500;
  border-radius: 50%;
  background-color: ${Color.white};
  color: ${Color.black};
  display: grid;
  place-items: center;
  cursor: pointer;
  position: absolute;
`

export const TextWrapper = styled.div<lineHeightProps>`
  position: absolute;
  cursor: pointer;
  left: 95px;
  text-align: start;
  line-height: ${({ lineHeight }) => lineHeight};
`
