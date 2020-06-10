

var express = require('express')
var router = express.Router()

const { filmService } = require("../../services/index");

// get Films
router.get('/', async function (req, res) {
    try {
        let films = await filmService.getFilms(  );
        return res.json({status: true, data: films})  
    } catch (error) {
        return res.json(error)
    }
});

// // get Film Detail
router.get('/:id', async function (req, res) {
    let film_id = req.params.id;
    try {
        let film= await filmService.getFilmById( film_id );
        res.json({status: true, data: film})  
    } catch (error) {
        return res.json(error)
    }
    
});

// // add Film
router.post('/', async function(req, res){
    let params = req.body;
    try {
        let film= await filmService.createFilm( params );
        res.json({status: true, data: film})  
    } catch (error) {
        return res.json(error)
    }
});

// // Update Fil
router.post('/:id', async function(req, res){
    let film_id = req.params.id;
    let params = req.body;
    try {
        let film= await filmService.updateFilm( film_id, params );
        res.json({status: true, data: film})  
    } catch (error) {
        return res.json(error)
    }
});

// // Delete Filmh
router.delete('/:id', async  function(req, res){
    let film_id = req.params.id;
    try {
        let film= await filmService.deleteFilm( film_id );
        res.json({status: true, data: film})  
    } catch (error) {
        return res.json(error)
    }
});
    
module.exports = router;