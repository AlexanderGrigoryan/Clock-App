import React from "react";
import styled from "styled-components";
import Sun from "../img/desktop/icon-sun.svg";

function Clock() {
  return (
    <Container>
      <Greetings>
        <Icon src={Sun} alt="sun icon" />
        <GreetingsText>GOOD MORNING</GreetingsText>
        <GreetingsTextDesktop>
          GOOD MORNING, IT'S CURRENTLY
        </GreetingsTextDesktop>
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

  @media screen and (min-width: 768px) {
    padding-top: 153px;
    row-gap: 0;
  }
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

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 3.5999999046325684px;
    display: none;
  }
`;

const GreetingsTextDesktop = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 3px;
  color: #ffffff;
  display: none;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 3.5999999046325684px;
    display: block;
  }
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

  @media screen and (min-width: 768px) {
    font-size: 175px;
    line-height: 175px;
    letter-spacing: 4.38px;
  }
`;

const TimeZone = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 28px;
  color: #ffffff;
  align-self: flex-end;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 28px;
  }
`;

const Location = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 3px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 3.6px;
  }
`;
