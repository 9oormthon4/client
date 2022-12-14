import styled from '@emotion/styled';

interface ButtonProps {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
}

export const Layout = styled.div<ButtonProps>`
  width: 330px;
  height: 71px;
  font-weight: 500;
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

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    transition: transform 0.3s;
  }
`;
