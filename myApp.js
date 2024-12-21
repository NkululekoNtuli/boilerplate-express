require('dotenv').config()
let express = require('express');
let app = express();

// console.log("Hello World");

// app.get("/", function(rep, res){
//     res.send("Hello Express")
// });

app.use("/public", express.static(__dirname + "/public"));

app.get ("/",  function(rep, res){
    absolutePath = __dirname + "/views/index.html";
    res.send(absolutePath);
});

app.get("/json", function(rep, res){
    if (process.env.MESSAGE_STYLE === "uppercase") res.json({"message": "HELLO JSON"})
    res.json({"message": "Hello json"});
});


































 module.exports = app;
