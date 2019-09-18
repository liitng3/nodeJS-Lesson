var base64Str = "emhhbmdzYW46MTIzNDU2";
var buffer=Buffer.from(base64Str,"base64");
var str=buffer.toString("utf-8");
console.log(str);
console.log("用户名："+str.slice(0,8));
console.log("密码："+str.slice(9));
