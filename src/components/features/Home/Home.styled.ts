import Color from "@/components/common/Color";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.orange}
`;

export const Description = styled.div`
  margin-top: 115px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22.54px;
`;

export const Title = styled.div`
  margin-top: 75px;
  font-weight: 400;
  font-size: 38px;
`

// export const StatisticDescription = styled.div`
//   font-weight: 400;
//   font-size: 15px;
//   margin-bottom: 10px;
// `
