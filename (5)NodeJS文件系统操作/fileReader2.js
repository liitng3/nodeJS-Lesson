const fs=require("fs");
const http=require("http");
const path=require("path");
var arg=process.argv[2];
var server=http.createServer(function(req,res){
    if(arg==undefined){
        fs.open(process.argv[1],'r+',function(err,fd){               //fd文件描述符，唯一标识
            var statobj=fs.statSync(process.argv[1]);
            var buf=Buffer.alloc(statobj.size);
            fs.read(fd,buf,0,statobj.size,0,function(err,by,buf){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })                                //将内容读到buffer中
        });
    }
    else{
        var path2=path.join(__dirname,"/"+process.argv[2]);           
        if(fs.existsSync(path2)){
            fs.open(path2,'r+',function(err,fd){               //fd文件描述符，唯一标识
                var statobj=fs.statSync(path2);
                var buf=Buffer.alloc(statobj.size);
                fs.read(fd,buf,0,statobj.size,0,function(err,by,buf){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.end(buf.toString());
                        fs.closeSync(fd);
                    }
                })                                //将内容读到buffer中
            });
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write("该文件路径不存在");
            res.end();
        }
    }
    
});
server.listen(8081);

