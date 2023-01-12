const http = require("http");

const request = http.request("http://localhost:8099", { method: "POST" }, (res) => {
    res.pipe(process.stdout)
});

process.stdin.pipe(request);