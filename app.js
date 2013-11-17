var path = require("path");
var express = require("express");
var _ = require("underscore");
var database = require("./fakeDatabase.js");

var app = express();

app.use(express.static(__dirname,
        path.join(__dirname, "bower_components"),
        path.join(__dirname, "js")));

app.use(express.bodyParser());

// Instantiate a temporary, fake database
var db = database.fakeDatabase;

app.get("/jobs", function(req, res) {
    res.json(db);
});

app.get("/jobs", function(req, res) {
    res.send([{
        name: 'job1'
    }, {
        name: 'job2'
    }]);
});

app.get("/jobs/:id", function(req, res) {
    res.send({
        id: req.params.id,
        name: "The Name",
        description: "description"
    });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server started on port " + port);