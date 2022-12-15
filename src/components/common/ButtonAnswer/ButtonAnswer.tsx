import React, { ReactNode } from 'react';

import {Index, Layout} from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  backgroundColor: string;
  fontSize: string;
  id: number;
  onClick: () => void;
}

const ButtonAnswer: React.FC<ButtonProps> = ({ children, onClick, backgroundColor, id, fontSize }) => (
  <Layout
    backgroundColor={backgroundColor}
    color="white"
    hoverBackgroundColor="#2F8872"
    hoverColor="white"
    fontSize={fontSize}
    onClick={onClick} >
      <Index>{id}</Index>
      {children}
  </Layout>
);

export default ButtonAnswer;
