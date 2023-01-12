const through = require("through2");

let counter = 0;
function write(buffer, encoding, next) {
  if (++counter % 2 == 1) {
    this.push(buffer.toString().toLowerCase());
  } else {
    this.push(buffer.toString().toUpperCase());
  }
  next();
}
function done(end){
    end()    
}
const stream = through(write, done);

process.stdin.pipe(stream).pipe(process.stdout);
