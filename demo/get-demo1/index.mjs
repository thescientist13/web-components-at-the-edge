// learn more about HTTP functions here: https://arc.codes/http
import { renderToString } from 'wc-compiler';

export async function handler () {
  const { html } = await renderToString(new URL('./header.component.js', import.meta.url));

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
        </head>
        <body class="padding-32">
          <wcc-header>
            ${html}
          </wcc-header>
        </body>
      </html>
      `
  };
}