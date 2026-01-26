import http from 'node:http';
import path from 'node:path';
// import fs from 'node:fs';
import fs from 'node:fs/promises';  // this is used tpo get promises while reading file
import serveStatic from './utils/serveStatic.js';
import getData from './utils/getdata.js';

// there are two ways to write response headers in node
  // 1- use res.setHeader and write individually all headert properties
  // 2- use writeHead() methos that write all that in one listenerCount

  // Difference: 
  //   1- res.setHeader does not =send respoinse immediately but res.write sends reponse immediately and second we cannot write properties once res.writeHead is set as it send the header responce rigght away and and it also overwrites any properties defined by res.setHeader();

// PATH handling
// Two types: 
//   1- Absolute path: contains absolute path to a fileURLToPath
//   2- Relative path: contains path realtive to the CurrentWorkingDirectory(CWD)


const __dirname = import.meta.dirname;  // meta contains all info about modules, does not work with commonJS code
// console.log(__dirname);

console.log(getData());
const server = http.createServer(async (req, res) => {

  // const absPath = path.join(__dirname, 'public', 'index.html');
  // const relPath = path.join('public', 'index.html');
  // console.log("Realtive path: ", relPath);
  // console.log("Absolute path: ", absPath);
  // console.log(process.cwd());

  // res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Methods': 'POST'});

  await serveStatic(req, res, __dirname);

  // const pathToresource = path.join(__dirname, 'public', 'index.html');

  // Reading files using FS module
  // const content = fs.readFileSync(pathToresource, 'utf-8');  // this code works but it is blocking code
  // const content = await fs.readFile(pathToresource);

  // res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 200;
  // res.end(content);
})

server.listen(8000, () => console.log("Server listening on port 8000"));