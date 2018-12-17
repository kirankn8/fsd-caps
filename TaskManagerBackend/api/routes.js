const express = require('express');
const router = express.Router();

const user = require('./controllers/user.controller');
const project = require('./controllers/project.controller');

router.get('/', (req, res) => {
    res.send('The app is up and running!');
});

// User routes
router.get('/users', user.list_users);

router.post('/user', user.save_user);

router.get('/user/:id', user.get_user);

router.delete('/user/:id', user.delete_user);

// Project routes
router.get('/projects', project.list_projects);

router.post('/project', project.save_project);

router.get('/project/:id', project.get_project);

router.delete('/project/:id', project.delete_project);

module.exports = router