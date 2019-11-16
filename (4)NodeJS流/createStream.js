const stream=require("stream");
var reader=new stream.Readable(); 
function MyReadable(){
    for(var i=0;i<26;i++){
        reader.push(String.fromCharCode(65+i));
    }
    reader.push(null);
    reader.pipe(process.stdout);           //stdout是标准输出

}
MyReadable();


