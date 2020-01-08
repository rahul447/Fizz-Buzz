import express from "express";
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
import mwErrorHandler from "./middlewares/mwErrorHandler";
import fizzBuzzRouter from "./endpoints/fizzbuzz/fizzbuzz.router";

let app = express(),
    {NODE_ENV} = process.env,
    nodeEnv = NODE_ENV || "staging",
    config = Object.freeze(require("../config/" + nodeEnv)),
    urlPrefix = config.urlPrefix;

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.use(mwErrorHandler);

app.use(urlPrefix + "/healthcheck", (req, res) => {
    res.status(200).send("OK");
});

app.use(urlPrefix + "/", fizzBuzzRouter);

app.set("port", config.http.port);

/// catch 404 and forwarding to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    return res.status(404).json({ code: 404, message: "not found", data: {} });
});


app.listen(app.get('port'), () => {
    console.log(new Date(), "Server has started and is listening on port: " + app.get("port"));
    console.log("============Welcome to Fizz Buzz Problem===============");
    console.log("Mode:", config.mode);
});

module.exports = app;
