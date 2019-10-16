import React, { Component } from 'react';
import styled from 'styled-components';
import sample from 'lodash/sample';

const Flex = styled.div`
  display: flex;

  @media(max-width: 800px) {
    display: block;
  }
`;

const DeadBack = ({ children }) =>
  <Flex>
    {children}
  </Flex>;

const getAverageVolume = array => {
  return array.reduce((a, b) => a + b) / array.length;
};

const colorSelect = () => sample(['gray', 'teal', 'aqua', 'pink']);

class LiveBack extends Component {
  constructor() {
    super();
    this.state = {
      volume: 1,
      flashLevel: 3.5,
    };
  }

  componentDidMount = () => {
    const context = new AudioContext();
    const analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 2048;

    navigator.getUserMedia(
      { audio: true },
      stream => {
        const source = context.createMediaStreamSource(stream);
        const filter = context.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 100;
        filter.gain.q = 0;
        source.connect(filter);
        filter.connect(analyser);

        setInterval(() => {
          const dataArray = new Uint8Array(2048 / 2);
          analyser.getByteFrequencyData(dataArray);
          this.setState({ volume: getAverageVolume(dataArray) });
        }, 50);
      },
      error => console.error(error)
    );
  };

  updateFlashLevel = e => this.setState({ flashLevel: e.target.value });

  render() {
    const { volume, flashLevel } = this.state;
    console.log();

    return (
      <Flex>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundColor: volume > flashLevel ? colorSelect() : 'black',
          }}
        />
        {this.props.children}
      </Flex>
    );
  }
}

export default class PageBack extends Component {
  render() {
    if (this.props.live) {
      return <LiveBack>{this.props.children}</LiveBack>;
    } else {
      return <DeadBack>{this.props.children}</DeadBack>;
    }
  }
}
