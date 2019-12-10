const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.path === '/' && request.method === 'GET'){
      return socket.end(createResponse({ body: 'hi', status: '200', contentType: 'text/plain' }));
    } else if(request.path === '/echo' && request.method === 'POST'){
      return socket.end(createResponse({ body: request.text, status: '200' }));
    } else if(request.path === '/red' && request.method === 'GET'){
      return socket.end(createResponse({ body: '<h1 style="color:red">red</h1>', status: '200', contentType: 'text/HTML' }));
    } else if(request.path === '/green' && request.method === 'GET'){
      return socket.end(createResponse({ body: '<h1 style="color:green">green</h1>', status: '200', contentType: 'text/HTML' }));
    } else if(request.path === '/blue' && request.method === 'GET'){
      return socket.end(createResponse({ body: '<h1 style="color:blue">blue</h1>', status: '200', contentType: 'text/HTML' }));
    }
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});


module.exports = app;
