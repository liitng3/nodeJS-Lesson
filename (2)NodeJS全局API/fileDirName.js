const http=require("http");
const fs=require("fs");
const url=require("url");
const path=require("path");
var server=http.createServer(function(req,res){
    var urlobj=url.parse(req.url);
    var urlpathname=urlobj.pathname;
    if(urlpathname=="/favicon.ico"){
        res.end();
    }
    else if(urlpathname=="/"){    
        var htmlpath=__dirname + "\\view\\view.html"; 
        var htmlcontent=fs.readFileSync(htmlpath);
        htmlcontent=htmlcontent.toString("utf8");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlcontent);
        res.end();
    }
    else if(urlpathname=="/js/index.js"){       
        var jspath=path.join(__dirname,"/js/index.js");
        var jsContent=fs.readFileSync(jspath);    
        res.writeHead(200,{"Content-Type":"text/javascript"});
        res.write(jsContent);
        res.end();
    }
});
server.listen(8080);
console.log("server is listening 8080");