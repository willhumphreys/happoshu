var express = require('express');
var AWS = require('aws-sdk');
var router = express.Router();

router.get('/', function (req, res, next) {

    function handleMatchedBucket(prefix, s3) {

        var params = {
            Bucket: 'livedata-matcha', /* required */
            Prefix: prefix

        };

        s3.listObjects(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                res.send('broken');
            } // an error occurred
            else {
                console.log(data);

                console.log(data.Contents)

                for (var i = 0; i < data.Contents.length; i++) {
                    console.log(data.Contents[i].Key);

                    var params = {Bucket: 'livedata-matcha', Key: data.Contents[i].Key};
                    var whatWeGot = s3.getObject(params);
                    console.log(whatWeGot);

                }

                res.json(data);
            }           // successful response
        });

    }

    handleMatchedBucket('results', new AWS.S3());

});

module.exports = router;
