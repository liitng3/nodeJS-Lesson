var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/list', function(req, res, next) {
  //res.end('hello expre');
  //render页面渲染
  //读取ejs文件内容，将文件中占位符（<%=username %>），替换成后端给定的数据（也就是render的第二个参数），再将文件中的代码内容响应到客户端
  res.render("list",{userName:'liting',newList:[{"newId":1,newTitle:"1"},{"newId":2,newTitle:"2"}]});
})
router.get('/index/list', function(req, res, next) {
  res.end('hello expre  haha');
})
module.exports = router;
