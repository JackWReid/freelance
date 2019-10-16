import React from 'react';
import ReactDOM from 'react-dom';
import audio from './audio.js';
import scroll from './scroll.js';
import sequences from './sequences.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='app'>Hello {this.props.name}</div>
    );
  }
}

const mountNode = document.getElementById('appWrap');
ReactDOM.render(<App name='Jack' />, mountNode);

/*
function openingTones() {
  audio.playSine(audio.scale('D', 4), 0.5, 0.2);
  audio.playSine(audio.scale('Ds', 4), 1.3, 0.2);
  audio.playSine(audio.scale('C', 4), 2, 0.2);
  audio.playSine(audio.scale('G', 3), 3, 0.4);
}
*/

audio.playSequence(sequences.opening);

window.onscroll = function() {
  scroll.detectFirst('game-audio', function() {
    audio.playSequence(sequences.cta);
  });
};
