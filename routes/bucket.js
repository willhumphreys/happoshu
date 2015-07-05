var express = require('express');
var http = require('http');
var router = express.Router();

var options = {
    host: 'https://www.random.org',
    path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
};





/* GET users listing. */
router.get('/', function(req, res, next) {

    callback = function(response) {
        var str = '';

        //another chunk of data has been recieved, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been recieved, so we just print it out here
        response.on('end', function () {
            console.log(str);
            res.send(str);
        });
    }


    http.request(options, callback).end();


});

module.exports = router;
