const events=require("events");
const EventEmitter=events.EventEmitter;

function Dog(dogname){
    //1.执行一遍父构造函数，并且this指向是子构造函数的
    EventEmitter.call(this);             //将EventEmitter的指向指向了dog
    this.dogname=dogname;
    var that=this;
    setTimeout(function(){
        that.emit("bark");
    },0);
    // this.emit("bark");    //利用了事件的异步机制
}
//2.子构造函数继承父构造函数prototype上面的相关方法
Dog.prototype.__proto__=EventEmitter.prototype;
var dog=new Dog("kitty");
dog.on("bark",function(){
    console.log(this.dogname+"can bark");
})
var dog1=new Dog("Lili");
dog1.on("bark",function(){
    console.log(this.dogname+"can bark");
})