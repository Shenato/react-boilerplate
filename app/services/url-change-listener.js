const { pushState } = history;

history.pushState = function () {
  pushState.apply(history, arguments);
};

window.addEventListener('popstate', function (e) {});
