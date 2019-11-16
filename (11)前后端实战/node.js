const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const querystring = require("querystring");
http.createServer(function(req,res) {
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    switch(pathName) {
        case '/':
            showHome(res);
            break;
    }
}).listen(8081);
console.log("Server is listening 8081");
var sessions={};

function showLogin(req,res){
    var filePath = path.join(__dirname,'./login.html');
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"textml"});
    res.write(fileContent);
    res.end();
}
function showlist(req,res){
    var filePath = path.join(__dirname,'./chapterList.html');
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"Content-Type":"textml"});
    res.write(fileContent);
    res.end();
}

function loginIn(req,res) {
    var formData = "";
    req.on("data",function(chunk) {
        formData += chunk;
    })
    req.on("end",function() {
        var formObj = querystring.parse(formData);
        if(formObj.username == "zhangsan" && formObj.pwd == 123) {
            var session={
                sessionId:(new Date()).getTime()+Math.random(),
                exipire:(new Date()).getTime()+18000000000000000000,
                userName:"zhangsan"
            }
            sessions[session.sessionId]=session;
            res.setHeader("Set-Cookie", "sessionId="+session.sessionId)
            res.end("login success");
        } else {
            res.end("login error");
        }
    })
}

function showHome(req,res) {
    var cookie = req.headers["cookie"];
    if(cookie == undefined) {
        showLogin(res);
    }
    else{
        var cookieArr=cookie.split(";");
        var cookieObj={};
        for(var i=0;i<cookieArr.length;i++){
            var cookiePair=cookieArr[i].split("=");
            cookieObj[cookiePair[0].trim()]=cookiePair[1];
        }
        var sessionId=cookieObj.sessionId;
        for(var key in sessions){
            if(key==sessionId){
                var session=sessions[key];
                if((new Date()).getTime()<session.exipire){
                    showlist(res);
                    res.end();
                }
                else{
                    showLogin(res);
                }
            }
        }
    }
    
}
// Express  node的一个web框架