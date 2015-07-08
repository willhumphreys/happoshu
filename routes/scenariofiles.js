var express = require('express');
var AWS = require('aws-sdk');
var router = express.Router();


String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

router.get('/', function (req, res, next) {

    console.log('req is: ' + req);


    console.log(req.originalUrl)
    ///scenariofiles/spx_1minute/

    var noTrailingSlash = req.originalUrl;
    if (req.originalUrl.endsWith('/')) {
        noTrailingSlash = noTrailingSlash.substring(0, noTrailingSlash.length - 1);
    }

    console.log('noTrailing is ' + noTrailingSlash);

    var bucketSegment = req.originalUrl.substr(noTrailingSlash.lastIndexOf('/') + 1);
    console.log('bucket segment is: ' + bucketSegment);

    var s3 = new AWS.S3();


    function handleMatchedBucket() {
        var params = {
            Bucket: 'livedata-matcha',
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
