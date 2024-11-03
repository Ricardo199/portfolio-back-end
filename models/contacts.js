const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema representing a contact.
 * 
 * @typedef {Object} ContactSchema
 * @property {string} firstname - The first name of the contact.
 * @property {string} lastname - The last name of the contact.
 * @property {string} email - The email address of the contact.
 */
const ContactSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
});

module.exports = mongoose.model('contact', ContactSchema);