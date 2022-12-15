import React, { ReactNode } from 'react';

import {Layout} from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  backgroundColor: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, backgroundColor }) => (
  <Layout
    backgroundColor={backgroundColor}
    color="white"
    hoverBackgroundColor="#2F8872"
    hoverColor="white"
    onClick={onClick}
  >
    {children}
  </Layout>
);

export default Button;
