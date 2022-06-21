module.exports = (targetOptions, indexHtml) => {
  if (targetOptions && targetOptions.configuration?.includes('cordova-production')) {
    const i = indexHtml.indexOf('</head>');

    /**
     * https://github.com/angular/angular/issues/22509
     * Prevent cordova.js 5.2.4+ routing bug
     **/
    const cordovaScripts = `
    <script>
      if (/^app/.test(location.host)) {
        window.addEventListener = function () {
            EventTarget.prototype.addEventListener.apply(this, arguments);
        };
        window.removeEventListener = function () {
            EventTarget.prototype.removeEventListener.apply(this, arguments);
        };
        document.addEventListener = function () {
            EventTarget.prototype.addEventListener.apply(this, arguments);
         };
        document.removeEventListener = function () {
            EventTarget.prototype.removeEventListener.apply(this, arguments);
        };
        document.write('<script src="cordova.js"><\\/script>');
      }
    </script>
    `;
    return `${indexHtml.slice(0, i)}
            ${cordovaScripts}
            ${indexHtml.slice(i)}`;
  } else {
    return indexHtml;
  }
};
