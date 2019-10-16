import React, { Component } from 'react';
import styled from 'styled-components';

const TweetList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TweetItem = styled.li`
  margin-bottom: 1rem;
  font-size: ${props => (props.i === 0 ? '2rem' : '1rem')};
  opacity: ${props => (10 - props.i) / 10};

  @media(max-width: 800px) {
    font-size: 1rem;
  }
`;

const Username = styled.span`
  margin-right: .5em;
  color: gray;
`;

const Text = styled.span`

`;

export default class TweetStream extends Component {
  constructor() {
    super();
    this.state = { tweets: [] };
  }

  updateStream = tweets => this.setState({ tweets });

  fetchTweets = () =>
    new Promise((resolve, reject) => {
      fetch('https://tweets.moelogic.xyz')
        .then(response => response.json())
        .then(json => resolve(json.statuses))
        .catch(error => reject(error));
    });

  async refreshStream() {
    const tweets = await this.fetchTweets();
    if (tweets) {
      this.updateStream(tweets);
    }
  }

  componentDidMount() {
    this.refreshStream();
    setInterval(this.refreshStream.bind(this), 10 * 1000);
  }

  render() {
    const { tweets } = this.state;

    return (
      <TweetList>
        {tweets.map(({ user, text }, i) =>
          <TweetItem key={i} i={i}>
            <Username>@{user.screen_name}</Username>
            <Text>{text}</Text>
          </TweetItem>
        )}
      </TweetList>
    );
  }
}
