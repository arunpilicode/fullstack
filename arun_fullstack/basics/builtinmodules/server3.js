const http=require('http');

const server=http.createServer(function(req,res){

    if(req.url=='/'){

    res.write("hello world!!");
    res.end();
    }
    if(req.url=='/users'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
    if(req.url=='/friends'){
        res.write();
        res.end();
    }
});

server.listen(3000);
console.log("listening on port 3000");  