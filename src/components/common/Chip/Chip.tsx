import { ReactNode } from 'react';
import {Layout, TextWrapper} from './Chip.styled';

interface ChipProps {
  children: ReactNode;
}

const Chip: React.FC<ChipProps> = ({ children }) => (
  <Layout>
      <TextWrapper>{children}</TextWrapper>
  </Layout>
);

export default Chip;
