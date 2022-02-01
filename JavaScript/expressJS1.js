var express = require("express");
var app = express();
app.get("/",function(req,res)
{
    res.send("Hello Express JS...");
});

app.route("/firstRoute").get(function(req,res)
{
    res.send("From the First route");
}
);

app.route("/secondRoute").get(function(req,res)
{
    res.send("From the Second route");
}
);

var server = app.listen(3000,function(){});