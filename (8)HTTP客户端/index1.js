const cheerio=require("cheerio");
const fs=require("fs");
const http=require("http");
const path=require("path");
const https=require("https");
const url=require("url");

var server=http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName=="/"){
        var fileContent=fs.readFileSync(__dirname+"/index.html"); 
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(fileContent.toString());
        res.end();
   
    }
    else if(pathName=="/getlist"){
        https.get("https://maoyan.com/films",function(resobj) {   //得到的res是一个流
            var result="";
            resobj.on("data",function(chunk){
                result+=chunk;
                
            })
            resobj.on("end",function(chunk){
                console.log(result);
                const $=cheerio.load(result);
                var movieList=[];
                $(".movie-item-title a").each(function(){
                    var movie={};
                    movie.movieId=$(this).attr("data-val").slice(9,-1);
                    movie.movieName=$(this).text();
                    if(isNaN(parseInt($(this).parent().next().text()))){
                        movie.movieRange="暂无评分";
                    }
                    else{
                        movie.movieRange=$(this).parent().next().children(".integer,.fraction").text();
                    }
                    movie.movieRange == "暂无评分";
                    movieList.push(movie);
                    
                })
                var str=JSON.stringify(movieList);
                res.end(str);
            })
        })
        
    }
}).listen(8081);