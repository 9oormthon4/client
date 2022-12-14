import styled from '@emotion/styled';
import Color from '../Color';

interface ChipProps {
  backgroundColor: string;
}

export const Layout = styled.div<ChipProps>`
  // width: 170px;
  // height: 24px;
  left: 110px;
  top: 124px;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50px;
  padding: 2px 20px;
`;

export const TextWrapper = styled.div`
  // position: absolute;
  // text-align: start;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.white}
`;
