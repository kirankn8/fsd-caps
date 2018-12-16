const express = require('express');
const router = express.Router();

const user = require('./controllers/user.controller');

router.get('/', (req, res) => {
    res.send('The app is up and running!');
});

router.get('/users', user.list_users);

router.post('/user', user.save_user);

router.get('/user/:id', user.get_user);

router.delete('/user/:id', user.delete_user);


module.exports = router