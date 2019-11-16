const fs=require("fs");
const http=require("http");
const path=require("path");
var server=new http.Server();

var server=http.createServer(function(req,res){
    var filePath=path.join(__dirname,"/data.txt");
    var streamReader=fs.createReadStream(filePath);
    streamReader.pipe(res);
}).listen(8081);

console.log("server is listening 8081");