import http from 'node:http';

// there are two ways to write response headers in node
  // 1- use res.setHeader and write individually all headert properties
  // 2- use writeHead() methos that write all that in one listenerCount

  // Difference: 
  //   1- res.setHeader does not =send respoinse immediately but res.write sends reponse immediately and second we cannot write properties once res.writeHead is set as it send the header responce rigght away and and it also overwrites any properties defined by res.setHeader();

const server = http.createServer((req, res) => {

  // res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Methods': 'POST'});

  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end('<html>Hi from Server</html>');
})

server.listen(8000, () => console.log("Server listening on port 8000"));