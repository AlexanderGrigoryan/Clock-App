import React from "react";
import styled from "styled-components";
import { QuotesType } from "../types";
import RefreshIcon from "../img/desktop/icon-refresh.svg";

interface Props {
  quote: QuotesType | undefined;
  getQuote: () => Promise<void>;
}

function Quote(props: Props) {
  const { quote, getQuote } = props;
  return (
    <Container>
      <Content>
        <Text>{quote?.content}</Text>
        <Author>{quote?.author}</Author>
      </Content>
      <RefreshButton onClick={getQuote}>
        <Refresh src={RefreshIcon} alt="refresh icon" />
      </RefreshButton>
    </Container>
  );
}

export default Quote;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 290px;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  color: #ffffff;
`;

const Author = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  color: #ffffff;
`;

const RefreshButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
  height: fit-content;
`;

const Refresh = styled.img``;
