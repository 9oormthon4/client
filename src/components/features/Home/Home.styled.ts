import Color from "@/components/common/Color";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.orange}
`;

export const ButtonWrapper = styled.div`
  margin-top: 474px;
`

export const Description = styled.div`
  margin-top: 115px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.54px;
  text-align: center;
`;

export const LogoImage = styled.img`
  width: 390px;
  height: 363px;
  margin-top: 125px;
  position: absolute;
`

// export const StatisticDescription = styled.div`
//   font-weight: 400;
//   font-size: 15px;
//   margin-bottom: 10px;
// `
