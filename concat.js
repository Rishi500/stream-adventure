const concat = require("concat-stream");

process.stdin.pipe(concat(function (body) {
    const str = body.toString().split("").reverse().join("")
    process.stdout.write(str)
}))
