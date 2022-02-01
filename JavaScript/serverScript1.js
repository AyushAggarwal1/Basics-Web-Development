var HttpService = require('http');
// var MyServer = HttpService.createServer(funReqRes(req, res));
// MyServer.listen(8888);



HttpService.createServer(function ReqRes(req, res)
{
    res.writeHead(200, {'Content-type':'text/plan'});
    res.end("hello");
}).listen(8080)