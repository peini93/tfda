var count=60;
var timer
var pairnum=0;
var pairnum2=0;
var dnum=0;
var pairoknum=0

$(document).ready(function() {

  TweenMax.to($('.bbg,.popup'), 0, {autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.niu,.niu_msg,.niu_msg2,.ken,.ken_msg,.patty,.patty_msg,.cat,.cat_msg,.handsomeboy_msg'), 0, {autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.catA,.gameA .bigq,.minicat,.gameA .q1,.gameA .q2,.gameA .q3,.gameA .q4,.gameA .q5,.gameA .q6,.gameA .wrong,.gameA .allright,.gameA .fincat'), 0, {autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameC .bigtitle,.gameC .qlist,.gameC .alist,#count,.gameC .wrong,.rcircle'), 0, {autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameD .qtitle,.gameD .itemwrap,.gameD .q1,.gameD .q2,.gameD .q3,.gameD .q4,.gameD .q5,.gameD .q6,.gameD .q7,.gameD .q8,.gameD .q9,.gameD .t1,.gameD .t2,.gameD .t3,.gameD .t4,.gameD .t5,.gameD .t9,.gameD .t6,.gameD .t7,.gameD .t8,.gameD .wrong'), 0, {autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameD .allright'), 0, {autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameC .allright'), 0, {autoAlpha:0,ease:Quad.easeOut});


  $(".alist li").each(function(){
      if(parseInt(Math.random()*2)==0){
          $(this).prependTo($(this).parent());
      }
  });

  $('body').jpreLoader({
    splashID: "#jSplash",
    loaderVPos: '50%',
    autoClose: true

  }, function() {
    indexanimate();
    gameBanimate();
    gameCanimate();
    gameDanimate();
    formanimate();

    var mc1=$('.girl-index,.gform,.gameB-girl,.girl-head');
    mc1.animateSprite({
      columns: 5,
      totalFrames: 5,
      duration: 2000,
      loop:true 
    });

    var mc2=$('.cat-walking');
    mc2.animateSprite({
      columns: 2,
      totalFrames: 2,
      duration: 500,
      loop:true 
    });

    var mc3=$('.gamedcat,.g4q1,.g4q2,.g4q3,.g4q4,.g4q1-1,.g4q2-1,.g4q3-1,.g4q4-1');
    mc3.animateSprite({
      columns: 3,
      totalFrames: 3,
      duration: 500,
      loop:true 
    });

  });


});
function formanimate() {
  TweenMax.to($('.globelwrap'), 1, {marginTop:-30, repeat:-1, yoyo:true,ease:Linear.easeNone});

}


function indexanimate() {
  TweenMax.to($('.star1'), 2.5, {left:20,repeat:-1, yoyo:true,ease:Quad.easeOut});
  TweenMax.to($('.star2'), 3, {left:100,repeat:-1, yoyo:true,ease:Quad.easeOut});
  TweenMax.to($('.star3'), 3.5, {right:300,repeat:-1, yoyo:true,ease:Quad.easeOut});
  TweenMax.to($('.star4'), 4, {right:50,repeat:-1, yoyo:true,ease:Quad.easeOut});
  TweenMax.to($('.title'), 0.3, {alpha:1,top:60,delay:0.3,ease:Sine.easeOut});
  TweenMax.to($('.indexcat'), 0.3, {alpha:1,left:600,delay:0.8,ease:Sine.easeOut});
  TweenMax.to($('.no1'), 0.3, {alpha:1,top:370,delay:1.2,ease:Sine.easeOut,onComplete:gostart});
  TweenMax.to($('.no2'), 0.3, {alpha:1,top:175,delay:1.2,ease:Sine.easeOut,onComplete:gostart});
  TweenMax.to($('.girl-index'), 0.3, {alpha:1,right:320,delay:1.2,ease:Sine.easeOut});
  TweenMax.to($('.boy-index'), 0.3, {alpha:1,left:360,delay:1.4,ease:Sine.easeOut});
  TweenMax.to($('.dog-index'), 0.3, {alpha:1,right:505,delay:1.6,ease:Sine.easeOut});

  $( ".playbtn1,.playbtn2" ).hover(function() {
      TweenMax.to($(this), 0.3, {marginTop:-15});
   },function() {
      TweenMax.to($(this), 0.3, {marginTop:0});
   });

}

function gostart(){
  TweenMax.to($('.no1'), 0.8, {repeat:-1, yoyo:true,top:350,ease:Sine.easeOut,onComplete:gostart});
  TweenMax.to($('.no2'), 0.8, {repeat:-1, yoyo:true,top:195,ease:Sine.easeOut,onComplete:gostart});
}

function addfanspop() {
  $('#addfanswrap').css('display','block');
  TweenMax.to($('#addfanswrap .bbg'), 0, {autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('#addfanswrap .popup'), 0.6, {autoAlpha:1,marginTop:250,ease:Elastic.easeOut});
}
function awardpop() {
  $('#awardpopwrap').css('display','block');
  TweenMax.to($('#awardpopwrap .bbg'), 0, {autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('#awardpopwrap .popup'), 0.6, {autoAlpha:1,marginTop:250,ease:Elastic.easeOut});
}
function awardpopout() {
  $('#awardpopwrap').fadeOut(600);
  TweenMax.to($('#awardpopwrap .bbg'), 0, {delay:0.6,autoAlpha:0,ease:Elastic.easeOut});
  TweenMax.to($('#awardpopwrap .popup'), 0, {delay:0.6,autoAlpha:0,marginTop:300,ease:Elastic.easeOut});
}

/*第一關*/
function gostartA() {
  TweenMax.to($('.start-a'), 0.6, {top:-50,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.reciprocal'), 0.6, {top:160,autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.reciprocal'), 0.6, {top:0,autoAlpha:0,delay:3,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q1'), 0.6, {top:100,autoAlpha:1,delay:4,ease:Quad.easeOut});
}

function gameaq1ok() {
  TweenMax.to($('.gameA .wrong'), 0.6, {marginTop:50,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q1'), 0.6, {top:0,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q2'), 0.6, {top:100,autoAlpha:1,ease:Quad.easeOut});
}

function gameaq2ok() {
  TweenMax.to($('.gameA .wrong'), 0.6, {marginTop:50,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q2'), 0.6, {top:0,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q3'), 0.6, {top:100,autoAlpha:1,ease:Quad.easeOut});
}

function gameaq3ok() {
  TweenMax.to($('.gameA .wrong'), 0.6, {marginTop:50,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q3'), 0.6, {top:0,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q4'), 0.6, {top:100,autoAlpha:1,ease:Quad.easeOut});
}

function gameaq4ok() {
  TweenMax.to($('.gameA .wrong'), 0.6, {marginTop:50,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q4'), 0.6, {top:0,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q5'), 0.6, {top:100,autoAlpha:1,ease:Quad.easeOut});
}

function gameaq5ok() {
  TweenMax.to($('.gameA .wrong'), 0.6, {marginTop:50,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .q5'), 0.6, {top:0,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameA .allright'), 0.4, {top:150,autoAlpha:1,delay:1,ease:Quad.easeOut});
}

function gameawrong() {
  TweenMax.to($('.gameA .wrong'), 0.6, {marginTop:0,autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.gameA .wrong'), 0.6, {marginTop:50,autoAlpha:0,delay:2,ease:Quad.easeOut});
}

/*第二關*/
function gameBanimate(){
  TweenMax.to($('.gameB-start'), 0.3, {top:0,alpha:1,delay:0.3,ease:Sine.easeOut});
  TweenMax.to($('.gameB-girl'), 0.3, {right:0,alpha:1,delay:0.6,ease:Sine.easeOut});
}

function gamebstart(){
  TweenMax.to($('.gameB-start'), 0.3, {top:-380,alpha:0,ease:Sine.easeOut});
  TweenMax.to($('.gameB-girl'), 0.3, {right:80,alpha:1,ease:Sine.easeOut});
  TweenMax.to($('.shopping'), 0.6, {right:500,alpha:1,delay:0.3,ease:Sine.easeOut,onComplete:gamebqa});
  TweenMax.to($('.chart'), 0.6, {left:150,alpha:1,delay:0.6,ease:Sine.easeOut,onComplete:gamebqa});
}

function gamebqa(){
  TweenMax.to($('.gameB-girl'), 0.6, {right:-200,alpha:0,delay:3,ease:Sine.easeOut});
  TweenMax.to($('.shopping'), 0.6, {right:-100,alpha:0,delay:3,ease:Sine.easeOut});
  TweenMax.to($('.chart'), 0.6, {left:100,alpha:0,delay:3,ease:Sine.easeOut});
  TweenMax.to($('.gamebq'), 0.6, {right:0,alpha:1,delay:4,ease:Sine.easeOut});
  TweenMax.to($('.bottle'), 0.6, {left:0,alpha:1,delay:4,ease:Sine.easeOut});
}

function gamewrongB() {
  TweenMax.to($('.wrong'), 0.6, {top:300,autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.wrong'), 0.6, {top:0,autoAlpha:0,delay:2,ease:Quad.easeOut});
}

function gamecorrentB(elem) {
  TweenMax.to($('.corrent'), 0.6, {top:300,autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.corrent'), 0.6, {top:0,autoAlpha:0,delay:3,ease:Quad.easeOut});
  elem.classList.add('get');
  allright();
}

function allright(){
  TweenMax.to($('.gamebq'), 0.6, {right:0,alpha:0,delay:4,ease:Sine.easeOut});
  TweenMax.to($('.bottle'), 0.6, {left:0,alpha:0,delay:4,ease:Sine.easeOut});
  TweenMax.to($('.gameB-girl'), 0.3, {right:80,alpha:1,delay:5,ease:Sine.easeOut});
  TweenMax.to($('.shopping'), 0.6, {right:500,alpha:1,delay:5,ease:Sine.easeOut});
  TweenMax.to($('.allcorrent'), 0.6, {top:100,alpha:1,delay:5,ease:Sine.easeOut});
}

/*第三關*/

function gameCanimate(){
  TweenMax.to($('.table'), 0.3, {autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.gameccat'), 0.3, {left:200,autoAlpha:1,delay:1,ease:Quad.easeOut});
  TweenMax.to($('.gamec-start'), 0.3, {right:60,autoAlpha:1,delay:2,ease:Quad.easeOut});
  TweenMax.to($('.car-cosmetic'), 0.3, {left:200,autoAlpha:1,delay:2.5,ease:Quad.easeOut});
  TweenMax.to($('.car-notcosmetic'), 0.3, {right:200,autoAlpha:1,delay:2.5,ease:Quad.easeOut});

}

function gamestart(){
  TweenMax.to($('.gameccat'), 0.3, {left:-100,autoAlpha:0,delay:0.5,ease:Quad.easeOut});
  TweenMax.to($('.gamec-start'), 0.3, {right:-100,autoAlpha:0,delay:0.5,ease:Quad.easeOut});
  $(".p1,.p2,.p3,.p4,.p5,.p6,.p7,.p8,.p9,.p10").delay(500).fadeIn();
}

function gamecwrong(){
  TweenMax.to($('.gameC .wrong'), 0.6, {marginTop:0,autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.gameC .wrong'), 0.6, {marginTop:50,autoAlpha:0,delay:2,ease:Quad.easeOut});
}

function gamecallright(){
   TweenMax.to($('.gameC .allright'), 0.6, {autoAlpha:1,marginTop:0,ease:Quad.easeOut});
}

/*第四關*/

function gameDanimate(){
  TweenMax.to($('.gamedcat'), 0.3, {left:100,autoAlpha:1,delay:0.5,ease:Quad.easeOut});
  TweenMax.to($('.gamedstart'), 0.3, {right:0,autoAlpha:1,delay:0.8,ease:Quad.easeOut});
}

function gamedstart(){
  TweenMax.to($('.gamedcat'), 0.3, {left:-100,autoAlpha:0,delay:0.5,ease:Quad.easeOut});
  TweenMax.to($('.gamedstart'), 0.3, {right:-200,autoAlpha:0,delay:0.8,ease:Quad.easeOut});
  TweenMax.to($('.g4q1'), 0.3, {left:0,autoAlpha:1,delay:1,ease:Quad.easeOut});
  TweenMax.to($('#gamedq1'), 0.3, {right:0,autoAlpha:1,delay:1,ease:Quad.easeOut});
}

function gamedq1ok(){
  TweenMax.to($('.g4q1'), 0.3, {left:0,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.g4q1-1'), 0.3, {left:0,autoAlpha:1,delay:0.3,ease:Quad.easeOut});
  TweenMax.to($('.g4q1-1'), 0.3, {left:-200,autoAlpha:0,delay:2,ease:Quad.easeOut});
  TweenMax.to($('#gamedq1'), 0.3, {right:-200,autoAlpha:0,delay:2,ease:Quad.easeOut});
  TweenMax.to($('#gamedq2'), 0.3, {right:0,autoAlpha:1,delay:3,ease:Quad.easeOut});
  TweenMax.to($('.g4q2'), 0.3, {left:0,autoAlpha:1,delay:3,ease:Quad.easeOut});
}

function gamedq2ok(){
  TweenMax.to($('.g4q2'), 0.3, {left:0,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.g4q2-1'), 0.3, {left:0,autoAlpha:1,delay:0.3,ease:Quad.easeOut});
  TweenMax.to($('.g4q2-1'), 0.3, {left:-200,autoAlpha:0,delay:2,ease:Quad.easeOut});
  TweenMax.to($('#gamedq2'), 0.3, {right:-200,autoAlpha:0,delay:2,ease:Quad.easeOut});
  TweenMax.to($('#gamedq3'), 0.3, {right:0,autoAlpha:1,delay:3,ease:Quad.easeOut});
  TweenMax.to($('.g4q3'), 0.3, {left:0,autoAlpha:1,delay:3,ease:Quad.easeOut});
}

function gamedq3ok(){
  TweenMax.to($('.g4q3'), 0.3, {left:0,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.g4q3-1'), 0.3, {left:0,autoAlpha:1,delay:0.3,ease:Quad.easeOut});
  TweenMax.to($('.g4q3-1'), 0.3, {left:-200,autoAlpha:0,delay:2,ease:Quad.easeOut});
  TweenMax.to($('#gamedq3'), 0.3, {right:-200,autoAlpha:0,delay:2,ease:Quad.easeOut});
  TweenMax.to($('#gamedq4'), 0.3, {right:0,autoAlpha:1,delay:3,ease:Quad.easeOut});
  TweenMax.to($('.g4q4'), 0.3, {left:0,autoAlpha:1,delay:3,ease:Quad.easeOut});
}

function gamedallright(){
  TweenMax.to($('.g4q4'), 0.3, {left:0,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.g4q4-1'), 0.3, {left:0,autoAlpha:1,delay:0.3,ease:Quad.easeOut});
  TweenMax.to($('#gamedq4'), 0.3, {right:-200,autoAlpha:0,delay:0.5,ease:Quad.easeOut});
  $('.gamedallright').delay(1000).fadeIn();
}


function gamedwrong(){
  TweenMax.to($('.gameD .wrong'), 0.6, {marginTop:0,autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.gameD .wrong'), 0.6, {marginTop:50,autoAlpha:0,delay:2,ease:Quad.easeOut});
}





