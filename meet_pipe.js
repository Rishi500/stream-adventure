const fs = require('node:fs')
const file = process.argv[2]

fs.createReadStream(file).pipe(process.stdout)