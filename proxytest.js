const express = require("express");
const httpProxy = require("http-proxy");
var proxy = httpProxy.createProxyServer(
    {
        toProxy: true
    }
);


const app = express();

app.get("*", function (req, res) {
    proxy.web(req, res, { target: 'http://www.google.com/' });
    console.log(22222)
});

app.listen(3000);