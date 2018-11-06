var express = require('express');
var router = express.Router();
var AsyncWrap = require('../common/async')

/* GET api listing. */

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.post('/time', AsyncWrap(async (req, res) => {
    const date = new Date(req.body.time);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    return res.end(JSON.parse(date.toDateString()))
}))

module.exports = router;