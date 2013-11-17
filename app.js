var express = require("express");

var app = express();

app.get("/", function(req,res){
    res.send("Homepage response to app.get '/'");
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server started on port" + port);