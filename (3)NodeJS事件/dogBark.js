var dog=require("./dog.js");
console.log(dog);
var dog1=new dog("kitty",8);
var dog2=new dog("taidi",3);
dog1.on("bark",function(){                                            //dog1.on   可以.on   说明dog1继承了evevnt    
    console.log(this.dogname+"barked!"+","+"energy:"+this.energy);
    if(this.energy==0){
        process.exit();
    }
    this.energy=this.energy-1;
    
});
dog2.on("bark",function(){
    console.log(this.dogname+"barked!"+","+"energy:"+this.energy);
    if(this.energy==0){
        process.exit();
    }
    this.energy=this.energy-1;
})