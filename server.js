var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static('client'));



var mongoose = require('mongoose');
mongoose.connect('mongodb://dungdinh:tthuyddung218@ds129641.mlab.com:29641/dictionary');

//mongoose.connect('mongodb://localhost/FlightManagement');


var Blog = require('./models/blog');
var Grammar = require('./models/grammar');
var Qoute = require('./models/qoute');
var User = require('./models/user');
var Word= require('./models/word');

//---------------API BLOG-----------------
//-- Tìm kiếm blog
app.get('/search_blogs', function(req, res) {
    var tmp = req.query.search;
    Blog.find({
        '_tittle': {
            '$regex': tmp, $options: '-i' 
        }
    }).select().exec(function(err, blogs) {
        if (err) {
            return res.status(404).send('Not found');
            console.log('Failed!!');
        } else {
            res.status(200).send(blogs);
            //console.log(blogs);
        }
    });
});

//--Lấy tất cả blog
app.get('/blogs', function(req, res) {
    Blog.find({
    }).select().exec(function(err, blogs) {
        if (err)
            res.status(400).send(err);
        else {
            res.status(200).send(blogs);
            //console.log(blogs);
        }
    });
});

//--Lấy 1 blog theo id
app.get('/blogs/:id', function(req, res) {
    var id = req.params.id;
    Blog.find({
        _ma: id
    }).select().exec(function(err, blogs) {
        if (err)
            res.status(400).send(err);
        else {
            res.status(200).send(blogs);
            //console.log(blogs);
        }
    });
});

//---------------API GRAMMAR-----------------
//-- Tìm kiếm grammar
app.get('/search_grammars', function(req, res) {
    var tmp = req.query.search;
    Grammar.find({
        '_tittle': {
            '$regex': tmp, $options: '-i' 
        }
    }).select().exec(function(err, grammars) {
        if (err) {
            return res.status(404).send('Not found');
            console.log('Failed!!');
        } else {
            res.status(200).send(grammars);
            //console.log(blogs);
        }
    });
});

//--Lấy tất cả grammar
app.get('/grammars', function(req, res) {
    Grammar.find({
    }).select().exec(function(err, grammars) {
        if (err)
            res.status(400).send(err);
        else {
            res.status(200).send(grammars);
            //console.log(grammars);
        }
    });
});

//--Lấy 1 grammar theo id
app.get('/grammars/:id', function(req, res) {
    var id = req.params.id;
    Grammar.find({
        _ma: id
    }).select().exec(function(err, grammars) {
        if (err)
            res.status(400).send(err);
        else {
            res.status(200).send(grammars);
            //console.log(grammars);
        }
    });
});

//---------------API WORD-----------------
//-- Tìm kiếm word
app.get('/search_words', function(req, res) {
    var tmp = req.query.search;
    Word.find({
        '_tu': {
            '$regex': tmp, $options: '-i' 
        }
    }).select().exec(function(err, words) {
        if (err) {
            return res.status(404).send('Not found');
            console.log('Failed!!');
        } else {
            res.status(200).send(words);
            //console.log(words);
        }
    });
});

//---------------API QOUTE-----------------
//--Lấy tất cả qoutes
app.get('/qoutes', function(req, res) {
    Qoute.find({
    }).select().exec(function(err, qoutes) {
        if (err)
            res.status(400).send(err);
        else {
            res.status(200).send(qoutes);
            //console.log(qoutes);
        }
    });
});


//Test 
app.get('/', function(req, res) {
    res.send('Test!!');
});

app.listen(process.env.PORT || 8081);