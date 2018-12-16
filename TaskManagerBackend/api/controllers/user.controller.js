const userSchema = require('../models/user.schema');

exports.list_users = function (req, res) {
    userSchema.find({}, function (err, docs) {
        res.json(docs);
    })
}

exports.get_user = function (req, res) {
    userSchema.findById(req.params.id, function (err, docs) {
        if (err) res.json(err);
        res.json(docs);
    })
}

exports.save_user = function (req, res) {
    var userInstance = new userSchema(req.body);
    userInstance.save(function (err, docs) {
        if (err) res.json(err);
        res.json(docs);
    });
}

exports.delete_user = function (req, res) {
    userSchema.findByIdAndDelete(req.params.id, function (err, user) {
        if (err) res.json(err);
        res.json(user);
    });
}