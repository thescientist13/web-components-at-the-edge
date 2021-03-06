export default async function handler () {
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
          
          header {
            background-color: var(--color-secondary);
            color: white;
            text-decoration: underline;
            text-align: center;
            padding: 15px;
          }
          
          a, a:visited {
            color: var(--color-accent);
          }
          
          ul {
            margin: 0 auto;
            font-size: 1em;
            width: 30%;
            min-width: 500px;
            display: block;
          }          
          
          li { 
            margin: 1em;
            padding-left: 5px;
            list-style-type: none;
            color: var(--color-accent);
          }
          
          p {
            color: white;
            text-align: center;
            margin: 25px auto;
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
          <h1><a href="https://github.com/thescientist13/web-components-at-the-edge" title="presentation repo" target="_blank" rel="noopener noreferrer">Web Components @ The Edge</a></h1>
          <h2>(Edge Demos)</h2>
        </header>
        <div>
          <ul>
            <li>- <a href="/demo1" alt="Demo for basic example">Demo #1 (basic example)</a></li>
            <li>- <a href="/demo2" alt="Demo for data fetching example">Demo #2 (data fetching example)</a></li>
            <li>- <a href="/demo3" alt="Demo for geolocation">Demo #3 (geolocation example)</a></li>
          </ol>
        </div>
      </body>
    </html>
  `);

  response.headers.set('content-type', 'text/html');

  return response;
}