@app
wc-at-the-edge

@http
/
  method get
  src serverless/get-index

# Demo Table of Contents
/demo
  method get
  src serverless/get-demo

# basic example
/demo1
  method get
  src serverless/get-demo1

# data fetching, <slot>
/demo2
  method get
  src serverless/get-demo2

# progressive hydration
/demo3
  method get
  src serverless/get-demo3

@static
  folder serverless/public

@shared
  src serverless/public

@aws
# profile default
region us-east-1
architecture arm64