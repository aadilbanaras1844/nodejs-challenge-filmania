const {
    commentModel
} = require("../models");

const ObjectId = require('mongoose').Types.ObjectId;


module.exports.getFilmComment = async (film_id) => {
    try {
        let comments = await commentModel.find({
            film_id
        });
        return comments;
    } catch (error) {
        return error
    }
};

module.exports.createComment = async function (params) {
    try {
        let newComment = new commentModel(params);
        const commentAdded = await newComment.save();
        return commentAdded;
    } catch (error) {
        return error;
    }
}