import React, { ReactNode } from 'react';
import Color from '../Color';

import {Layout} from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  backgroundColor: string;
  color: string;
  onClick: () => void;
}

const Button2: React.FC<ButtonProps> = ({ children, onClick, backgroundColor, color }) => (
  <Layout
    backgroundColor={backgroundColor}
    color={color}
    hoverBackgroundColor={Color.orange}
    hoverColor="white"
    onClick={onClick}
  >
    {children}
  </Layout>
);

export default Button2;
