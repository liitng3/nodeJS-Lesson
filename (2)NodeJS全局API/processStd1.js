var user={
    name:null,
    email:null,
    qq:null,
    mobile:null
}

var i=0;
console.log("name:");
process.stdin.on("data",function(data){
    switch(i){
        case 0:
            console.log("email:");
            user.name=data.toString();
            break;
        case 1:
            console.log("qq:");
            user.email=data.toString();
            break;   
        case 2:
            console.log("mobile:");
            user.qq=data.toString();
            break; 
        case 3:
            user.mobile=data.toString();
            console.log("user:%j",user);
            process.exit();
            break; 

    }
    i++;
})