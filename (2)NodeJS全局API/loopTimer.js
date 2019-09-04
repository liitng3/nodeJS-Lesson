setInterval(loop, 300); 
function loop(){ 
console.log("i will loop forever!")
} 
setTimeout(show,5000); 
function show(){ 
console.log("game over");
process.exit();
} 