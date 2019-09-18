const http=require("http");
const fs=require("fs");
const path=require('path');
http.createServer(function(req,res){
    var imagepath=path.join(__dirname,"/1.jpg");
    var imagebuffer=fs.readFileSync(imagepath);
    var base64data=imagebuffer.toString("base64");
    var imgsrc="data:image/jpg;base64,"+base64data;
    var htmlstr="<!DOCTYPE html><head></head>"+"<body><img src='"+imgsrc+"'/></body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlstr);
    res.end();
}).listen(8081);
console.log("sever is listening 8081");