import styled from "styled-components";

interface Props {
  info: any;
}

function Details(props: Props) {
  const { info } = props;
  return (
    <Container>
      <Content>
        <Titles>
          <FlexBlock>
            <Category>
              <Title>CURRENT TIMEZONE</Title>
              <Text>{info.timezone}</Text>
            </Category>
            <Category>
              <Title>Day of the year</Title>
              <Text>{info.day_of_year}</Text>
            </Category>
          </FlexBlock>
          <FlexBlock>
            <Category>
              <Title>Day of the week</Title>
              <Text>{info.day_of_week}</Text>
            </Category>
            <Category>
              <Title>Week number</Title>
              <Text>{info.week_number}</Text>
            </Category>
          </FlexBlock>
        </Titles>
      </Content>
    </Container>
  );
}

export default Details;

const Container = styled.div`
  width: 100%;
  min-height: 256px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20.3871px);
  position: fixed;
  left: 0;
  bottom: 0;

  @media screen and (min-width: 768px) {
    min-height: 440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    min-height: 400px;
  }
`;

const Content = styled.div`
  padding: 48px 26px 0 26px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const FlexBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    row-gap: 49px;
  }
`;

const Title = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #303030;

  @media screen and (min-width: 768px) {
    font-size: 13px;
    letter-spacing: 2.6px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: right;
  color: #303030;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 48.41px;
    text-align: left;
  }
`;
