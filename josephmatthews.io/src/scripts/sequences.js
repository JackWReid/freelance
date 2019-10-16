const sequences = new Object();

sequences.opening = [
  {
    file: './audio/click.wav',
    delay: 0.5
  },
  {
    file: './audio/click.wav',
    delay: 1.3
  },
  {
    file: './audio/click.wav',
    delay: 2
  },
  {
    file: './audio/success.wav',
    delay: 3
  }
];

sequences.cta = [
  {
    file: './audio/click.wav',
    selector: document.getElementById('cta1'),
    activation: 'cta-on',
    delay: 0
  },
  {
    file: './audio/click.wav',
    selector: document.getElementById('cta2'),
    activation: 'cta-on',
    delay: 0.7
  },
  {
    file: './audio/click.wav',
    selector: document.getElementById('cta3'),
    activation: 'cta-on',
    delay: 1.7
  },
  {
    file: './audio/click.wav',
    selector: document.getElementById('cta4'),
    activation: 'cta-on',
    delay: 3
  }
];

export default sequences;
