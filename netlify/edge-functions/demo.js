export default async function handler () {
  const response = new Response(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>WC @ The Edge</title>
        <style>
          ol { width: 25%; margin: 0 auto; }
        </style>
      </head>
      <body>
        <div>
          <ol>
            <li><a href="/demo1" alt="Demo for basic example">Demo #1 (basic example)</a></li>
            <li><a href="/demo2" alt="Demo for data fetching example">Demo #2 (data fetching example)</a></li>
            <li><a href="/demo3" alt="Demo for progressive hydration">Demo #3 (progressive hydration example)</a></li>
          </ol>
        </div>
      </body>
    </html>
  `);

  response.headers.set('content-type', 'text/html');

  return response;
}