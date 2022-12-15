import React, { ReactNode } from 'react';
import Color from '../Color';

import {Index, Layout, TextWrapper} from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  backgroundColor: string;
  fontSize: string;
  id: number;
  lineHeight: string;
  onClick: () => void;
}

const ButtonAnswer: React.FC<ButtonProps> = ({ children, onClick, backgroundColor, id, fontSize, lineHeight }) => (
  <Layout
    backgroundColor={backgroundColor}
    color={Color.black}
    hoverBackgroundColor="#2F8872"
    hoverColor="white"
    fontSize={fontSize}
    lineHeight={lineHeight}
    onClick={onClick} >
      <Index>{id}</Index>
      <TextWrapper lineHeight={lineHeight}>{children}</TextWrapper>
  </Layout>
);

export default ButtonAnswer;
