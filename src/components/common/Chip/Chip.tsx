import { ReactNode } from 'react';
import {Layout, TextWrapper} from './Chip.styled';

interface ChipProps {
  children: ReactNode;
  backgroundColor: string;
}

const Chip: React.FC<ChipProps> = ({ children, backgroundColor }) => (
  <Layout backgroundColor={backgroundColor}>
    <TextWrapper>{children}</TextWrapper>
  </Layout>
);

export default Chip;
