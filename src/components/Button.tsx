import React from "react";
import styled from "styled-components";
import IconUp from "../img/desktop/icon-arrow-up.svg";
import IconDown from "../img/desktop/icon-arrow-down.svg";

interface Props {
  detailsOpener: boolean;
  setDetailsOpener: React.Dispatch<React.SetStateAction<boolean>>;
}

function Button(props: Props) {
  const { detailsOpener, setDetailsOpener } = props;

  return (
    <Container>
      <DetailsButton onClick={() => setDetailsOpener(!detailsOpener)}>
        <ButtonText>{detailsOpener ? "MORE" : "LESS"}</ButtonText>
        {detailsOpener ? (
          <Circle>
            <ArrowDown src={IconDown} alt="arrow down icon" />
          </Circle>
        ) : (
          <ArrowUp src={IconUp} alt="arrow up icon" />
        )}
      </DetailsButton>
    </Container>
  );
}

export default Button;

const Container = styled.div`
  margin: 48px 0 40px;
`;

const DetailsButton = styled.button`
  width: 115px;
  height: 39px;
  border-radius: 28px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px 0 17px;
  border: none;
  cursor: pointer;
`;

const ButtonText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 3.75px;
  color: #000000;
  opacity: 0.5;
`;

const ArrowUp = styled.img`
  width: 32px;
  height: 32px;
`;

const ArrowDown = styled.img``;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
`;
