var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express'});
});

// 获取新闻列表 
router.post('/getNews', function (req, res, next) {   
    const newsUrl= 'http://www.fabao.cn/api/FABAO_WEBSITE/news/getnewslist?nonce=1494326633000&pageSize=7&pageNumber=' + req.body.pageNumber;
    request(newsUrl, function (error, response, body) {     
        if (!error && response.statusCode == '200') { 
            res.send(body);     
        }   
    }) 
})

// 获取职位列表 
router.post('/getJobs', function (req, res, next) {
    console.log(req.body.jobId);   
    const jobsUrl = 'http://www.fabao.cn/api/FABAO_WEBSITE/job/getjobinfo?nonce=1494212786000&sectionid=' + req.body.jobId +'&pageNumber=1&pageSize=20';   
    console.log(jobsUrl);   
    request(jobsUrl, function (error, response, body) {     
        if(!error && response.statusCode == '200') {       
            res.send(body)     
        }   
    }) 
})

// 获取新闻详情
router.post('/getNewsDetail', function (req, res, next) {
  var newsDetailUrl = 'http://www.fabao.cn/api/FABAO_WEBSITE/news/getnewsdetail?nonce=1494322666000&id=' + req.body.id;
  request(newsDetailUrl, function (error, response, body) {
    if (!error && response.statusCode == '200') {
      res.send(body);
    }
  })
})

module.exports = router;
