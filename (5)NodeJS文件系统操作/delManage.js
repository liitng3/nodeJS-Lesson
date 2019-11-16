const fs=require("fs");          //fs.rmdirSync("dirfile"); //rmdirSync删除文件夹(必须是空的，才可以成功删除)
const path=require("path");
var filename=process.argv[2];
var pathName=path.join(__dirname,"/"+filename);

if(fs.existsSync(pathName)){
    var statobj=fs.statSync(pathName);
    if(statobj.isFile()){
        fs.unlinkSync(pathName);      
    }
    else{
        delDir(pathName);
    }
}
else{
    console.log("not exist");
}

function delDir(pathName){
    var files=fs.readdirSync(pathName);     //读取目录

    for(var i=0;i<files.length;i++){
        var path1=path.join(pathName,files[i]);
        console.log(path1)
        if(fs.statSync(path1).isFile()){
            fs.unlinkSync(path1);
        }
        else if(fs.statSync(path1).isDirectory()){
            delDir(path1);
        }
        //该级联的 if-else-if 多分支结构的执行流程是：从前往后计算各个表达式的值，如果某个表达式的值为真，则执行对应的语句，并终止整个多分支结构的执行
    }
    fs.rmdirSync(pathName);

}
//最好不要用pathname,记得要把N大写，不然可能识别不过来=========================================================