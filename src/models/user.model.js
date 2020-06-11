const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: "What is Your Email?",
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: 'What is your password',
        // minlength: 8,
        // maxlength: 10,
    },
    is_active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: new Date
    }
});



module.exports = mongoose.model('Users', UserSchema);