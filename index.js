import http from 'http';

http.createServer((req, res) => {
  res.end('help world');
}).listen(8989);
