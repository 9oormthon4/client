import Button from '@/components/common/Button';
import { ButtonWrapper, Description, InfoDescription, LogoImage, Wrapper } from './Home.styled';
import { useRouter } from 'next/router';
import { Layout } from '@/components/common/Layout';
import { useDispatch } from 'react-redux';
import StatisticDescription from '@/components/common/StatisticDescription';
import { requestIdActions } from '@/store/requestId';
import { getRequestId } from '@/api/survey';
import { Container } from '@/components/common/Layout/Layout';
import Color from '@/components/common/Color';

const HomeLayout = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRequestId = async () => {
    getRequestId().then(result => {
      dispatch(requestIdActions.setUserId(result?.data?.userId!));
      dispatch(requestIdActions.setUserCode(result?.data?.userCode!));
    });
  };

  return (
    <Layout>
      <Container>
        <Wrapper>
          <Description>
            아름다운 제주의 환경을 보호하고
            <br />
            제주에 나무를 심어보세요!
          </Description>
          <LogoImage src="/logo.gif" alt="어드레감디 로고 이미지" />
          <ButtonWrapper>
            <Button
              color={Color.white}
              backgroundColor={Color.green}
              onClick={() => {
                alert('죄송합니다. 현재는 서비스를 이용할 수 없습니다.');
                // handleRequestId().then(() => {
                //   router.push('/survey/1');
                // });
              }}
            >
              출발하기
            </Button>
          </ButtonWrapper>
          <StatisticDescription />
          <InfoDescription>
            여행일정을 입력하면 그린스코어와
            <br />
            환경보전비용을 계산해줘요
          </InfoDescription>
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default HomeLayout;
