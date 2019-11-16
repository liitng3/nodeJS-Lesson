// 1.创建server读取index.html  响应到客户端
// 2.在页面中发起ajax请求获取数据   服务端接收ajax请求，去猫眼网站上爬取数据
// 使用cheerio解析得到需要的数据，存储到数组里，再响应到客户端
// 3.在AJAX回调函数中使用响应到的数据，拼接到页面中显示

const cheerio=require("cheerio");
const fs=require("fs");
const http=require("http");
const path=require("path");
const https=require("https");


var server=http.createServer(function(req,res){
    var htmlPath=path.join(__dirname,"/index.html"); 
    fs.readFile(htmlPath,function(err,data){
        res.writeHead(200,{"Content-Type":"text/html"});
        console.log(data);
        res.write(data.toString());
        res.end();
    });
}).listen(8081);


var apiUrl="https://maoyan.com/films"
apiUrl=encodeURI(apiUrl);

https.get(apiUrl,function(res) {   //得到的res是一个流
    var result="";
    res.on("data",function(chunk){
        result+=chunk;
        const $=cheerio.load(result);
        var movieList=[];
        $(".movie-item-title a").each(function(){
            var movie={};
            movie.movieId=$(this).arrt("data-val").slice(9,-1);
            movie.movieName=$(this).text();
            if(isNaN(parseInt($(this).parent().next().text()))){
                movie.movieRange="暂无评分";
            }
            else{
                movie.movieRange=$(this).parent().next().children();
            }
            movie.movieRange == "暂无评分";
            console.log(movie);
            movieList.push(movie);
        })

    })
})

console.log("server is listening 8081");



