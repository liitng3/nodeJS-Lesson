const url=require("url");
const http=require("http");
const fs=require("fs"); 
const path=require("path");  
var server=http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);    
    var pathName=urlObj.pathname; 
    if(pathName=='/'){
        showIndex(res);
    }
    else if(pathName=='/list'){
        showList(res);
    }
    else if(pathName=='/image.png'){
        showImage(res);
    }
    else if(pathName=='/upload' && req.method=='POST'){   //req.method对应的值必须是大写
        uploadFile(req,res)
    }
    else if(pathName.indexOf("upload")>=0 && req.method=='GET'){
        var imgsrc=path.join(__dirname,pathName);
        var imgContent=fs.readFileSync(imgsrc);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(imgContent);

    }
    else if(pathName=='/getlist'){   //获取upload文件夹下的图片信息
        var files=fs.readdirSync(__dirname+'/upload');
        var fileStr=JSON.stringify(files);   //只有字符串才可以向前端响应，对象和数组都不可以
        res.end(fileStr);

    }
}).listen(8081);

function showIndex(res){
    var indexPath=path.join(__dirname,"/index.html");
    var fileContent=fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}
function showImage(res){
    var imagePath=path.join(__dirname,"/image.png");
    var imageContent=fs.readFileSync(imagePath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.end(imageContent);
}
function showList(res){
    var listPath=path.join(__dirname,"/list.html");
    var listContent=fs.readFileSync(listPath);
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.end(listContent);
}
function uploadFile(req,res){
    var dataStr='';
    req.setEncoding("binary")
    req.on("data",function(chunk){
        dataStr+=chunk;
    })
    req.on("end",function(){
        var totalArr=dataStr.split("\r\n");
        var butArr=totalArr.slice(4,totalArr.length-2);
        var imgData='';
        for(var i=0;i<butArr.length;i++){
            imgData+=butArr[i];
        }
        var buf=Buffer.from(imgData,"binary");
        var timer=(new Date()).getTime();
        fs.writeFileSync(__dirname+'\\upload\\'+timer+'.png',imgData,{"encoding":"binary"});
        res.end("submit success")
    })

}



// 地址栏中发起http请求   get请求
// 点击超链接发起http   get请求
// 提交表单       get请求post请求
// ajax发起请求   get请求(从服务端请求)   post是在请求体里
// <link href="">  get请求
// <script src>  get请求
// <ima src>   get请求


// get请求，向服务器传递的参数都在URL里面呈现
// http://localhost:8081/detail?newId=1&Type=1
// var urlObj=url.parse(req.url,true);
// urlObj.query.newId


// post请求，数据存储在请求体里面，提交表单
// req.on("data",function(chunk){})
// req.on("end",function(chunk){})