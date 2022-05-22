export default async function () {

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
          <template shadowroot='open'>
            <style>
              h1 {
                text-align: center;
              }
            </style>
            <header>
              <h1>Hello WC @ The Edge!</h1>
            </header>
          </template>
        </wc-header>

        <wc-footer>
          <template shadowroot='open'>
            <style>
              footer {
                text-align: center;
              }
          
              span {
                color: purple;
              }
            </style>
            <footer>
              <span>&copy; ${ new Date().getFullYear() }</span>
            </footer>
          </template>
        </wc-footer>
      </body>
    </html>
  `);

  response.headers.set('content-type', 'text/html');

  return response;
}