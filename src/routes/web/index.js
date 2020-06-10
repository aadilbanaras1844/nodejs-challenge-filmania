




var express = require('express')
var router = express.Router()

const { userService } = require("../../services/index");

router.get('/', async function (req, res) {
   res.redirect('/films'); 
});

router.get('/films', async function (req, res) {
    res.render('films/list.html',{})
 });

    
module.exports = router;