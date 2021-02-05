let http =  require('http');
// let $ = require('jquery');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;



// var player_aaaa={"flag":"play","encrypt":1,"trysee":0,"points":0,
// "link":"\/play\/133813-1-1.html","link_next":"\/play\/133813-2-2.html","link_pre":"",
// "url":"%68%74%74%70%73%3A%2F%2F%6D%75%64%61%6E%2E%69%69%69%2D%6B%75%79%75%6E%7A%79%2E%63%6F%6D%2F%32%30%31%39%31%32%32%30%2F%36%35%32%35%5F%64%37%36%38%66%34%61%38%2F%69%6E%64%65%78%2E%6D%33%75%38","url_next":"%68%74%74%70%73%3A%2F%2F%6D%75%64%61%6E%2E%69%69%69%2D%6B%75%79%75%6E%7A%79%2E%63%6F%6D%2F%32%30%31%39%31%32%32%30%2F%36%35%32%33%5F%63%36%37%64%31%35%63%62%2F%69%6E%64%65%78%2E%6D%33%75%38","from":"kkm3u8","server":"no","note":"","id":"133813","sid":2,"nid":1}

// getdata('http://www.4480qpg.com/play/133813-2-1.html').then(data=>{
//     const {document} = (new JSDOM(data)).window;
//     const window = document.defaultView;
//     const $ = require('jquery')(window);
//     // let d = [...$(document.body).find('div.stui-pannel.stui-pannel-bg.clearfix>.stui-pannel-box>div.stui-pannel_bd.col-pd')];
//     let d = JSON.parse($(document).find('.stui-player__video>script').html().split('=')[1]);
//     console.log(d.url)
//     // console.log(d)
//     // console.log($('div.MacPlayer.embed-responsive.embed-responsive-16by9>table tr td iframe'))
// })









// function getdata(url){
//     return new Promise((reg,res)=>{
//         http.get(url,data=>{
//             var html = '';
//             data.on('data', function (data) {
//             html += data;
//             });
//             data.on('end', function () {
//                 reg(html);
//             });
//             data.on('error',(e)=>{
//                 res(e)
//             })
//         })      
//     })
//   }

// getdata('http://www.4480qpg.com/search.html?wd=黄金瞳&submit=').then(data=>{
//     const {document} = (new JSDOM(data)).window;
//     const window = document.defaultView;
//     const $ = require('jquery')(window);
//     let dom = [...$($(data).find('.stui-pannel-box>div>.stui-vodlist__media.col-pd.clearfix')[0]).find('li')].map(e=>[[...$(e).find('a')].map(e=>e.href)[0],[...$(e).find('.title')].map(e=>e.innerHTML)[0]])
//     console.log(dom)
//     // console.log([...$(document).find('body').find('.title')].map(e=>e.innerHTML));
//     // console.log(dom)
//     // console.log($(data).find('.stui-pannel-box '))
//     // console.log($(data).find('li').prevObject)
// //    console.log($(document).find('.stui-pannel-box>div>.stui-vodlist__media.col-pd.clearfix')[0]);
// })

// [...$($(document.body).find('.stui-pannel-box .stui-vodlist__media.col-pd.clearfix')[0]).find('li')].map(e=>[[...$(e).find('a')].map(e=>e.href)[0],[...$(e).find('.title')].map(e=>e.innerHTML)[0]])

// let d = [...$(document.body).find('div.stui-pannel.stui-pannel-bg.clearfix>.stui-pannel-box>div.stui-pannel_bd.col-pd')];
// [...$(d[0]).find('ul>li>a')].map(e=>e.innerHTML)
// [...$(d[1]).find('ul')].map(e=>[...$(e).find('li>a')].map(e=>e))







// let reg = /^[\w]{4,16}/;
// let str = 'yangaho123';
// console.log(str.match(reg))
