var http = require("http");

http.createServer(function(request, response){ // <-- request event
    response.writeHead(200);
    response.write("Magic is happening");
    setTimeout(function(){ // <-- timeout event, represents a long process 
        response.write("tada!");
        response.end();
    }, 5000);// 5000 = 5 seconds
}).listen(process.env.PORT)