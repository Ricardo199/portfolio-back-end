let contactModel = require('../models/contacts');

module.exports.create = async function (req, res, next) {
    try {
        let newContact = new contactModel(req.body);
        let result = await contactModel.create(newContact);
        res.json({
            success: true,
            message: 'Contact created successfully.'
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.list = async function (req, res, next) {
    try {
        let contacts = await contactModel.find();
        res.setHeader('Cache-Control', 'no-store');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

module.exports.contactGet = async function (req, res, next) {
    try {
        let uID = req.params.id;  // Ensure this matches your route parameter
        let contact = await contactModel.findOne({ _id: uID });
        if (!contact) {
            return res.status(404).json({ success: false, message: 'Contact not found.' });
        }
        res.json(contact);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.id;  // Ensure this matches your route parameter
        let updateContact = req.body;
        let result = await contactModel.updateOne({ _id: uID }, updateContact);
        if (result.modifiedCount > 0) {
            res.json({
                success: true,
                message: 'Contact updated successfully.'
            });
        } else {
            res.json({
                success: false,
                message: 'Contact not found.'
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports.delete = async function (req, res, next) {
    try {
        let uID = req.params.id;  // Ensure this matches your route parameter
        let result = await contactModel.deleteOne({ _id: uID });
        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: 'Contact deleted successfully.'
            });
        } else {
            res.json({
                success: false,
                message: 'Contact not found.'
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
};