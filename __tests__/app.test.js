const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('should properly respond to GET requests to /', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
  it.skip('should properly respond to POST requests to /echo', () => {
    return request(app)
      .post('/echo')
      .send('HERE IS SOME FAKE DATA')
      .then((req, res) => {
        expect(res.text).toEqual(req);
      });
  });
  it('should properly respond to GET requests to /red', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1 style="color:red">red</h1>');
      });
  });
  it('should properly respong to GET requests to /green', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1 style="color:green">green</h1>');
      });
  });
  it('should properly respond to GET requests to /blue', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1 style="color:blue">blue</h1>');
      });
  });
});
