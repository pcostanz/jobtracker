var path = require("path");
var express = require("express");
var _ = require("underscore");
var jobs = require("./js/routes/jobs");

var app = express();

app.use(express.static(__dirname,
        path.join(__dirname, "bower_components"),
        path.join(__dirname, "js")));

app.use(express.logger('dev'));
app.use(express.bodyParser());

app.get("/jobs", jobs.findAll);
app.get("/jobs/:id", jobs.findById);
app.post('/jobs', jobs.addJob);
app.delete("/jobs/:id", jobs.deleteJob);

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server started on port " + port);