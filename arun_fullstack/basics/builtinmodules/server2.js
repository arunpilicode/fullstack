const http=require('http');

const server=http.createServer(function(req,res){
    res.write("hello world!!");
    res.end();
});

server.listen(3000);
console.log("listening on port 3000");  