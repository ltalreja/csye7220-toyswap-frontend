const express = require('express')
const app = express()
const port = 3000

const request = require('request');

const runtimeEnv = process.argv[2];
let domainName = "http://nginx-ingress-controller.api.svc.cluster.local:80"

if (runtimeEnv === "prod") {
    domainName = "http://nginx-ingress-controller.api.svc.cluster.local:80"
    // domainName = "a6c37003cea4c4884b06f28ec772fffe-2133634489.us-east-1.elb.amazonaws.com:80"
}
// console.log(${domainName});
console.log("Runtime Environment: " + runtimeEnv);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
    req.start = Date.now();
    next();
});


app.use('/', express.static('build'))
app.use('/', (req, res) => {
    console.log(req.url);
    let url = domainName + req.url;
    req.pipe(request(url)).pipe(res);
})

app.use(function (req, res, next) {
    let endTime = Date.now() - req.start;
    req.end();
    next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))