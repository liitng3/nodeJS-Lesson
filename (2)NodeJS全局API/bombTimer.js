setTimeout(function(){
    function Bomb(){
       
    }
    Bomb.prototype.message="bomb!!!";
    Bomb.prototype.explode=function(){
        console.log(this.message);
    }
    var bomb=new Bomb();
    bomb.explode();
},2000)