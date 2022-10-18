const DEBOUNCE_INTERVAL = 500; // ms

export const setDebounce = function (cb) {
  var lastTimeout = null;

  return function () {
    var parameters = arguments;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      cb.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};
