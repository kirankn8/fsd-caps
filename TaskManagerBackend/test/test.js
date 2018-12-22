var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {
    it('Test Health Check Point', function (done) {
        request(app).get('/api/').expect('The app is up and running!', done);
    });
});

describe('GET /users', function () {
    it('Get list of users', function (done) {
        request(app).get('/api/users').expect(200, done);
    });
});

describe('GET /projects', function () {
    it('Get list of projects', function (done) {
        request(app).get('/api/projects').expect(200, done);
    });
});

describe('POST /user', function () {
    it('Create user with empty req', function (done) {
        request(app).post('/api/user').expect(500, done);
    });
});

describe('POST /project', function () {
    it('Create project with empty req', function (done) {
        request(app).post('/api/project').expect(500, done);
    });
});


describe('get /user/:id', function () {
    it('Get user which does not exist', function (done) {
        request(app).post('/api/user/5c1a9255329f8431447bfc62').expect(404, done);
    });
});

describe('get /project/:id', function () {
    it('Get project which does not exist', function (done) {
        request(app).post('/api/project/5c1a9255329f8431447bfc62').expect(404, done);
    });
});