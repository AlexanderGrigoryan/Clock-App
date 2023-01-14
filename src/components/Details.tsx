import React from "react";
import styled from "styled-components";

interface Props {}

function Details(props: Props) {
  return (
    <Container>
      <Content>
        <Titles>
          <Title>CURRENT TIMEZONE</Title>
          <Title>Day of the year</Title>
          <Title>Day of the week</Title>
          <Title>Week number</Title>
        </Titles>
        <Texts>
          <Text>Europe/London</Text>
          <Text>295</Text>
          <Text>5</Text>
          <Text>42</Text>
        </Texts>
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
`;

const Content = styled.div`
  padding: 48px 26px 0 26px;
  display: flex;
  justify-content: space-between;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Title = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #303030;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: right;
  color: #303030;
`;
