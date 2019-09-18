function circleFun(r){

    function circumference(){
        return 2*r*Math.PI;
    }
    function area(){
        return r*r*Math.PI;
    }
    return{circumference:circumference,area:area};      //返回的是一个对象
    return{circumference:circumference(),area:area()};
}

module.exports={
    circleFun:circleFun
}