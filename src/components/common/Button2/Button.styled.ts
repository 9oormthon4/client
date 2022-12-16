import styled from '@emotion/styled';
import Color from '../Color';

interface ButtonProps {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
}

export const Layout = styled.div<ButtonProps>`
  width: 64px;
  height: 65px;
  font-weight: 700;
  font-size: 23px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  // &:hover {
  //   color: ${({ hoverColor }) => hoverColor};
  //   background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  //   transition: transform 0.3s;
  // }

  &:active {
    background-color: ${Color.green2};
    box-shadow: 0 0 0 3.5px ${Color.white} inset; 
    // transition: transform 0.3s;
  }
`;
