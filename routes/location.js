var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('locationcollection');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });	
 //res.json([{ name: 'Denver', cubicals: [{cubeNumber:"1",isAvailable:false}, {cubeNumber:"2",isAvailable:true}, {cubeNumber:"3",isAvailable:true}] }, { name: 'Ohio', cubicals: [{cubeNumber:"1",isAvailable:true}, {cubeNumber:"2",isAvailable:true}, {cubeNumber:"3",isAvailable:true}] }]);
});

module.exports = router;
