const scroll = new Object();
export default scroll;

scroll.markers = {
  'intro-header': false,
  'calls-to-action': false,
  'game-audio': false,
  'film-sound': false,

  setMarker: function(marker) {
    this[marker] = true;
  },

  addMarker: function(marker) {
    this[marker] = false;
  }
};

scroll.detectFirst = function(element, callback) {
  var marker = scroll.markers[element];
  var elementInView = scroll.isInView(element);

  /* We've already seen the element, and the marker
  *  has been set already. */
  if (marker === true) {
    return false;
  } else if (marker === false) {
    /* Haven't seen the element before, and it's
    *  now in view. Set the marker and fire the
    *  callback. */
    if (elementInView === true) {
      scroll.markers.setMarker(element);
      callback();
    } else {
      /* Haven't seen the element before, can't see
      *  it right now, do nothing. */
      return false;
    }
  }
};

scroll.isInView = function(element) {
  var node = document.getElementById(element);
  var elementHeight = node.clientHeight;
  var elementStart = node.offsetTop;
  var elementEnd = elementStart + elementHeight;

  var scrollAmount = window.scrollY;
  var windowHeight = window.innerHeight;
  var bottomEdge = window.scrollY + windowHeight;

  if (elementStart < bottomEdge && scrollAmount < elementEnd) {
    return true;
  } else {
    return false;
  }
};

scroll.whileInView = function(element, callback) {
  var node = document.getElementById(element);
  var elementHeight = node.clientHeight;
  var elementStart = node.offsetTop;
  var elementEnd = elementStart + elementHeight;

  var scrollAmount = window.scrollY;
  var windowHeight = window.innerHeight;
  var bottomEdge = window.scrollY + windowHeight;

  if (elementStart < bottomEdge && scrollAmount < elementEnd) {
    callback();
  }
};
