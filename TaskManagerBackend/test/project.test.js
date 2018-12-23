var request = require('supertest');
var app = require('../index.js');

// describe('GET /projects', function () {
//     it('Get list of projects', function (done) {
//         request(app).get('/api/projects').expect(200, done);
//     });
// });

describe('POST /project', function () {
    it('Create project with empty req', function (done) {
        request(app).post('/api/project').expect(500, done);
    });
});

describe('get /project/:id', function () {
    it('Get project which does not exist', function (done) {
        request(app).post('/api/project/5c1a9255329f8431447bfc62').expect(404, done);
    });
});