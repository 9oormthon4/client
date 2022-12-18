import Color from '@/components/common/Color';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.orange}
`;

export const ButtonWrapper = styled.div`
  // margin-top: 474px;
  margin-top: 50vh;
`;

export const Description = styled.div`
  // margin-top: 115px;
  margin-top: 10vh;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.54px;
  text-align: center;
  color: ${Color.black}
`;

export const LogoImage = styled.img`
  width: 420px;
  height: 363px;
  margin-top: 125px;
  position: absolute;
`;
export const InfoDescription = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17.53px;
  color: ${Color.sub};
  text-align: center;
  margin-top: 3vh;
`;
