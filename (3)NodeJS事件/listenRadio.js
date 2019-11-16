var Listen=require("./radio.js");
var listen=new Listen("music radio","FM 106.7");                       
listen.on("open",function(){
    console.log('"'+this.name+'"'+this.speed+"opened");
})
listen.on("play",function(){
    console.log("lalalala");
})
listen.on("close",function(name,speed){
    console.log('"'+this.name+'"'+this.speed+"closed");
})

