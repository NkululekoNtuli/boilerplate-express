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
    res.json({"message": "json"});
});


































 module.exports = app;
