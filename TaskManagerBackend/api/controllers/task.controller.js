const projectSchema = require('../models/project.model');

exports.set_project_parenttask = function (req, res) {
    console.log('Set Parent Task', req.params.id);
    projectSchema.findByIdAndUpdate(req.params.id, { $push: { parentTasks: req.body } }
        , function (err, proj) {
            if (err) console.log(err);
            res.json(proj);
        });
}

exports.set_project_parent_childtask = function (req, res) {
    console.log('Set Child Task', req.params.id);
    projectSchema.findOne({ 'parentTasks._id': req.params.parentTaskId }, function (err, parentTask) {
        console.log(parentTask);
        parentTask.findOne({ '_id': req.params.parentTaskId }, function (err, proj) {
            console.log(proj);
            res.json(proj);
        })
        // parentTask.childTasks.push(req.body);
        // parentTask.save(function (err) {
        //     if (err) throw err;
        //     res.json(parentTask);
        // });
    })
}
