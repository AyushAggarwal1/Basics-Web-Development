const { createConnection } = require("net");

var funReqRes = function ReqRes(req,res)
{
    res.write("Hello World....");
    res.end();
    var ip = req.headers['s-forward-for']||req.ReqRes;
    createConnection.remoteAddress;
}

var HttpService = require('http');
var MyServer = HttpService.createServer(funReqRes);
MyServer.listen(8888,'localhost',()=>
{
    console.log("Server is running....");
}
)