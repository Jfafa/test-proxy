const express = require("express");


const app = express();

app.get("*", function (req, res) {
    console.log("asdasdasdas")
    res.send({ok: "ok"})
});

app.listen(4000);