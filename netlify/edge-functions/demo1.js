import '../../node_modules/wc-compiler/src/dom-shim.js';

import Footer from './components/footer.js';
import Header from './components/header.js';

export default async function () {
  const footer = new Footer();
  const header = new Header();

  footer.connectedCallback();
  header.connectedCallback();
  
  const response = new Response(`
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
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
        <wc-header>
          ${header.getInnerHTML({ includeShadowRoots: true })}
          <h2 slot="demo">(Demo #1)</h2>
        </wc-header>

        <main>
          <h3>Hello WC @ The Edge! 👋</h3>
        </main>

        <wc-footer>
          ${footer.getInnerHTML({ includeShadowRoots: true })}
        </wc-footer>
      </body>
    </html>
  `);

  response.headers.set('content-type', 'text/html');

  return response;
}