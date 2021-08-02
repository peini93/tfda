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
  TweenMax.to($('.gameC .bigtitle'), 0.6, {autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.gameC .bigtitle'), 0.6, {autoAlpha:0,delay:3,ease:Quad.easeOut});
  TweenMax.to($('.catteacher'), 0.6, {marginLeft:-50,autoAlpha:0,delay:3,ease:Quad.easeOut});
  TweenMax.to($('.gameC .qlist,.gameC .alist'), 0.6, {autoAlpha:1,delay:3,ease:Quad.easeOut});
  TweenMax.to($('#count'), 0.6, {autoAlpha:0.2,delay:3,ease:Quad.easeOut,onComplete:timestart});

}
function timestart(){
    timer = window.setInterval("timego()",1000);
}

function timego(){
  count--;
  document.getElementById("count").innerHTML = count;
   if (count==0){
    window.clearInterval(timer);
    TweenMax.to($('#count'), 0.3, {autoAlpha:0,ease:Quad.easeOut,onComplete:timestart});
    gamecstart();

  }
}
function gamecstart(){
  pairnum=0;
  pairnum2=0;
  $('.gameC .alist li.ori img').css("display","none");
  $('.gameC .alist li.ori').removeClass("acted");
  $('.gameC .qlist li.ori').removeClass("acted");
  alistopen();
  qlistopen();


}

function alistopen(){

  $('.alist li.ori').click(function(){
    $(".alist li.ori").children('img').css( "display", "none" );
    $(this).children('img').css( "display", "block" );
    $(".alist li.ori").removeClass("acted");
    $(this).addClass("acted");
    pairnum=1;
    console.log(pairnum);
     pairresult();
  });
}
function qlistopen(){
   console.log(pairnum2);
  $('.qlist li.ori').click(function(){
    $(".qlist li.ori").removeClass("acted");
    $(this).addClass("acted");
    pairnum2=1;
     console.log(pairnum2);
      pairresult();
  });
}




function pairresult(){
  var $paira1 = $(".alist li.a1");
  var $pairq1 = $(".qlist li.q1");
  var $paira2 = $(".alist li.a2");
  var $pairq2 = $(".qlist li.q2");
  var $paira3 = $(".alist li.a3");
  var $pairq3 = $(".qlist li.q3");
  var $paira4 = $(".alist li.a4");
  var $pairq4 = $(".qlist li.q4");
  var $paira5 = $(".alist li.a5");
  var $pairq5 = $(".qlist li.q5");
  var $paira6 = $(".alist li.a6");
  var $pairq6 = $(".qlist li.q6");
  var $paira7 = $(".alist li.a7");
  var $pairq7 = $(".qlist li.q7");
  var $paira8 = $(".alist li.a8");
  var $pairq8 = $(".qlist li.q8");
  var $paira9 = $(".alist li.a9");
  var $pairq9 = $(".qlist li.q9");
  console.log('in');
  if (pairnum==1 && pairnum2==1) {
    $('.alist li.ori').unbind( "click" );
    $('.qlist li.ori').unbind( "click" );

    if ($paira1.hasClass("acted") && $pairq1.hasClass("acted") && !$paira1.hasClass("ok") ) {
      TweenMax.to($('.alist li.a1 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      TweenMax.to($('.qlist li.q1 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      $paira1.removeClass("ori");
      $paira1.addClass("ok");
      $pairq1.removeClass("ori");
      $pairq1.addClass("ok");
      gamecstart();
      pairoknum++
      checkallright();
    }else if($paira2.hasClass("acted") && $pairq2.hasClass("acted") && !$paira2.hasClass("ok")){
      TweenMax.to($('.alist li.a2 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      TweenMax.to($('.qlist li.q2 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      $paira2.removeClass("ori");
      $paira2.addClass("ok");
      $pairq2.removeClass("ori");
      $pairq2.addClass("ok");
      gamecstart();
      pairoknum++
      checkallright();
    }else if($paira3.hasClass("acted") && $pairq3.hasClass("acted") && !$paira3.hasClass("ok")){
      TweenMax.to($('.alist li.a3 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      TweenMax.to($('.qlist li.q3 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      $paira3.removeClass("ori");
      $paira3.addClass("ok");
      $pairq3.removeClass("ori");
      $pairq3.addClass("ok");
      gamecstart();
      pairoknum++
      checkallright();
    }else if($paira4.hasClass("acted") && $pairq4.hasClass("acted") && !$paira4.hasClass("ok")){
      TweenMax.to($('.alist li.a4 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      TweenMax.to($('.qlist li.q4 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      $paira4.removeClass("ori");
      $paira4.addClass("ok");
      $pairq4.removeClass("ori");
      $pairq4.addClass("ok");
      gamecstart();
      pairoknum++
      checkallright();
    }else if($paira5.hasClass("acted") && $pairq5.hasClass("acted") && !$paira5.hasClass("ok")){
      TweenMax.to($('.alist li.a5 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      TweenMax.to($('.qlist li.q5 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      $paira5.removeClass("ori");
      $paira5.addClass("ok");
      $pairq5.removeClass("ori");
      $pairq5.addClass("ok");
      gamecstart();
      pairoknum++
      checkallright();
    }else if($paira6.hasClass("acted") && $pairq6.hasClass("acted") && !$paira6.hasClass("ok")){
      TweenMax.to($('.alist li.a6 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      TweenMax.to($('.qlist li.q6 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      $paira6.removeClass("ori");
      $paira6.addClass("ok");
      $pairq6.removeClass("ori");
      $pairq6.addClass("ok");
      gamecstart();
      pairoknum++
      checkallright();
    }else if($paira7.hasClass("acted") && $pairq7.hasClass("acted") && !$paira7.hasClass("ok")){
      TweenMax.to($('.alist li.a7 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      TweenMax.to($('.qlist li.q7 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      $paira7.removeClass("ori");
      $paira7.addClass("ok");
      $pairq7.removeClass("ori");
      $pairq7.addClass("ok");
      gamecstart();
      pairoknum++
      checkallright();
    }else if($paira8.hasClass("acted") && $pairq8.hasClass("acted") && !$paira8.hasClass("ok")){
      TweenMax.to($('.alist li.a8 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      TweenMax.to($('.qlist li.q8 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      $paira8.removeClass("ori");
      $paira8.addClass("ok");
      $pairq8.removeClass("ori");
      $pairq8.addClass("ok");
      gamecstart();
      pairoknum++
      checkallright();
    }else if($paira9.hasClass("acted") && $pairq9.hasClass("acted") && !$paira9.hasClass("ok")){
      TweenMax.to($('.alist li.a9 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      TweenMax.to($('.qlist li.q9 .rcircle'), 0.1, {autoAlpha:1,ease:Quad.easeOut});
      $paira9.removeClass("ori");
      $paira9.addClass("ok");
      $pairq9.removeClass("ori");
      $pairq9.addClass("ok");
      gamecstart();
      pairoknum++
      checkallright();
    }else{
      gamecwrong();
    }

  }
}
function checkallright(){
  if(pairoknum==6){
    gamecallright();
  }
}



function gamecwrong(){
  TweenMax.to($('.gameC .wrong'), 0.6, {marginTop:0,autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.gameC .wrong'), 0.6, {marginTop:50,autoAlpha:0,delay:2,ease:Quad.easeOut,onComplete:gamecstart});
}
function gamecallright(){
   TweenMax.to($('.gameC .allright'), 0.6, {autoAlpha:1,marginTop:0,ease:Quad.easeOut});

}

function gameDanimate(){
  TweenMax.to($('.gameD .qtitle'), 0.6, {autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.gameD .qtitle'), 0.6, {autoAlpha:0,delay:3,ease:Quad.easeOut});
  TweenMax.to($('.gameD .itemwrap'), 0.6, {autoAlpha:1,delay:3,ease:Quad.easeOut});

  gamedq1();
}
function gamedwrong(){
  TweenMax.to($('.gameD .wrong'), 0.6, {marginTop:0,autoAlpha:1,ease:Quad.easeOut});
  TweenMax.to($('.gameD .wrong'), 0.6, {marginTop:50,autoAlpha:0,delay:2,ease:Quad.easeOut});
}
function gamedq1(){
  TweenMax.to($('.itemwrap a'), 0.4, {scale:0.9,repeat:-1, yoyo:true,ease:Quad.easeOut});
  TweenMax.to($('.gameD .t1'), 0.6, {autoAlpha:1,marginTop:0,delay:3.5,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q1'), 0.6, {autoAlpha:1,marginLeft:0,delay:3,ease:Quad.easeOut});
  dnum=1;
  console.log(dnum);

}
function item1(){
  switch(dnum) {
      case 1:
        gamedwrong();
        break;
      case 2:
        gamedwrong();
        break;
      case 3:
        gamedwrong();
        break;
      case 4:
        gamedwrong();
        break;
      case 5:
        gamedwrong();
        break;
      case 6:
        gamedq7();
        break;
      case 7:
        gamedwrong();
        break;
      case 8:
        gamedwrong();
        break;
      case 9:
        gamedwrong();
        break;

  }
}
function item2(){
  switch(dnum) {
      case 1:
        gamedwrong();
        break;
      case 2:
        gamedwrong();
        break;
      case 3:
        gamedwrong();
        break;
      case 4:
        gamedwrong();
        break;
      case 5:
        gamedwrong();
        break;
      case 6:
        gamedwrong();
        break;
      case 7:
        gamedwrong();
        break;
      case 8:
        gamedwrong();
        break;
      case 9:
        gamedwrong();
        break;

  }
}
function item3(){
  switch(dnum) {
      case 1:
        gamedwrong();
        break;
      case 2:
        gamedwrong();
        break;
      case 3:
        gamedwrong();
        break;
      case 4:
        gamedwrong();
        break;
      case 5:
        gamedwrong();
        break;
      case 6:
        gamedwrong();
        break;
      case 7:
        gamedq8();
        break;
      case 8:
        gamedwrong();
        break;
      case 9:
        gamedwrong();
        break;
  }
}
function item4(){
  switch(dnum) {
      case 1:
        gamedwrong();
        break;
      case 2:
        gamedwrong();
        break;
      case 3:
        gamedwrong();
        break;
      case 4:
        gamedwrong();
        break;
      case 5:
        gamedwrong();
        break;
      case 6:
        gamedwrong();
        break;
      case 7:
        gamedwrong();
        break;
      case 8:
        gamedwrong();
        break;
  }
}
function item5(){
  switch(dnum) {
      case 1:
        gamedq2();
        break;
      case 2:
        gamedq3();
        break;
      case 3:
        gamedq4();
        break;
      case 4:
        gamedq5();
        break;
      case 5:
        gamedwrong();
        break;
      case 6:
        gamedwrong();
        break;
      case 7:
        gamedwrong();
        break;
      case 8:
        gamedq9();
        break;
      case 9:
        gamedallright();
        break;

  }
}
function item6(){
  switch(dnum) {
      case 1:
        gamedwrong();
        break;
      case 2:
        gamedwrong();
        break;
      case 3:
        gamedwrong();
        break;
      case 4:
        gamedwrong();
        break;
      case 5:
        gamedq6();
        break;
      case 6:
        gamedwrong();
        break;
      case 7:
        gamedwrong();
        break;
      case 8:
        gamedwrong();
        break;
  }
}
function gamedq2(){
  TweenMax.to($('.gameD .t1'), 0.6, {autoAlpha:0,marginTop:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q1'), 0.6, {autoAlpha:0,marginLeft:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .t2'), 0.6, {autoAlpha:1,marginTop:0,delay:1.5,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q2'), 0.6, {autoAlpha:1,marginLeft:0,delay:1,ease:Quad.easeOut});
   dnum=2;
  console.log(dnum);

}
function gamedq3(){
  TweenMax.to($('.gameD .t2'), 0.6, {autoAlpha:0,marginTop:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q2'), 0.6, {autoAlpha:0,marginLeft:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .t3'), 0.6, {autoAlpha:1,marginTop:0,delay:1.5,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q3'), 0.6, {autoAlpha:1,marginLeft:0,delay:1,ease:Quad.easeOut});
  dnum=3;
  console.log(dnum);

}
function gamedq4(){
  TweenMax.to($('.gameD .t3'), 0.6, {autoAlpha:0,marginTop:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q3'), 0.6, {autoAlpha:0,marginLeft:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .t4'), 0.6, {autoAlpha:1,marginTop:0,delay:1.5,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q4'), 0.6, {autoAlpha:1,marginLeft:0,delay:1,ease:Quad.easeOut});
  dnum=4;
  console.log(dnum);

}
function gamedq5(){
  TweenMax.to($('.gameD .t4'), 0.6, {autoAlpha:0,marginTop:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q4'), 0.6, {autoAlpha:0,marginLeft:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .t5'), 0.6, {autoAlpha:1,marginTop:0,delay:1.5,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q5'), 0.6, {autoAlpha:1,marginLeft:0,delay:1,ease:Quad.easeOut});
  dnum=5;
  console.log(dnum);

}
function gamedq6(){
  TweenMax.to($('.gameD .t5'), 0.6, {autoAlpha:0,marginTop:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q5'), 0.6, {autoAlpha:0,marginLeft:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .t6'), 0.6, {autoAlpha:1,marginTop:0,delay:1.5,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q6'), 0.6, {autoAlpha:1,marginLeft:0,delay:1,ease:Quad.easeOut});
  dnum=6;
  console.log(dnum);

}
function gamedq7(){
  TweenMax.to($('.gameD .t6'), 0.6, {autoAlpha:0,marginTop:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q6'), 0.6, {autoAlpha:0,marginLeft:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .t7'), 0.6, {autoAlpha:1,marginTop:0,delay:1.5,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q7'), 0.6, {autoAlpha:1,marginLeft:0,delay:1,ease:Quad.easeOut});
  dnum=7;
  console.log(dnum);

}

function gamedq8(){
  TweenMax.to($('.gameD .t7'), 0.6, {autoAlpha:0,marginTop:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q7'), 0.6, {autoAlpha:0,marginLeft:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .t8'), 0.6, {autoAlpha:1,marginTop:0,delay:1.5,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q8'), 0.6, {autoAlpha:1,marginLeft:0,delay:1,ease:Quad.easeOut});
  dnum=8;
  console.log(dnum);

}

function gamedq9(){
  TweenMax.to($('.gameD .t8'), 0.6, {autoAlpha:0,marginTop:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q8'), 0.6, {autoAlpha:0,marginLeft:-30,ease:Quad.easeOut});
  TweenMax.to($('.gameD .t9'), 0.6, {autoAlpha:1,marginTop:0,delay:1.5,ease:Quad.easeOut});
  TweenMax.to($('.gameD .q9'), 0.6, {autoAlpha:1,marginLeft:0,delay:1,ease:Quad.easeOut});
  dnum=9;
  console.log(dnum);

}

function gamedallright(){
  TweenMax.to($('.gameD .wrong'), 0.6, {marginTop:50,autoAlpha:0,ease:Quad.easeOut});
  TweenMax.to($('.gameD .allright'), 0.6, {autoAlpha:1,marginTop:0,ease:Quad.easeOut});

}



