const http=require("http");
const url=require("url");
const fs=require("fs");
const path=require("path");
const querystring=require("querystring")
http.createServer(function(req,res){
    var strData="";
    req.on("data",function(chunk){
        strData+=chunk;
    })
    req.on("end",function(){
        console.log(strData);
        var strobj=querystring.parse(strData);
        console.log(strobj);
        var datapath=path.join(__dirname,'./data.json')
        var jsondata=fs.readFileSync(datapath);
        var jsonstr=jsondata.toString();
        console.log(jsonstr[1]);
        console.log(jsonstr[2]);
        if(strobj.name=="lt" &&strobj.pwd=='123'){
            res.write("s");
            console.log("s")
            res.end("s");
        }
        else{
            res.write("f");
            console.log("f");
            res.end();
        }
    })
    
}).listen(8081);
console.log("is listening")