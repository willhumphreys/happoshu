var express = require('express');
var AWS = require('aws-sdk');
var router = express.Router();

router.get('/', function (req, res, next) {

    var s3 = new AWS.S3();


    function handleMatchedBucket() {
        var params = {
            Bucket: 'livedata-matcha',
            Delimiter: '/results'

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

    function handleBucketList(data) {
        var handled = false;
        for (var index in data.Buckets) {
            var bucket = data.Buckets[index];
            var name = bucket.Name;
            console.log("Bucket: ", name, ' : ', bucket.CreationDate);

            if (name == 'livedata-matcha') {

                handled = true;
                handleMatchedBucket();
            }

        }


        if (!handled) {
            res.json('bucket not found');
        }
    }

    s3.listBuckets(function (err, data) {
        if (err) {
            console.log("Error:", err);
        }
        else {
            handleBucketList(data);
        }
    });


});

module.exports = router;
