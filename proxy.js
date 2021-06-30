const express = require("express");
const httpProxy = require("http-proxy");
const proxy = httpProxy.createProxyServer({
  toProxy: true,
});

console.log("proxy created")
const app = express();
console.log("express")
proxy.on("error", function (err, req, res) {
  res.writeHead(500, {
    "Content-Type": "text/plain",
  });
  res.end(err);
});
console.log("proxy.on")

app.get("*", function (req, res) {
  try {
      console.log("req started")
    console.log(req.url);
    const auth = Buffer.from(
      "user-juandoorfeed-sessionduration-10:password123",
      "utf-8"
    ).toString("base64");

    console.log("222")

    // proxy.web(req, res, {
    //     target: {host: "194.163.138.42", port: 3010},
    //     headers: { "Proxy-Authorization": `Basic ${auth}` }
    // })

    proxy.web(req, res, {
      target: { host: "fr.smartproxy.com", port: 40089 },
      headers: { "Proxy-Authorization": `Basic ${auth}` },
    });
  } catch (error) {
    console.log(error);
    res.writeHead(500, {
      "Content-Type": "text/plain",
    });
    res.end(err);
  }
});
app.listen(3000);

