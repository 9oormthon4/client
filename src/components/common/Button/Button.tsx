import React, { ReactNode } from 'react';

import {Layout} from './Button.styled';

interface IProps {
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ children, onClick }) => (
  <Layout
    backgroundColor='#2F8872'
    color="white"
    hoverBackgroundColor="#2F8872"
    hoverColor="white"
    onClick={onClick}
  >
    {children}
  </Layout>
);

export default Button;
