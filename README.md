[![Netlify Status](https://api.netlify.com/api/v1/badges/3ab1833c-244c-4066-bc90-b901d74ace3c/deploy-status)](https://app.netlify.com/sites/magnificent-caramel-f19440/deploys)

# web-components-at-the-edge

Slides for my virtual track talk at [OpenJS World (2022)](https://events.linuxfoundation.org/openjs-world/) titled [_Web Components at the Edge_](https://sched.co/11loQ).  Video recording is [available on YouTube](https://youtu.be/ba83Zo8kf68).  [Hosted on Netlify](https://practical-goldberg-a5ae74.netlify.app/) and built using [GreenwoodJS](https://www.greenwoodjs.io) with the [**greenwood-starter-presentation** theme pack plugin](https://github.com/thescientist13/greenwood-starter-presentation/).

> _To operate the deck in full screen, click the "Presenter mode" button and use the left and right arrows keys to navigate through the slides.  Hit `ESC` to exit presenter mode._

## Local Setup

If you would like to run this project locally
1. Have [NodeJS](https://nodejs.org/) LTS installed (or `nvm use` if you have nvm installed)
1. Clone or fork this repo
1. Install dependencies
    ```sh
    $ npm ci
    ```

## Presentation
To run the slides locally, run `npm start`

You can now view the slide deck by opening `localhost:8080` in your browser.

## Demo

There are two runtimes used for the demo section of this talk:

- _Serverless_ - Using [**Architect**](https://arc.codes/), a serverless framework for **AWS**.  Code can be found in the _serverless/_ directory.
- _Edge Functions_ - Powered by [**Netlify** running Deno](https://docs.netlify.com/netlify-labs/experimental-features/edge-functions/). Code can be found in the _netlify/_ directory.

> **Note**: All demos use my project [**wcc**](https://github.com/ProjectEvergreen/wcc/) for rendering native custom elements.  It is still a WIP, so some minor refactoring may be ongoing.

### Serverless
There are three paths available for this demo, all available from the `/demo` path
- `/demo1` - Basic example
- `/demo2` - Example with data fetching
- `/demo3` - Example with progressive hydration

#### Live
This demo has two live environments:
- [Production](https://wc-at-the-edge.thegreenhouse.io/demo) (used in the presentation)
- [Preview](https://preview-wc-at-the-edge.thegreenhouse.io/demo) (preview environment for PRs)

#### Local
To view the demo locally to start Architect's sandbox, run
```sh
$ npm demo:serverless
```

### Edge

There are three paths available for this demo, all available from the `/demo` path
- `/demo1` Basic example
- `/demo2` Example with data fetching
- `/demo3` Example with geo-location

#### Live
This demo has two live environments:
- [Production](https://magnificent-caramel-f19440.netlify.app/demo) (used in the presentation and shares the same environment)
- Preview - For PRs, and will be dependent on PR preview URL.

#### Local
To view the demo locally to start Netlify's sandbox, run
```sh
$ npm demo:edge
```