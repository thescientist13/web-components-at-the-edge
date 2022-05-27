import arc from '@architect/functions';
import fetch from 'node-fetch';
import { renderFromHTML } from 'wc-compiler';

export async function handler () {
  const cssPath = process.env.NODE_ENV === 'sandbox'
    ? arc.static('/styles/main.css')
    : '/styles/main.css';
  const artists = await fetch('https://www.analogstudios.net/api/artists').then(resp => resp.json());
  const { html } = await renderFromHTML(`
    ${artists.map(artist => {
    return `
      <wc-card>
        <h2 slot="title">${artist.name}</h2>
        <img slot="image" src="${artist.imageUrl}" alt="${artist.name}"/>
      </wc-card>
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
          <link rel="stylesheet" href="${cssPath}"/>
          <style>
            header {
              background-color: var(--color-secondary);
              color: white;
              text-decoration: underline;
              text-align: center;
              padding: 15px;
            }
          </style>
        </head>
        <body>
          <header>
            <h1><a href="https://github.com/thescientist13/web-components-at-the-edge" title="presentation repo" target="_blank" rel="noopener noreferrer">Web Components @ The Edge</a></h1>
            <h2>(Demo #2)</h2>
          </header>

          <main>
            ${html.replace('<html><head></head><body>', '').replace('</body></html>', '')}

            <h3>Artists Length: ${artists.length}</h3>
          </main>
        </body>
      </html>
      `
  };
}