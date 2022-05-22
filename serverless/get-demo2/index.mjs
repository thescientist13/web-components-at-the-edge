import fetch from 'node-fetch';
import { renderFromHTML } from 'wc-compiler';

export async function handler () {
  const artists = await fetch('https://www.analogstudios.net/api/artists').then(resp => resp.json());
  const { html } = await renderFromHTML(`
    ${artists.map(artist => {
    return `
      <wc-card>
        <h2 slot="title">${artist.name}</h2>
        <img slot="image" src="${artist.imageUrl}" alt="${artist.name}"/>
      </wc-card>
      <hr/>
    `;
  }).join('')}
  `, [
    new URL('./node_modules/@architect/shared/components/card.mjs', import.meta.url)
  ]);

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
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

          ${html.replace('<html><head></head><body>', '').replace('</body></html>', '')}
        </body>
      </html>
      `
  };
}