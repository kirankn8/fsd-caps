var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('Test Health Check Point', function(done) {
 request(app).get('/').expect('The app is up and running!', done);
 });
});