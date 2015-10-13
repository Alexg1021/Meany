var express = require('express');
var router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');





/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res) {
    var user = new User(req.body);
    user.save(function (err) {
        res.json(user);
    });
});

module.exports = router;
