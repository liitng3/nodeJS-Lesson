var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/add', function(req, res, next) {
  var title=req.body.title
  var content=req.body.content
  var con=mysql.createConnection(dbconfig)
  con.connect();
  con.query("insert into chapters(title,content) values(?,?)",[title,content],function(err,result){
     if(err){
       console.log(err)
     }
     else{
       console.log(result);
       res.end("insert success")
     }
  })
});
router.get("/list",function(req,res,next){
  var con=mysql.createConnection(dbconfig)
  con.connect();
  con.query("select * from chapters",function(err,result){
     if(err){
       console.log(err)
     }
     else{
      //  console.log(result);
      //  res.end("insert success")
      res.render("list.ejs",{chapterList:result})
     }
  })
})
router.get("/del",function(req,res,next){
  var chapterId=req.query.chapterid;
  var con=mysql.createConnection(dbconfig)
  con.connect();
  con.query("delete from chapters where chapterid=?",[chapterId],function(err,result){
     if(err){
       console.log(err)
     }
     else{
       res.end("delete success")
      // res.render("list.ejs",{chapterList:result})
     }
  })
})

/**
 * update chapters set content=? where chapterid=?
 */
module.exports = router;
