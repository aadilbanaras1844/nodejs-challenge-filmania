const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    description: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        default: new Date
    },
    rating: {
        type: Number,
        default: null
    },
    ticket_price: {
        type: Number,
        default: null
    },
    country: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    photo_path: {
        type: String,
        required: true
    },
    comments: [{
        type: Object
    }],
    slug: {
        type: String,
        slug: "name",
        unique: true
    },
    // room_type: [{ type: String, enum : ['all','family', 'gent', 'ladies', 'couple']}],
    // created_by: { type: String, required: true, minlength: 2, maxlength: 30 },

    created_at: {
        type: Date,
        default: new Date
    },
    updated_at: {
        type: Date,
        default: new Date
    }
});



module.exports = mongoose.model('Films', FilmSchema);