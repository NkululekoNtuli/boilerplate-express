let express = require('express');
let app = express();

// console.log("Hello World");

// app.get("/", function(rep, res){
//     res.send("Hello Express")
// });

app.get ("/",  function(rep, res){
    absolutePath = __dirname + "/views/index.html";
    res.send(absolutePath);
});



































 module.exports = app;
