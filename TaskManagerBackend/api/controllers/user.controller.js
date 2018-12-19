const userSchema = require('../models/user.model');

exports.list_users = function (req, res) {
    userSchema.find({}, function (err, users) {
        res.json(users);
    });
}

exports.get_user = function (req, res) {
    userSchema.findById(req.params.id, function (err, docs) {
        if (err) console.log(err);
        res.json(docs);
    });
}

exports.save_user = function (req, res) {
    var userInstance = new userSchema(req.body);
    userInstance.save(function (err, user) {
        if (err) console.log(err);
        res.json(user);
    });
}

exports.delete_user = function (req, res) {
    userSchema.findByIdAndDelete(req.params.id, function (err, user) {
        if (err) console.log(err);
        res.json(user);
    });
}