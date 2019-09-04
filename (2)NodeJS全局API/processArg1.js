var sum=0;
if(process.argv[2]==undefined){
    console.log("命令行参数错误");
}
else if(process.argv[2]=="-h"){
    console.log("帮助")
}
else{
    sum=eval(process.argv[2]);
    console.log(process.argv[2]+"=%s",sum);
}