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
      </head>
      <body class='padding-32'>
        <wc-header>
          ${header.getInnerHTML({ includeShadowRoots: true })}
        </wc-header>

        <wc-footer>
          ${footer.getInnerHTML({ includeShadowRoots: true })}
        </wc-footer>
      </body>
    </html>
  `);

  response.headers.set('content-type', 'text/html');

  return response;
}