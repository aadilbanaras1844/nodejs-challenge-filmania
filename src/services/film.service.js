const {
    filmModel
} = require("../models");

const ObjectId = require('mongoose').Types.ObjectId;


module.exports.getFilms = async () => {
    try {
        let films = await filmModel.find({});;
        return films;
    } catch (error) {
        return error
    }
};

module.exports.getFilmBySlug = async (slug) => {
    try {
        let film = await filmModel.findOne({
            slug
        });
        return film;
    } catch (error) {
        return error
    }
};

module.exports.createFilm = async function (params) {
    return new Promise(async function(resolve, reject){
        try {
            let newFilm = new filmModel(params);
            const filmAdded = await newFilm.save();
            return resolve(filmAdded)
        } catch (error) {
            return reject(error)
        }
    })

}

module.exports.updateFilm = async function (id, params) {
    try {
        let updatedFilm = await filmModel.updateOne({
            _id: ObjectId(id)
        }, {
            $set: params
        });
        return updatedFilm;
    } catch (error) {
        return error;
    }
}

module.exports.deleteFilm = async function (id) {
    try {
        let deletedFilm = await filmModel.updateOne({
            _id: ObjectId(id)
        }, {
            $set: {
                is_deleted: true
            }
        });
        return deletedFilm;
    } catch (error) {
        return error;
    }
}