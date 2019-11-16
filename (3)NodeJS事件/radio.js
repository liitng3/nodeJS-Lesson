const util=require("util");
const events=require("events");
const EventEmitter=events.EventEmitter;
function Radio(name,speed){
    EventEmitter.call(this);
    var that=this;
    this.name=name;
    this.speed=speed;
    setTimeout(function(){
        that.emit("open");
        setTimeout(function(){
            that.emit("play");
            setTimeout(function(){
                that.emit("close");
            }, 0);
        }, 2000);
    }, 0);
}
util.inherits(Radio,EventEmitter);
module.exports=Radio; 

/*实现继承的方法
1.parent.call(this)
child.prototype.__proto__=parent.prototype
2.child extends parent
3.util.inherits(child,parent);
 */


