var express = require('express');
var AWS = require('aws-sdk');
var router = express.Router();

router.get('/', function (req, res, next) {

    var bucketSegment = req.originalUrl.substr(req.originalUrl.lastIndexOf('/') + 1);
    console.log(bucketSegment);

    var s3 = new AWS.S3();


    function handleMatchedBucket() {
        var params = {
            Bucket: 'livedata-matcha', /* required */
            Prefix: '' + bucketSegment


        };

        s3.listObjects(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                res.send('broken');
            } // an error occurred
            else {
                console.log(data.key);
                res.json(data);
            }           // successful response
        });
        return params;
    }


    handleMatchedBucket();


});

module.exports = router;
