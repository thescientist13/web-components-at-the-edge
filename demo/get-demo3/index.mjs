import arc from '@architect/functions';
import { renderToString } from 'wc-compiler';
import path from 'path';

export async function handler () {
  const { html: header, metadata: headerMeta } = await renderToString(new URL('./header.js', import.meta.url));
  const { html: footer } = await renderToString(new URL('./footer.js', import.meta.url));
  const { html: test, metadata: testMetadata } = await renderToString(new URL('./test.js', import.meta.url));

  const eagerJs = [];
  const lazyJs = [];

  for (const asset in testMetadata) {
    const a = testMetadata[asset];

    a.tagName = asset;

    lazyJs.push(a);
  }

  for (const asset in headerMeta) {
    const a = headerMeta[asset];

    a.tagName = asset;

    eagerJs.push(a);
  }

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
            p#spacer {
              height: 2000px;
            }
          </style>

          ${
            eagerJs.map(script => {
              const publicPath = `/components/${path.basename(script.moduleURL.pathname)}`;

              return `<script type="module" src="${arc.static(publicPath)}"></script>`;
            }).join('\n')
          }
        
          ${
            lazyJs.map(script => {
              const publicPath = `/components/${path.basename(script.moduleURL.pathname)}`;

              return `
                <script type="module">
                  let initialized = false;
  
                  window.addEventListener('load', () => {
                    let options = {
                      root: null,
                      rootMargin: '20px',
                      threshold: 1.0
                    }
  
                    let callback = (entries, observer) => {
                      entries.forEach(entry => {
                        console.debug({ entry })
                        if(!initialized && entry.isIntersecting) {
                          alert('Intersected ${script.tagName}, time to hydrate!!!');
                          initialized = true;
                          import('${arc.static(publicPath)}');
                        }
                      });
                    }
  
                    let observer = new IntersectionObserver(callback, options);
                    let target = document.querySelector('${script.tagName}');
  
                    observer.observe(target);
                  })
                </script>
              `;
            }).join('\n')
          }
        </head>
        <body>
          <wc-header>
            ${header}
          </wc-header>

          <h1>Home Page</h1>

          <p id="spacer"></p>

          <wc-test color="green">
            ${test}
          </wc-test>

          <wc-footer>
            ${footer}
          </wc-footer>
        </body>
      </html>
      `
  };
}