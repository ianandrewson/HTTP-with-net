const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('should properly respond to GET requests to /', () => {
    request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
  it('should properly respond to POST requests to /echo', () => {
    request(app)
      .post('/echo')
      .then((req, res) => {
        expect(res.status.text).toEqual('status code 200');
        expect(res.text).toEqual(req);
      });
  });
  it('should properly respond to GET requests to /red', () => {
    request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1 style = color: red>red</h1>');
      });
  });
  it('should properly respong to GET requests to /green', () => {
    request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1 style = color: green>green</h1>');
      });
  });
  it('should properly respond to GET requests to /blue', () => {
    request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1 style = color: blue>blue</h1>');
      });
  });
});
