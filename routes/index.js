var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('scripts');
  collection.find({},{ limit : 10},function(e,docs){
    //console.log(e)
    console.log(docs)
    res.render('userlist', {
      "results" : docs
    });
  });


});

module.exports = router;
