var express = require('express');
var router = express.Router();
var http = require('http');
const {JSDOM} = require('jsdom');
const { route } = require('.');
function getdata(url){
  return new Promise((reg,res)=>{
      http.get(url,data=>{
          var html = '';
          data.on('data', function (data) {
          html += data;
          });
          data.on('end', function () {
              reg(html);
          });
          data.on('error',(e)=>{
              res(e)
          })
      })      
  })
}
function getJquery(data){
  const {document} = (new JSDOM(data)).window;
  const window = document.defaultView;
  const $ = require('jquery')(window);
  return {$,document};
}

router.get('/select',async function(req, res, next) {
  let data =  await getdata(`http://www.4080.org/index.php?m=vod-search-wd-${req.query.name}`);
  var {$,document} = getJquery(data);
  let d = Array.from($(document.body).find('.clist>li>a')).map(e=>[e.href,$(e.innerHTML)[0].alt]);
  // console.log(Array.from($(document.body).find('.clist>li>a')))
   res.send(d)
});
router.get('/Drama',async(req,res,next)=>{
   data = await getdata('http://www.4080.org'+req.query.path);
  var {$,document} = getJquery(data);
  let pop =  Array.from($(document.body).find('div.mb.b.bg').find('.vlist>ul')).map(e=>$(e).find('li>a')).map(e=>Array.from(e).map(e=>[e.href,e.innerHTML]));
  res.send(pop);
})
router.get('/jishu',async(req,res,next)=>{
  data = await getdata('http://www.4080.org'+req.query.path);
 var {$,document} = getJquery(data);
 let pop = $(document.body).find('#playbox>script')[0].innerHTML.split(',')[6]
//  let pop =  Array.from($(document.body).find('div.mb.b.bg').find('.vlist>ul')).map(e=>$(e).find('li>a')).map(e=>Array.from(e).map(e=>[e.href,e.innerHTML]));
 res.send(pop);
})
module.exports = router;
