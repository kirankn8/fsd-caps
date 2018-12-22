const projectSchema = require('../models/project.model');

exports.list_projects = function (req, res) {
    projectSchema.find({}).populate('manager parentTasks.childTasks.user').exec(function (err, proj) {
        if (err) { console.log(err); res.status(500).json({ msg: 'Something broke!', err: err }); }
        res.json(proj);
    });
}

exports.get_project = function (req, res) {
    projectSchema.findById(req.params.id, function (err, proj) {
        if (err) { console.log(err); res.status(500).json({ msg: 'Something broke!', err: err }); }
        res.status(201).json(proj);
    });
}

exports.save_project = function (req, res) {
    if (req.body === null) { res.status(400).json({ msg: 'Incorrect fields in the request' }); }
    var projectInstance = new projectSchema(req.body);
    projectInstance.save(function (err, proj) {
        if (err) { console.log(err); res.status(500).json({ msg: 'Something broke!', err: err }); }
        res.json(proj);
    });
}

exports.update_project = function (req, res) {
    if (req.body === null) { res.status(400).json({ msg: 'Incorrect fields in the request' }); }
    projectSchema.findById(req.params.id, function (err, proj) {
        if (err) { console.log(err); res.status(500).json({ msg: 'Something broke!', err: err }); }
        proj.project = req.body.project;
        proj.startDate = req.body.startDate;
        proj.endDate = req.body.endDate;
        proj.priority = req.body.priority;
        proj.manager = req.body.manager;
        proj.save(function (err, proj) {
            if (err) { console.log(err); res.status(500).json({ msg: 'Something broke!', err: err }); }
            res.json(proj);
        });
    });
}

exports.delete_project = function (req, res) {
    projectSchema.findByIdAndDelete(req.params.id, function (err, proj) {
        if (err) { console.log(err); res.status(500).json({ msg: 'Something broke!', err: err }); }
        res.json(proj);
    });
}