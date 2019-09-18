/*自定义模块，自定义js文件，通过require来引入require(相对路径) 
  被引入模块通过module.exports对外公布自己的一些方法属性
  主模块可以访问被引入模块公布的方法属性
*/

// var child=require("./childmodule.js");
// console.log(child);
// child.sayHello();
// child.showName();
//console.log(userName);



var circleModule=require("./circleModule.js");
var r=process.argv[2];
var cricleobj=circleModule.circleFun(r);
//console.log(cricleobj);
console.log(cricleobj.circumference());
console.log(cricleobj.area());
