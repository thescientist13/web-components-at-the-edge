export async function handler () {
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
            <template shadowroot="open">
              <style>
                h1 {
                  text-align: center;
                  color: green;
                }
              </style>
            
              <header>
                <h1>Hello WC @ The Edge!</h1>
              </header>
            </template>
          </wcc-header>

          <wcc-footer>
            <template shadowroot="open">
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
          </wcc-footer>
        </body>
      </html>
    `
  };
}