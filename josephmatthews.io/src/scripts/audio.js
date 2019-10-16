const audio = new Object();
export default audio;

audio.cont = new AudioContext();

audio.playSine = function(freq, start, length) {
  var cont = this.cont;
  var osc = cont.createOscillator();
  osc.type = 'sine';
  osc.frequency.value = freq;
  osc.connect(cont.destination);
  osc.start(start);
  osc.stop(start + length);
};

audio.scale = function(note, octave) {
  var base = {
    C: 16.35,
    Cs: 17.32,
    D: 18.35,
    Ds: 19.45,
    E: 20.60,
    F: 21.83,
    Fs: 23.12,
    G: 24.50,
    Gs: 25.96,
    A: 27.50,
    As: 29.14,
    B: 30.87
  };

  note = base[note];
  if (octave === 0) {
    return note;
  } else {
    return note * Math.pow(2, octave);
  }
};

audio.playSample = function(path, delay) {
  const cont = this.cont;
  var request = new XMLHttpRequest();

  request.open('GET', path, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    var synthAudio = request.response;
    cont.decodeAudioData(synthAudio, function(buffer) {
      var sourceBuffer = cont.createBufferSource();
      sourceBuffer.buffer = buffer;
      sourceBuffer.connect(cont.destination);
      sourceBuffer.start(cont.currentTime);
    });
  };

  if (delay) {
    setTimeout(function() {
      request.send();
    }, delay * 1000);
  } else {
    request.send();
  }
};

audio.playSequence = function(array, delay) {
  function fireAudioSequence(array) {
    for (var i in array) {
      audio.playSample(array[i].file, array[i].delay);
    }
  }

  function fireMixedSequence(array) {
    array.forEach(function(item) {
      setTimeout(function() {
        item.selector.className += ' ' + item.activation;
        audio.playSample(item.file);
      }, item.delay * 1000, item);
    });
  }

  /* It's just an audio sequence */
  if (array[0].selector === undefined) {
    if (delay) {
      setTimeout(function() {
        fireAudioSequence(array);
      }, delay * 1000);
    } else {
      fireAudioSequence(array);
    }
  } else {
    fireMixedSequence(array);
  }
};
