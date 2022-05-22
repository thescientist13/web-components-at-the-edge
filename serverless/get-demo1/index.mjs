import arc from '@architect/functions';

export async function handler () {
  const cssPath = process.env.NODE_ENV === 'sandbox'
    ? arc.static('/styles/main.css')
    : '/styles/main.css';

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
        </head>
        <body>
          <wcc-header>
            <template shadowroot="open">
              <style>
                header {
                  background-color: var(--color-secondary);
                  color: white;
                  text-decoration: underline;
                  text-align: center;
                  padding: 15px;
                }

                h1, h2 {
                  margin: 0;
                  padding: 0;
                }

                main {
                  min-height: 500px;
                }
              </style>
            
              <header>
                <h1>Web Components @ The Edge</h1>
                <h2>(Demo #1)</h2>
              </header>
            </template>
          </wcc-header>

          <main>
            <h3>Hello WC @ The Edge! 👋</h3>
          </main>

          <wcc-footer>
            <template shadowroot="open">
              <style>
                footer {
                  text-align: center;
                  background-color: #192a27;
                }
            
                span {
                  color: var(--color-accent);
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