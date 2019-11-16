const fs=require("fs");
const http=require("http");
const path=require("path");
var arg=process.argv[2];
var server=http.createServer(function(req,res){
    if(arg==undefined){
        var path1=path.join(__dirname,"/fileReader1.js");
        var streamReader1=fs.createReadStream(path1);
        streamReader1.pipe(res);
        
        
    }
    else{
        var path2=path.join(__dirname,"/"+process.argv[2]);
        if(fs.existsSync(path2)){
            var streamReader2=fs.createReadStream(path2);
            streamReader2.pipe(res);
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write("该文件路径不存在");
            res.end();
        }
    }
    
});
server.listen(8081);

