const through = require("through2");
const http = require("http");
function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}
function end(done) {
  done();
}
const stream = through(write, end);
const server = http.createServer(function (req, res) {
  if (req.method === "POST") {
    req.pipe(stream).pipe(res);
  }else{
    res.end("this is not a post request")
  }
});

server.listen(process.argv[2]);
