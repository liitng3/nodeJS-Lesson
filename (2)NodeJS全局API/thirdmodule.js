/*
npm(node package manager)包管理器
npm上会有大量的第三方上传的模块
npm是一个远端的模块服务器

npm install 模块名称
回车，就会去npm服务器上查找该模块，如果存在该模块，就会下载到当前目录的node_modules文件夹中

npm安装成功的条件（1）需要网络  （2）需要该模块在npm上实际存在
*/

const now=require("date-now");
console.log(Date.now());
console.log(now());


/*模块查找在github上，左上角*/