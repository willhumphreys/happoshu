var express = require('express');
var AWS = require('aws-sdk');
var router = express.Router();

router.get('/', function (req, res, next) {

    function handleMatchedBucket(delimter, s3) {

        var params = {
            Bucket: 'livedata-matcha', /* required */
            Delimiter: delimter

        };

        s3.listObjects(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                res.send('broken');
            } // an error occurred
            else {
                console.log(data);
                res.json(data);
            }           // successful response
        });

    }

    handleMatchedBucket('/', new AWS.S3());

});

module.exports = router;
