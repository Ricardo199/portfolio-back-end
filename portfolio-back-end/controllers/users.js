let usersModel = require('../models/users');

module.exports.create = async function (req, res, next) {
    try {
        let newUser = new usersModel(req.body);

        let result = await usersModel.create(newUser);
        res.json(
            {
                success: true,
                message: 'User created successfully.'
            }
        )
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.list = async function (req, res, next) {
    try {
        let users = await usersModel.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.userGet = async function (req, res, next) {
    try {
        let uID = req.params.userID;

        req.user = await usersModel.findOne ({ _id: uID });
        next();

    } catch (error) {
        console.log(error);
        next(error);
    }

}

module.exports.userByID = async function (req, res, next) {
    res.json(req.user);
}

module.exports.update = async function (req, res, next) {
    try {
        let uID = req.params.userID;

        let updateUser = new usersModel(req.body);
        updateUser._id = uID;

        let result = await usersModel.updateOne({ _id: uID }, updateUser);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'User updated successfully.'
                }
            )
        } else {
            res.json(
                {
                    success: false,
                    message: 'User not found.'
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
        let uID = req.params.userID;

        let result = await usersModel.deleteOne({ _id:  uID });
        console.log(result);
    
        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: 'User deleted successfully.'
                }
            )
        } else {
            res.json(
                {
                    success: false,
                    message: 'User not found.'
                }
            )
        }
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.login = async function (req, res, next) {
    try {
        let user = await usersModel.findOne({ email: req.body.email });
        if (user) {
            if (user.password === req.body.password) {
                res.json(
                    {
                        success: true,
                        message: 'Login successful.'
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        message: 'Incorrect password.'
                    }
                )
            }
        } else {
            res.json(
                {
                    success: false,
                    message: 'User not found.'
                }
            )
        }
    }
    catch (error) {
        console.log(error);
        next(error);
    }
}