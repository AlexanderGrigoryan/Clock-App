import styled from "styled-components";
import Sun from "../img/desktop/icon-sun.svg";
import Moon from "../img/desktop/icon-moon.svg";

interface Props {
  ip: any;
  newHours: string | number;
  newMinutes: string | number;
}

function Clock(props: Props) {
  const { ip, newHours, newMinutes } = props;

  return (
    <Container>
      <Greetings>
        {newHours >= "05" && newHours <= "17" ? (
          <Icon src={Sun} alt="sun icon" />
        ) : (
          <Icon src={Moon} alt="moon icon" />
        )}

        <GreetingsText>
          {newHours >= "05" && newHours <= "11"
            ? "GOOD MORNING"
            : newHours >= "12" && newHours <= "17"
            ? "GOOD AFTERNOON"
            : "GOOD EVENING"}
        </GreetingsText>
        <GreetingsTextDesktop>
          {newHours >= "05" && newHours <= "11"
            ? "GOOD MORNING"
            : newHours >= "12" && newHours <= "17"
            ? "GOOD AFTERNOON"
            : "GOOD EVENING"}
          , IT'S CURRENTLY
        </GreetingsTextDesktop>
      </Greetings>
      <Time>
        <TimeClock>{newHours + ":" + newMinutes}</TimeClock>
        <TimeZone>BST</TimeZone>
      </Time>
      <Location>
        IN {ip.data.location.city.name.toUpperCase()},{" "}
        {ip.data.location.country.name.toUpperCase()}
      </Location>
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

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 4px;
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

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 4px;
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

  @media screen and (min-width: 1280px) {
    font-size: 200px;
    line-height: 200px;
    letter-spacing: 5px;
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

  @media screen and (min-width: 1280px) {
    font-size: 40px;
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

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: 4.8px;
  }
`;
