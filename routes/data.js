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

var division = function(x,y) {
    var number = x / y;
    number = number.toString();
};




router.get('/', function(req, res) {
    res.send({message: 'hello'});
});

router.post('/', function(req, res) {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;