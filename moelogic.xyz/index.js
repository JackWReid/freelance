import Head from 'next/head';
import styled from 'styled-components';
import EventListing from '../components/EventListing';

const globalStyles = `
  * { box-sizing: border-box; }
  @keyframes fadein { from { opacity: 0; } to { opacity: 1; }}
  body { margin: 0; background-color: black; color: white; font-family: 'Inconsolata', monospace; opacity: 0; animation-name: fadein; animation-duration: 2s; animation-delay: 1s; animation-fill-mode: forwards; }
`;

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  & > span {
    color: gray;
  }
`;

export default () => (
  <Page>
    <Head>
      <title>moe logic</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/static/favicon.png" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata&amp;subset=latin-ext" rel="stylesheet" />
      <style>{globalStyles}</style>
    </Head>
    <Title>moe logic <span>presents</span></Title>

    <EventListing
      symbol="⊻"
			title="moe logic + dable"
      number="01"
      startTime="9"
      date="2"
      month="june"
      place="the nest"
    />

  </Page>
);
