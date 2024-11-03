const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * UserSchema defines the structure of the user document in the database.
 * 
 * @property {String} name - The name of the user.
 * @property {String} email - The email address of the user.
 * @property {String} password - The password of the user.
 * @property {Date} created - The date when the user was created. Defaults to the current date.
 * @property {Date} updated - The date when the user was last updated. Defaults to the current date.
 */
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);