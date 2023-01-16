import styled, { css } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import axios from "axios";
import { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { QuotesType } from "./types";
import Quote from "./components/Quote";
import Clock from "./components/Clock";
import Button from "./components/Button";
import Details from "./components/Details";
import BackgroundDayMobile from "./img/mobile/bg-image-daytime.jpg";
import BackgroundDayTablet from "./img/tablet/bg-image-daytime.jpg";
import BackgroundDayDesktop from "./img/desktop/bg-image-daytime.jpg";
import BackgroundNightMobile from "./img/mobile/bg-image-nighttime.jpg";
import BackgroundNightTablet from "./img/tablet/bg-image-nighttime.jpg";
import BackgroundNightDesktop from "./img/desktop/bg-image-nighttime.jpg";

function App() {
  const [quote, setQuote] = useState<QuotesType>();
  const [ip, setIp] = useState<any>(null);
  const [info, setInfo] = useState<any>(null);
  const [detailsOpener, setDetailsOpener] = useState<boolean>(false);

  const newDate = new Date(info?.datetime);
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const newHours = hours <= 9 ? "0" + hours : hours;
  const newMinutes = minutes <= 9 ? "0" + minutes : minutes;

  const getQuote = async () => {
    const receivedQuote = await axios.get("https://api.quotable.io/random");
    setQuote(receivedQuote.data);
  };

  const getIp = async () => {
    const response = await axios.get(
      "https://api.ipbase.com/v2/info?apikey=ntP1Z9qEtb1UGtC1uG3COxtHZEumaBaLao3rx3sL"
    );
    setIp(response.data);
    localStorage.setItem("data", JSON.stringify(response.data.data));
  };

  useEffect(() => {
    getQuote();
    // getIp();
    const localData = localStorage.getItem("data");
    setIp(JSON.parse(localData || ""));
  }, []);

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        "http://worldtimeapi.org/api/timezone/" + ip.timezone.id.toString()
      );
      setInfo(response.data);
    };

    if (ip) {
      getDetails();
    }
  }, [ip]);

  console.log(info);
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

      <MainContainer newHours={newHours}>
        <Container>
          {detailsOpener ? null : <Quote quote={quote} getQuote={getQuote} />}
          <DesktopContainer>
            {ip && info ? (
              <Clock
                ip={{ data: ip }}
                newHours={newHours}
                newMinutes={newMinutes}
              />
            ) : null}

            <Button
              detailsOpener={detailsOpener}
              setDetailsOpener={setDetailsOpener}
            />
          </DesktopContainer>
          {detailsOpener && info ? <Details info={info} /> : null}
        </Container>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main(
  (props: { newHours: string | number }) => css`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: url(${props.newHours >= "05" && props.newHours <= "17" ? BackgroundDayMobile : BackgroundNightMobile});
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;

    @media screen and (min-width: 768px) {
      background-image: url(${props.newHours >= "05" && props.newHours <= "17" ? BackgroundDayTablet : BackgroundNightTablet});
    }

    @media screen and (min-width: 1024px) {
      background-image: url(${props.newHours >= "05" && props.newHours <= "17" ? BackgroundDayDesktop : BackgroundNightDesktop});
    }
  `
);

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 26px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 0 64px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 165px;
  }
`;

const DesktopContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
