(function () {
  var on = sessionStorage.getItem('polyfill') === '1';
  var polyfillUrl = new URL('../model-element-polyfill/model-element-polyfill.js', document.currentScript.src).href;

  if (on && !('HTMLModelElement' in window)) {
    document.write('<script type="module" src="' + polyfillUrl + '"><\/script>');
  }

  document.write(
    '<a class="polyfill-toggle" href="#">' +
    '<span class="polyfill-toggle-label">Polyfill</span>' +
    '<span class="polyfill-toggle-track"' + (on ? ' style="background:#34c759"' : '') + '>' +
    '<span class="polyfill-toggle-knob"' + (on ? ' style="transform:translateX(16px)"' : '') + '></span>' +
    '</span></a>'
  );

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.polyfill-toggle')) return;
    e.preventDefault();
    if (on) {
      sessionStorage.removeItem('polyfill');
    } else {
      sessionStorage.setItem('polyfill', '1');
    }
    location.assign(location.pathname);
  });
})();
