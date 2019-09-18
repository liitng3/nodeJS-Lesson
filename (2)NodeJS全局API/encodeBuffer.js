var username=process.argv[2];
var password=process.argv[3];
console.log("用户名:"+username);
console.log("密码:"+password);

if(username!=undefined&&password!=undefined){
    var loaginStr=+username+":"+password;
    var buffer=Buffer.from(loaginStr,"utf-8");
    var base64Str=buffer.toString("base64");
    console.log("base64加密："+base64Str);
}
else{
    console.log(用户名密码不能为空);
}