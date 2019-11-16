const fs=require("fs");
const http=require("http");
const path=require("path");
var arg=process.argv[2];
var server=http.createServer(function(req,res){
    if(arg==undefined){
        //var str="hello";---------------------
        var path1=path.join(__dirname,"/fileReader1.js");
        // fs.readFile(process.argv[1],,function(err,data){
        fs.readFile(path1,function(err,data){    
            if(err){
                console.log(err.message);
            }
            else{
                res.write(data.toString());    //补文件得到buffer形式的data数据   如果是图片的话，直接buffer传输就好，浏览器会自动将buffer转化为图片
                //str=data.toString();----------------------------------
            }
        })
        //res.end(str);-----------------------------
        //-------------------只会得到hello，因为readFile()是异步函数，执行到函数不会等待，文件读取完成，就直接读取后面的语句，回调函数是文件读取完成之后才执行。
    }
    else{
        var path2=path.join(__dirname,"/"+process.argv[2]);           //只是起一个拼接作用，不会因为文件不存在而报错
        //var statobj=fs.statSync(path2);            因为文件不存在，所有不可以这样写，这样写的话会报错
        //if(statobj.isFile()==true){
        if(fs.existsSync(path2)){
            fs.readFile(path2,function(err,data){    
                if(err){
                    console.log(err.message);
                }
                else{
                    res.write(data.toString());
                    res.end();
                }
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write("该文件路径不存在");
            res.end();
        }
    }
    
});
server.listen(8081);

