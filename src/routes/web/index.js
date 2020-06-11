




var express = require('express')
var router = express.Router()
var request = require('request');
   
const { userService, commentService  } = require("../../services/index");
const { requireLogin, requireLogOut, defaultMW } = require('./middlewares');

router.use( defaultMW );
const baseUrl = 'http://localhost:3000';
router.get('/', async function (req, res) {
   res.redirect('/films'); 
});

// films routes
router.get('/films', defaultMW, async function (req, res) {
   request({
      uri: '/api/films',
      baseUrl: baseUrl,
   },(error, response, films) => {
      films = JSON.parse(films);
      res.render('films/list.html',{films: films.data})
   });

});

router.get('/films/create', async function (req, res) {
   res.render('films/create.html',{})
});

router.get('/films/:slug', async function (req, res) {
   request({
      uri: '/api/films/'+req.params.slug,
      baseUrl: baseUrl,
   },(error, response, film) => {
      film = JSON.parse(film);
      // console.log(film)
      return res.render('films/detail.html',{film: film.data})
   });
   //res.render('films/detail.html',{})
});

router.post('/films/:slug/comment', requireLogin, async function (req, res) {
   let params = {
      film_id: req.body.film_id,
      text: req.body.text,
      user_id: res.locals.user_id 
   }
   let comment  = await commentService.createComment(params);
   return res.redirect('/films/'+req.body.slug)
   //res.render('films/detail.html',{})
});

// user routes
router.get('/login', requireLogOut, async function (req, res) {
   let { error, register } = req.query;
   return res.render('login.html',{ error, register })
});

router.post('/login', requireLogOut, async function (req, res) {
   let {email, password} = req.body;
   try {
      let user = await userService.loginUser(email, password);
      req.session.email = user.email;
      req.session.user_id = user.user_id;
      return res.redirect('/login'); 
   } catch (error) {
      return res.redirect('/login?error=true'); 
   }
});

router.get('/secure', requireLogin, async function (req, res) {
   // console.log(req.session)
   return res.json({'status': 'loggedIn'})
});

router.get('/register', requireLogOut, async function (req, res) {
   let error = req.query["error"];
   res.render('register.html',{ error: error })
});

router.post('/register', requireLogOut, async function (req, res) {
   let params = req.body;
   try {
      let user = await userService.createUser(params);
      // console.log(user);
      return res.redirect('/login?register=true'); 
   } catch (error) {
      console.log(error)
      return res.redirect('/register?error=true'); 
   }
   
});

router.get('/logout', requireLogin, async function (req, res) {
   req.session.destroy();
   return res.redirect('/login'); 
});

    
module.exports = router;