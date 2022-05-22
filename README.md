[![Netlify Status](https://api.netlify.com/api/v1/badges/3ab1833c-244c-4066-bc90-b901d74ace3c/deploy-status)](https://app.netlify.com/sites/magnificent-caramel-f19440/deploys)

# web-components-at-the-edge

Slides for my virtual track talk at [OpenJS World (2022)](https://events.linuxfoundation.org/openjs-world/) titled [_Web Components at the Edge_](https://sched.co/11loQ).  [Hosted on Netlify](https://practical-goldberg-a5ae74.netlify.app/) and built using [GreenwoodJS](https://github.com/ProjectEvergreen/greenwood) with the [**greenwood-starter-presentation** theme pack plugin](https://github.com/thescientist13/greenwood-starter-presentation/).

> _To operate the deck in full screen, click the "Presenter mode" button and use the left and right arrows keys to navigate through the slides.  Hit `ESC` to exit presenter mode._

## Local Setup

If you would like to run this project locally
1. Have [NodeJS](https://nodejs.org/) LTS installed
1. Clone or fork this repo
1. Install dependencies
    ```sh
    # npm
    $ npm ci
    ```

## Presentation
To run the slide locally, run `npm start`

You can now run the deck by opening `localhost:8080` in your browser.

## Demo

There are three paths available per demo
- `/demo1` (basic example)
- `/demo2` (example with data fetching)
- `/demo3` (example with progressive hydration)

> **Note**: Edge demo only contains examples 1 and 2, and does not use **wc-compiler** at this time.

### Serverless
The serverless demo is implemented using **Architect**, a serverless framework for **AWS**.  A technical diagram can be found in the presentation.

#### Live
This demo has two live environments:
- [Production](https://wc-at-the-edge.thegreenhouse.io/) (used in the presentation)
- [Preview](https://preview-wc-at-the-edge.thegreenhouse.io/) (preview environment for PRs)

#### Local
To view the demo locally to start Architect's sandbox, run
```sh
$ npm demo:serverless
```

### Edge

The edge demo is implemented using **Netlify Edge Functions**, powered by **Deno**.

#### Live
This demo has two live environments:
- [Production](https://magnificent-caramel-f19440.netlify.app/) (used in the presentation and shares the same environment)
- Preview - For PRs, and will be dependent on PR preview URL.

The serverless demo environment for the presentation is hosted [TBD]().

#### Local
To view the demo locally to start Netlify's sandbox, run
```sh
$ npm demo:edge
```