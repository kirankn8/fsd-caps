const projectSchema = require('../models/project.model');

exports.set_project_parenttask = function (req, res) {
    projectSchema.findByIdAndUpdate(req.params.id, { $push: { parentTasks: req.body } }
        , function (err, proj) {
            if (err) console.log(err);
            res.json(proj);
        });
}

exports.update_project_parenttask = function (req, res) {
    projectSchema.update(
        { "_id": req.params.id, "parentTasks._id": req.params.parentTaskId },
        {
            "$set": {
                "parentTasks.$.parentTask": req.body.parentTask,
            }
        },
        function (err, docs) {
            if (err) console.log(err);
            res.json(docs);
        }
    );
}

exports.delete_project_parenttask = function (req, res) {
    projectSchema.findById(req.params.id, function (err, proj) {
        if (err) console.log(err);
        console.log(req.params.id);
        console.log(req.params.parentTaskId);
        proj.parentTasks.id(req.params.parentTaskId).remove();
        proj.save(function (err) {
            if (err) console.log(err);
            res.json(proj);
        });
    });
}

exports.set_project_parent_childtask = function (req, res) {
    projectSchema.update(
        { "_id": req.params.id, "parentTasks._id": req.params.parentTaskId },
        {
            "$push": {
                "parentTasks.$.childTasks": req.body
            }
        },
        function (err, docs) {
            if (err) console.log(err);
            res.json(docs);
        }
    );
}

exports.update_project_parent_childtask = function (req, res) {
    projectSchema.findById(req.params.id, function (err, proj) {
        if (err) console.log(err);
        var childTask = proj.parentTasks.id(req.params.parentTaskId).childTasks.id(req.params.childTaskId);
        childTask.set(req.body);
        proj.save(function (err) {
            if (err) console.log(err);
            res.json(proj);
        });
    });
}

exports.delete_project_parent_childtask = function (req, res) {
    projectSchema.findById(req.params.id, function (err, proj) {
        if (err) console.log(err);
        proj.parentTasks.id(req.params.parentTaskId).childTasks.id(req.params.childTaskId).remove();
        proj.save(function (err) {
            if (err) console.log(err);
            res.json(proj);
        });
    });
}
