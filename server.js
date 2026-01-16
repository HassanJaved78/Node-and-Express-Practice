import http from "node:http";  // it is good pratice to use node: this tells engine that it is a node module not out our js module thus saving time as node does not have to search out own created modules

const server = http.createServer((req, res) => {
    // res.end("Hello from server");
    // res.end() takes 3 parameters
    // 1- "Message" or data 2- encoding type-> default is 'utf8' and a call backfunction that runs at the end

    res.write("This is some data. ");  // write to response body but not end
    res.write("This is some more data\n");  // write to response body but not end
    res.end("This is the ending message", 'utf8', () => console.log("Response ended"));  // write to response body and end the response stream

    // res.end();   // this can also be used
})

server.listen(8000, () => console.log("Server running on port 8000"));