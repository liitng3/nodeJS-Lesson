// const fs=require("fs");
// const path=require("path");
// console.log("创建文件夹：");
// process.stdin.on("data",function(data){
//     var cmd=data.toString();
//     var cmdArr=cmd.split(" ");
//     switch(cmdArr[0]){
//         case "mkdir":
//             console.log(cmdArr[1]+"1");
//             fs.mkdirSync(cmdArr[1].slice(0,-2));
//             //fs.mkdirSync(cmdArr[1]);
//             break;
//         case "touch":
//             var filepath=path.join(__dirname,"/filedir/file.txt");
//             fs.writeFileSync(filepath,"hello node");
//             break;
//         case "delect":
//             var filepath=path.join(__dirname,"/filedir/file.txt");
//             fs.unlinkSync(filepath);   //unlink删除文件     rmdirSync删除文件夹
//             break;
//         default:
//             console.log("something err");
//             break;
//     }
// })

const fs=require("fs");
const path=require("path");
var message=["创建文件夹:","创建文件:","删除文件:"]
var i=1
console.log(message[0])
process.stdin.on("data",function(data){
    var cmd=data.toString();
    var cmdArr=cmd.split(" ");
    switch(cmdArr[0]){
        case "mkdir":
            console.log(cmdArr[1]+"1");
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            //fs.mkdirSync(cmdArr[1]);
            break;
        case "touch":
            var filepath=path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filepath,"hello node");
            break;
        case "delect":
            var filepath=path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filepath);   //unlink删除文件     rmdirSync删除文件夹
            break;
        default:
            console.log("something err");
            break;
           
    }
    if(i==3){
        process.exit()
    }
    else{
        console.log(message[i++])
    }
})
