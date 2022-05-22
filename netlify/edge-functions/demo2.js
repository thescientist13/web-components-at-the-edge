import '../../node_modules/wc-compiler/src/dom-shim.js';

import Card from './components/card.js';

export default async function () {
  const artists = await fetch('https://www.analogstudios.net/api/artists').then(resp => resp.json());
  const card = new Card();

  card.connectedCallback();
  
  const html = artists.map(artist => {
    return `
      <wc-card>
        ${card.getInnerHTML({ includeShadowRoots: true })}

        <h2 slot="title">${artist.name}</h2>
        <img slot="image" src="${artist.imageUrl}" alt="${artist.name}"/>
      </wc-card>
      <hr/>
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
          body {
            width: 70%;
            margin: 0px auto;
            text-align: center;
          }
          
          h1 {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>Artists Length: ${artists.length}</h1>
        ${html}
      </body>
    </html>
  `);

  response.headers.set('content-type', 'text/html');

  return response;
}