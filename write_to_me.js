const {Writable} = require('node:stream');

class MyWritable extends Writable{
    _write(chunk, encoding, callback){
        console.log('writing:',chunk.toString())
        callback()
    }
}

const myStream = new MyWritable()
process.stdin.pipe(myStream)