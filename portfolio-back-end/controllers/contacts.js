let contactModel = require('../models/contacts');

module.exports.create = async function (req, res, next) {
    try {
        let newContact = new contactModel(req.body);

        let result = await contactModel.create(newContact);
        res.json(
            {
                success: true,
                message: 'Contact created successfully.'
            }
        )
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function (req, res, next) {
    try {
        console.log('Fetching contacts from database');
        let contacts = await contactModel.find();
        res.json(contacts);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.contactGet = async function (req, res, next) {
    try {
        let uID = req.params.contactID;

        req.contact = await contactModel.findOne({ _id: uID });
        next();

    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.contactByID = async function (req, res, next) {
    res.json(req.contact);
}

module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.contactID;

        let updateContact = new contactModel(req.body);
        updateContact._id = uID;

        let result = await contactModel.updateOne({ _id: uID }, updateContact);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Contact updated successfully.'
                }
            )
        } else {
            res.json(
                {
                    success: false,
                    message: 'Contact not found.'
                }
            )
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.delete = async function (req, res, next) {
    try {
        let uID = req.params.contactID;

        let result = await contactModel.deleteOne({ _id: uID });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'Contact deleted successfully.'
                }
            )
        } else {
            res.json(
                {
                    success: false,
                    message: 'Contact not found.'
                }
            )
        }
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}