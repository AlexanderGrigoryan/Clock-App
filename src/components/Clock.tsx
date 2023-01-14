import React from "react";
import styled from "styled-components";
import Sun from "../img/desktop/icon-sun.svg";

function Clock() {
  return (
    <Container>
      <Greetings>
        <Icon src={Sun} alt="sun icon" />
        <GreetingsText>GOOD MORNING</GreetingsText>
      </Greetings>
      <Time>
        <TimeClock>11:37</TimeClock>
        <TimeZone>BST</TimeZone>
      </Time>
      <Location>IN LONDON, UK</Location>
    </Container>
  );
}

export default Clock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-top: 99px;
`;

const Greetings = styled.div`
  display: flex;
  column-gap: 16.44px;
`;

const Icon = styled.img``;

const GreetingsText = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 3px;
  color: #ffffff;
`;

const Time = styled.div`
  display: flex;
  column-gap: 5px;
`;

const TimeClock = styled.p`
  font-size: 100px;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: -2.5px;
  color: #ffffff;
`;

const TimeZone = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 28px;
  color: #ffffff;
  align-self: flex-end;
`;

const Location = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 3px;
  color: #ffffff;
`;
