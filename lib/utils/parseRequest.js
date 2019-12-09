module.exports = rawRequest => {
  const request = {};

  const lines = rawRequest.split('\n');
  
  if(lines[4]){
    request.body = lines[4];
  }
  request.method = lines[0].split(' ')[0];
  request.path = lines[0].split(' ')[1];

  return request;
};
