const projectSchema = require('../models/project.model');

exports.set_project_parenttask = function (req, res) {
    projectSchema.findByIdAndUpdate(req.params.id, { $push: { parentTasks: req.body } }
        , function (err, proj) {
            if (err) console.log(err);
            res.json(proj);
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
