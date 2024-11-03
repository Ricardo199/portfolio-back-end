let usersModel = require('../models/users');

// Create a new user
module.exports.create = async function (req, res, next) {
    try {
        let newUser = new usersModel(req.body);
        let result = await usersModel.create(newUser);
        res.json({
            success: true,
            message: 'User created successfully.'
        });
    } catch (error) {
        next(error);
    }
}

// List all users
module.exports.list = async function (req, res, next) {
    try {
        let users = await usersModel.find();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

// Get user by ID
module.exports.userGet = async function (req, res, next) {
    try {
        let uID = req.params.id;  // Ensure this matches the route parameter
        let user = await usersModel.findOne({ _id: uID });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

// Provide user data based on ID param
module.exports.userByID = async function (req, res, next) {
    res.json(req.user);
}

// Update user by ID
module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.id;  // Ensure this matches the route parameter
        let updateData = req.body;

        /**
         * Updates a user document in the database with the specified update data.
         *
         * @param {Object} filter - The filter used to find the user document to update.
         * @param {Object} updateData - The data to update the user document with.
         * @returns {Promise<Object>} The result of the update operation.
         */
        let result = await usersModel.updateOne({ _id: uID }, updateData);
        
        if (result.matchedCount > 0 && result.modifiedCount > 0) {
            res.json({ success: true, message: 'User updated successfully.' });
        } else if (result.matchedCount > 0 && result.modifiedCount === 0) {
            res.json({ success: true, message: 'User already has this data.' });
        } else {
            res.status(404).json({ success: false, message: 'User not found.' });
        }
    } catch (error) {
        next(error);
    }
};

// Delete user by ID
module.exports.delete = async function (req, res, next) {
    try {
        let uID = req.params.id;  // Ensure this matches the route parameter
        let result = await usersModel.deleteOne({ _id: uID });

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: 'User deleted successfully.'
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'User not found.'
            });
        }
    } catch (error) {
        next(error);
    }
};

// User login
module.exports.login = async function (req, res, next) {
    try {
        let user = await usersModel.findOne({ email: req.body.email });
        if (user) {
            if (user.password === req.body.password) {
                res.json({
                    success: true,
                    message: 'Login successful.'
                });
            } else {
                res.json({
                    success: false,
                    message: 'Incorrect password.'
                });
            }
        } else {
            res.json({
                success: false,
                message: 'User not found.'
            });
        }
    } catch (error) {
        next(error);
    }
}