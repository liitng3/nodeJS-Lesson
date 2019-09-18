var obj={
    circumference:circumference,
    area:area
}
function circumference(r){
    return 2*r*Math.PI;
}
function area(r){
    return r*r*Math.PI;
}

module.exports= obj;