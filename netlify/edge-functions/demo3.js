import '../../node_modules/wc-compiler/src/dom-shim.js';

import Greeting from './components/greeting.js';

export default async function (request, context) {
  console.debug(context.geo);

  const countryCode = context.geo.country.code || 'UNKNOWN';
  const countryName = context.geo.country.name || 'UNKNOWN';
  const greeting = new Greeting(countryCode, countryName);

  greeting.connectedCallback();

  const response = new Response(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>WC @ The Edge</title>
      </head>
      <body>
        <wc-greeting>
          ${greeting.getInnerHTML({ includeShadowRoots: true })}
          <details slot="details">
            <pre>
              ${JSON.stringify(context.geo)}
            </pre>
          </details>
        </wc-greeting>
      </body>
    </html>
  `);

  response.headers.set('content-type', 'text/html');

  return response;
}