import React, { Component } from 'react';
import styled from 'styled-components';
import EventListing from './components/EventListing';
import TweetStream from './components/TweetStream';
import PageBack from './components/PageBack';

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 32px;

  @media(max-width: 800px) {
    padding: 16px;
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  & > span {
    color: gray;
  }
`;

class App extends Component {
  isLiveMode = () => window.location.search.includes('live');

  render() {
    return (
      <Page>
        <Title>moe logic <span>presents</span></Title>

        <PageBack live={this.isLiveMode()}>
          <EventListing
            symbol="⊻"
            title="moe logic + dable"
            number="01"
            timeCode={new Date('2017-06-02T21:00:00+01:00')}
            place="the nest"
          />

          {this.isLiveMode() && <TweetStream />}
        </PageBack>

      </Page>
    );
  }
}

export default App;
