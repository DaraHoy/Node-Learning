var http = require("http"); // <-- How you require modules

http.createServer(function(request, response){
    response.writeHead(200); //status in header
    response.write("Hello there, beautiful "); // response body
    response.end(); // close the connection
}).listen(process.env.PORT);
console.log("magic happening port 8080")