module.exports = (targetOptions, indexHtml) => {
  let newIndexHtml = indexHtml;

  /*
   * Preloaded CSS resource defer-non-critical-css
   * https://web.dev/defer-non-critical-css/
   */

  // Regex for getting the whole link tag if there is a stylesheet word
  const linkRegExp = /<\s*link.*stylesheet.*\/?[^<>]*>/; // todo get exatc the link with styleshh

  // If match with the index
  const match = newIndexHtml.match(linkRegExp);

  if (match.length) {
    // Getting <link> tag
    let linkHTMLTag = match[0];

    // Edits the tag to be: rel="preload", as="style", onload="this.media='all';this.onload=null;this.rel='stylesheet'"
    linkHTMLTag = linkHTMLTag.replace(
      'rel="stylesheet"',
      'rel="preload" as="style"'
    );
    linkHTMLTag = linkHTMLTag.replace(
      new RegExp('onload=".*"', 'gm'),
      "onload=\"this.media='all';this.onload=null;this.rel='stylesheet'\""
    );

    console.log(linkHTMLTag);

    // newIndexHtml = indexHtml.replace(new RegExp(linkRegExp, 'gm'),linkHTMLTag);
  }

  // Cordova index management
  // TODO: Check if this it's correct when enabled
  if (
    targetOptions &&
    targetOptions.configuration?.includes('cordova-production')
  ) {
    const i = newIndexHtml.indexOf('</head>');

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
    newIndexHtml = `
    ${newIndexHtml.slice(0, i)}
    ${cordovaScripts}
    ${newIndexHtml.slice(i)}
    `;
  }
  return newIndexHtml;
};
