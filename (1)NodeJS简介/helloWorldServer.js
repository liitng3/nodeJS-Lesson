const http=require("http");
//server实例化
var server=new http.Server();
//监听客户端请求
server.on("request",function(req,res){
    res.end("hello world!");
})
//server监听端口
server.listen(8080);
console.log("server listening 8080");