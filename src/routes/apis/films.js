var express = require('express')
var router = express.Router()
const multer = require('multer');

const {
    filmService,
    commentService
} = require("../../services/index");
var upload = multer({
    dest: 'src/public/images/'
})

// get Films list
router.get('/', async function (req, res) {
    try {
        let films = await filmService.getFilms();
        return res.json({
            status: true,
            data: films
        })
    } catch (error) {
        return res.json(error)
    }
});


// // get Film Detail from slug with the comments added against it
router.get('/:slug', async function (req, res) {
    let slug = req.params.slug;
    try {
        let film = await filmService.getFilmBySlug(slug);
        // console.log(film._id)
        let comments = await commentService.getFilmComment(film._id);
        film['comments'] = comments;
        return res.json({
            status: true,
            data: film
        })
    } catch (error) {
        return res.json(error)
    }

});

// // add Film API
router.post('/', async function (req, res) {
    let params = req.body;
    // console.log(req.body)
    try {
        let film = await filmService.createFilm(params);
        res.json({
            status: true,
            data: film
        })
    } catch (error) {
        return res.json(error)
    }
});

// upload  image API
router.post('/upload-image', upload.single('photo'), async function (req, res) {
    return res.json(req.file);
});

// // Update Film api, but not in use 
router.post('/:id', async function (req, res) {
    let film_id = req.params.id;
    let params = req.body;
    try {
        let film = await filmService.updateFilm(film_id, params);
        res.json({
            status: true,
            data: film
        })
    } catch (error) {
        return res.json(error)
    }
});

// // Delete Film api but not in use 
router.delete('/:id', async function (req, res) {
    let film_id = req.params.id;
    try {
        let film = await filmService.deleteFilm(film_id);
        res.json({
            status: true,
            data: film
        })
    } catch (error) {
        return res.json(error)
    }
});



module.exports = router;