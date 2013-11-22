var mongo = require('mongodb');
var fakeDb = require('../fakeDatabase.js');

var fakeDatabase = fakeDb.fakeDatabase;

var Server = mongo.Server;
var Db = mongo.Db;
var BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
// var server = new Server('mongodb://heroku:8521a73d794b860f426bca178a819f76@dharma.mongohq.com:10091/app19649432', 10091, {auto_reconnect: true});
db = new Db('jobsdb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'jobsdb' database");
        db.collection('jobs', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'jobs' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving job: ' + id);
    db.collection('jobs', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
exports.findAll = function(req, res) {
    db.collection('jobs', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addJob = function(req, res) {
    var job = req.body;
    console.log('Adding job: ' + JSON.stringify(job));
    db.collection('jobs', function(err, collection) {
        collection.insert(job, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
};

exports.deleteJob = function(req, res) {
    var id = req.params.id;
    console.log('Deleting job: ' + id);
    db.collection('jobs', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
};

var populateDB = function() {
    db.collection('jobs', function(err, collection) {
        collection.insert(fakeDatabase, {safe:true}, function(err, result) {});
    });
 
};