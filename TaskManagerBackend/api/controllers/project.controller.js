const projectSchema = require('../models/project.model');

exports.list_projects = function (req, res) {
    projectSchema.find({}, function (err, docs) {
        res.json(docs);
    });
}

exports.get_project = function (req, res) {
    projectSchema.findById(req.params.id, function (err, docs) {
        if (err) console.log(err);
        res.json(docs);
    });
}

exports.save_project = function (req, res) {
    var projectInstance = new projectSchema(req.body);
    projectInstance.save(function (err, docs) {
        if (err) console.log(err);
        res.json(docs);
    });
}

exports.delete_project = function (req, res) {
    projectSchema.findByIdAndDelete(req.params.id, function (err, project) {
        if (err) console.log(err);
        res.json(project);
    });
}