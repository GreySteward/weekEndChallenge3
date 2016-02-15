var express = require('express');
var router = express.Router();
var path = require('path');

var sum = function(x,y){
    var number = x + y;
    number = number.toString();
    return number;
};

var diff = function(x,y){
    var number = x - y;
    number = number.toString();
    return number;
};

var multi = function(x,y){
    var number = x * y;
    number = number.toString();
    return number;
};

var div = function(x,y) {
    var number = x / y;
    number = number.toString();
};




router.get('/', function(req, res) {
    res.send({message: 'hello'});
});

router.post('/sum', function(req, res) {
    console.log(req.body.input1);
    var equals = sum (req.body.input1,req.body.input2)
    res.send(equals);
});

router.post('/diff', function(req, res) {
    console.log(req.body.input1);
    var equals = diff (req.body.input1,req.body.input2)
    res.send(equals);
});

router.post('/multi', function(req, res) {
    var equals = multi (req.body.input1,req.body.input2)
    res.send(equals);
});

router.post('/div', function(req, res) {
    console.log(req.body);
    var equals = div (req.body.input1,req.body.input2)
    res.send(equals);
});

module.exports = router;