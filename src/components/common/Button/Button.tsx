import React, { ReactNode } from 'react';

import {Layout} from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  backgroundColor: string;
  color: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, backgroundColor, color }) => (
  <Layout
    backgroundColor={backgroundColor}
    color={color}
    hoverBackgroundColor="#2F8872"
    hoverColor="white"
    onClick={onClick}
  >
    {children}
  </Layout>
);

export default Button;
