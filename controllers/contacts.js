let contactModel = require('../models/contacts');

// Create a new contact
module.exports.create = async function (req, res, next) {
    try {
        let newContact = new contactModel(req.body); // Create a new contact instance with request data
        let result = await contactModel.create(newContact); // Save the contact to the database
        res.json({
            success: true,
            message: 'Contact created successfully.' // Respond with success message
        });
    } catch (error) {
        console.log(error); // Log any errors
        next(error); // Pass errors to the error handler
    }
};

// List all contacts
module.exports.list = async function (req, res, next) {
    try {
        let contacts = await contactModel.find(); // Fetch all contacts from the database
        res.setHeader('Cache-Control', 'no-store'); // Set headers to prevent caching
        res.setHeader('Content-Type', 'application/json'); // Set response content type to JSON
        res.status(200).json(contacts); // Respond with the list of contacts
    } catch (error) {
        next(error); // Pass errors to the error handler
    }
};

// Get a contact by ID
module.exports.contactGet = async function (req, res, next) {
    try {
        let uID = req.params.id; // Extract contact ID from request parameters
        let contact = await contactModel.findOne({ _id: uID }); // Find contact by ID
        if (!contact) {
            return res.status(404).json({ success: false, message: 'Contact not found.' }); // Handle case where contact is not found
        }
        res.json(contact); // Respond with contact details
    } catch (error) {
        console.log(error); // Log any errors
        next(error); // Pass errors to the error handler
    }
};

// Update a contact by ID
module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.id; // Extract contact ID from request parameters
        let updateContact = req.body; // Get updated contact data from request body
        let result = await contactModel.updateOne({ _id: uID }, updateContact); // Update the contact in the database
        if (result.modifiedCount > 0) {
            res.json({
                success: true,
                message: 'Contact updated successfully.' // Respond with success message
            });
        } else {
            res.json({
                success: false,
                message: 'Contact not found.' // Handle case where contact is not found
            });
        }
    } catch (error) {
        console.log(error); // Log any errors
        next(error); // Pass errors to the error handler
    }
};

// Delete a contact by ID
module.exports.delete = async function (req, res, next) {
    try {
        let uID = req.params.id; // Extract contact ID from request parameters
        let result = await contactModel.deleteOne({ _id: uID }); // Delete the contact from the database
        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: 'Contact deleted successfully.' // Respond with success message
            });
        } else {
            res.json({
                success: false,
                message: 'Contact not found.' // Handle case where contact is not found
            });
        }
    } catch (error) {
        console.log(error); // Log any errors
        next(error); // Pass errors to the error handler
    }
};