


const filmsApi = require("./apis/films");
const web = require('./web');

module.exports = function(app){
    app.use('/api/films', filmsApi);
    app.use('/', web);

    // Error 404 Catch
    app.use(function(req, res, next) {
        // return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
        res.render('page404',{model: 'model'})
    });
}

