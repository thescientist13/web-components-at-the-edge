import '../../node_modules/wc-compiler/src/dom-shim.js';

import Header from './components/header.js';
import Greeting from './components/greeting.js';

export default async function (request, context) {
  console.debug(context.geo);
  const countryCode = context.geo.country.code || 'UNKNOWN';
  const countryName = context.geo.country.name || 'UNKNOWN';
  const header = new Header();
  const greeting = new Greeting(countryCode, countryName);

  greeting.connectedCallback();
  header.connectedCallback();

  const response = new Response(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>WC @ The Edge</title>
        <style>
          :root, :host {
            --color-primary: rgb(12, 36, 42);
            --color-secondary: rgb(110, 176, 6);
            --color-tertiary: rgb(110, 176, 6);
            --color-accent: rgb(250, 217, 28);
          }
          
          * {
            padding: 0;
            margin: 0;
          }
          
          body {
            background-color: var(--color-primary);
            font-size: 1.5em;
            font-family: Garamond;
          }
          
          main {
            min-height: 500px;
          }
          
          h1, h3 {
            margin: 20px;
            text-align: center;
            color: white;
          }
        </style>
      </head>
      <body>
        <header>
          ${header.getInnerHTML({ includeShadowRoots: true })}
          <h2 slot="demo">(Demo #3)</h2>
        </header>

        <main>
          <wc-greeting>
            ${greeting.getInnerHTML({ includeShadowRoots: true })}
            <details slot="details">
              <pre>
                ${JSON.stringify(context.geo)}
              </pre>
            </details>
          </wc-greeting>
        </main>
      </body>
    </html>
  `);

  response.headers.set('content-type', 'text/html');

  return response;
}