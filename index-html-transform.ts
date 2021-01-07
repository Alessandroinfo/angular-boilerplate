import {TargetOptions} from '@angular-builders/custom-webpack';
import * as cheerio from 'cheerio';

export default (targetOptions: TargetOptions, indexHtml: string) => {
  if (targetOptions.configuration.includes('cordova-production')) {
    const $ = cheerio.load(indexHtml);
    // Put type="text/javascript" for Cordova MIME error

    // Put Cordova script
    $('body').prepend(`<script type="text/javascript" src="cordova.js"></script>`);
    console.error($.html());
    return $.html();
  }
  return indexHtml;
};
