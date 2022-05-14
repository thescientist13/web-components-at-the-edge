@app
wc-at-the-edge

@http
/
  method get
  src demo/get-index

/demo1
  method get
  src demo/get-demo1

@aws
# profile default
region us-east-1
architecture arm64