
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: { type: String, required: true },
    user_id: { type: String, required: true },
    film_id: { type: String, required: true },

    created_at: { type: Date,default: new Date },
    updated_at: { type: Date,default: new Date }
});



module.exports = mongoose.model('Comments', CommentSchema);

