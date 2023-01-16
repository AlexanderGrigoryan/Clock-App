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
  column-gap: 16.67px;
  width: 100%;
  padding-top: 32px;
  margin-bottom: 128px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    margin-bottom: 235px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 290px;

  @media screen and (min-width: 768px) {
    max-width: 540px;
  }
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Author = styled.p`
  font-size: 12px;
  font-weight: 700;
  line-height: 22px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const RefreshButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
  height: fit-content;
`;

const Refresh = styled.img``;
