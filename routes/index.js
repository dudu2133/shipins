var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('../public/index.html')
});

module.exports = router;
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
// http://www.4080.org/inc/ajax.php?ac=suggest&aid=16&q=l&limit=10&timestamp=1612432840533
/* GET users listing. */
router.get('/',async function(req, res, next) {
    let data =  await getdata(`http://www.4080.org/index.php?m=vod-search-wd-${req.query.name}`);
    var {$,document} = getJquery(data);
    let d = [...$(document.body).find('.clist>li>A')].map(e=>e.href);
    data = await getdata('http://www.4080.org'+d[0]);
    var {$,document} = getJquery(data);
    let pop =  Array.from($(document.body).find('div.mb.b.bg').find('.vlist>ul')).map(e=>$(e).find('li>a')).map(e=>Array.from(e).map(e=>[e.href,e.innerHTML]));
    res.send(pop)
});

router.get('/sl',async function(req, res, next) {
  let data =  await getdata(`http://www.4080.org/index.php?m=vod-search-wd-${req.query.name}`);
  var {$,document} = getJquery(data);
  let d = [...$(document.body).find('.clist>li>A')].map(e=>e.href);
  data = await getdata('http://www.4080.org'+d[0]);
  var {$,document} = getJquery(data);
  let pop =  Array.from($(document.body).find('div.mb.b.bg').find('.vlist>ul')).map(e=>$(e).find('li>a')).map(e=>Array.from(e).map(e=>[e.href,e.innerHTML]));
  res.send(pop)
});






router.get('/selectj',async (req,res,next)=>{
  try{
  let data = await getdata('http://www.4480qpg.com'+req.query.path);
   res.send([[...$(d[0]).find('ul>li>a')].map(e=>e.innerHTML),[...$(d[1]).find('ul')].map(e=>[...$(e).find('li>a')].map(e=>[e.href,e.innerHTML]))]);
  }catch(e){
    res.send(e.message)
  }
})
router.get('/seach',async (req,res,next)=>{
  let data = await getdata('http://www.4480qpg.com'+req.query.path);
  const {document} = (new JSDOM(data)).window;
    const window = document.defaultView;
    const $ = require('jquery')(window);
    let d = [...$(document.body).find('div.stui-pannel.stui-pannel-bg.clearfix>.stui-pannel-box>div.stui-pannel_bd.col-pd')];
   res.send([[...$(d[0]).find('ul>li>a')].map(e=>e.innerHTML),[...$(d[1]).find('ul')].map(e=>[...$(e).find('li>a')].map(e=>[e.href,e.innerHTML]))]);
})
router.get('/dizhi',async(req,res,next)=>{
 let data = await getdata('http://www.4480qpg.com'+req.query.path)
    const {document} = (new JSDOM(data)).window;
    const window = document.defaultView;
    const $ = require('jquery')(window);
    let arr = [...$(document).find('.stui-player__video>script')];
    // [arr[1],arr[2]].map(e=>{})
    arr[0] = arr[0].innerHTML;
    arr[1] = await getdata('http://www.4480qpg.com'+arr[1].src);
    arr[2] = await getdata('http://www.4480qpg.com'+arr[2].src);
    res.json(arr);
})
// {/* <iframe width="100%" height="100%" src="" frameborder="0" allowfullscreen="true" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe> */}
{/* <iframe width="100%" height="100%"src="//titan.mgtv.com.voooe.cn/m3u8.php?bfq=dp&amp;url=https%3A%2F%2Fpcvideoydott.titan. mgtv.com%2Fc1%2F2020%2F01%2F10_0%2F69F815264368E480635B7A3C4D0B6413_20200110_1_1_2152_mp4%2F1046003395E639D02BDD73C842E05425.m3u8%3Farange%3D0%26pm%3DrAR52Yv9v4Pykx3RLVLEp0MofH7zQUQEPn8Nt8xsfwyJ6O5AQZnhkTNCEngxy0o43hRfEUNeQrQpqHTC3jLQE_GfeGiqIqh4rLiZUwIqoV1FaJtl3HFPmcoIOPDya1Mdrm1RS04JzqmRJy~t4P5TEANebd8K0NBKh8i3oectqGcXr8YnUthiRamtsSZr3K58Hqi7f8zeazsjCGSL5VaZzW1mqaA~5ijW_oCl3urhZwISdMCsMP3SJvmWWSe4F1933HVPZHOSro8twqDGMmA02Ol~qcpu7FXw4AdMTwvpHt3UhdJgcQ3DmZ8kzqe6ALoVK0D17BS4MNZnLsFe8QFM~ENEMRvv5xEn6NIT~aGhiMA549eDC~AwmWPdIlzZXgJv87Vy0ctnFevGQoE6_QlXzkKL6H5ZVnA3fQrXfbw8sSTC3AItzMuxv3DfPwHmTg4MJTUQ6MtJM2bxVlBNzComm8mIp~lrEJGnxQzM8pc8ey7xZx2w%26mr%3DG1Clow8cK~N3q4xE_yglOhTpX7uq5Avcx4TsWx3~wA8dfDrEFaEDqcExkcO7V8CUtyV7pSsa7PsDFEfBuwE1iozFvZTQieHJ5sHx5WuAnnB_ZXcBCcndsFtitFJGI7GakGfK1uB7rZP2ykV3SEO2aUEdtzID2kJ0wpzrR8cJG5PRcKNBKMNT~i6IPVUC~wW2FkSX~ZAqKAmpRzQLAzI9Dq8nEDw-%26vcdn%3D0%26scid%3D25066%26_t%3D1612348257670" frameborder="0" border="0" marginwidth="0" marginheight="0" allowfullscreen="true" scrolling="no"></iframe> */}
module.exports = router;

