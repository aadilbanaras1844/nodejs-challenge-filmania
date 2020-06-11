const filmsApi = require("./apis/films");
const web = require('./web');

module.exports = function (app) {

    // this will add apis for film
    app.use('/api/films', filmsApi);

    // it will have website routes
    app.use('/', web);

    // Error 404 Catch
    app.use(function (req, res, next) {
        // return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
        res.render('page404', {})
    });
}