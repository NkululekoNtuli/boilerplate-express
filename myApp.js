require('dotenv').config()
let express = require('express');
let bodyParser = require("body-parser")
let app = express();

// console.log("Hello World");

// app.get("/", function(rep, res){
//     res.send("Hello Express")
// });

app.use("/public", express.static(__dirname + "/public"));

app.use(function(req, res, next){
    consol/log(req.method, req.path, "-", rep.ip);
    next();
});

app.use(bodyParser.urlencoded({extends:false}));

app.get ("/",  function(rep, res){
    absolutePath = __dirname + "/views/index.html";
    res.send(absolutePath);
});

app.get("/json", function(rep, res){
    if (process.env.MESSAGE_STYLE === "uppercase") res.json({"message": "HELLO JSON"})
    res.json({"message": "Hello json"});
});

app.get("/now", function(req, res, next){
    req.time = new Date().toString();
    res.json({time:req.time});
});

app.get("/:word/echo", function(req, res){
    const { word } = req.params;
    res.json({"echo": word});
});

app.get("/name", function(req, res){
    res.json({ "name": req.query.first + " " + req.query.last});
});

app.post("/name", function(req, res){
    res.json({"name": req.body.first + " " + req.body.last});
});

 module.exports = app;
