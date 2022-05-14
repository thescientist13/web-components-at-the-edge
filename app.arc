@app
wc-at-the-edge

@http
/
  method get
  src demo/get-index

# basic example
/demo1
  method get
  src demo/get-demo1

# data fetching, <slot>
/demo2
  method get
  src demo/get-demo2

# progressive hydration
# TODO

@aws
# profile default
region us-east-1
architecture arm64