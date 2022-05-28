import '../../node_modules/wc-compiler/src/dom-shim.js';

import Card from './components/card.js';
import Header from './components/header.js';

export default async function () {
  const artists = await fetch('https://www.analogstudios.net/api/artists').then(resp => resp.json());
  const card = new Card();
  const header = new Header();

  card.connectedCallback();
  header.connectedCallback();
  
  const html = artists.map(artist => {
    return `
      <wc-card>
        ${card.getInnerHTML({ includeShadowRoots: true })}

        <h2 slot="title">${artist.name}</h2>
        <img slot="image" src="${artist.imageUrl}" alt="${artist.name}"/>
      </wc-card>
    `;
  }).join('');

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
          <h2 slot="demo">(Demo #2)</h2>
        </header>

        <main>
          ${html}

          <h3>Artists Length: ${artists.length}</h3>
        </main>
      </body>
    </html>
  `);

  response.headers.set('content-type', 'text/html');

  return response;
}