var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    var AWS = require('aws-sdk');

    var s3 = new AWS.S3();


    s3.listBuckets(function(err, data) {
        if (err) { console.log("Error:", err); }
        else {
            for (var index in data.Buckets) {
                var bucket = data.Buckets[index];
                console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
            }
        }
    });

    //var allKeys = [];
    //
    //    s3.listObjects({Bucket: s3bucket, Marker: marker}, function(err, data){
    //        allKeys.push(data.Contents);
    //
    //        if(data.IsTruncated)
    //            listAllKeys(data.Contents.slice(-1)[0].Key, cb);
    //        else
    //            cb();
    //    });


    var params = {
        Bucket: 'livedata-matcha', /* required */
        Delimiter: '/'

    };


    var dataToReturn;
    s3.listObjects(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            res.send('broken');
        } // an error occurred
        else     {
            console.log(data);
            res.json(data);
        }           // successful response
    });


});

module.exports = router;