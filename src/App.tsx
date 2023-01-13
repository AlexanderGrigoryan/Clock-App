import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { QuotesType } from "./types";
import Quote from "./components/Quote";
import BackgroundDayMobile from "./img/mobile/bg-image-daytime.jpg";

function App() {
  const [quote, setQuote] = useState<QuotesType>();

  const getQuote = async () => {
    const receivedQuote = await axios.get("https://api.quotable.io/random");
    setQuote(receivedQuote.data);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>

      <MainContainer>
        <Container>
          <Quote quote={quote} getQuote={getQuote} />
        </Container>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundDayMobile});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 26px;
  width: 100%;
  height: 100%;
`;
