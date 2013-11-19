var path = require("path");
var express = require("express");
var _ = require("underscore");
var helper = require("./js/helper");

var app = express();

app.use(express.static(__dirname,
        path.join(__dirname, "bower_components"),
        path.join(__dirname, "js")));

app.use(express.logger('dev'));
app.use(express.bodyParser());

app.get("/jobs", helper.findAll);
app.get("/jobs/:id", helper.findById);
app.post('/jobs', helper.addJob);
app.delete("/jobs/:id", helper.deleteJob);

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server started on port " + port);