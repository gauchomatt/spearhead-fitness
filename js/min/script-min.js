function fadedEls(n,e){switch(n.css("opacity",0),e){case void 0:e=0;break;case"h":e=n.eq(0).outerHeight();break;case"h/2":e=n.eq(0).outerHeight()/2}$(window).resize(function(){n.hasClass("ani-processed")||n.eq(0).data("scrollPos",n.eq(0).offset().top-$(window).height()+e)}).scroll(function(){n.hasClass("ani-processed")||$(window).scrollTop()>=n.eq(0).data("scrollPos")&&(n.addClass("ani-processed"),n.each(function(n){$(this).delay(200*n).animate({opacity:1},1e3)}))})}!function($){$(function(){var n={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.Android()||n.BlackBerry()||n.iOS()||n.Opera()||n.Windows()}};$(window).resize(function(){var n=$(window).height();$("section.header-10-sub").css("height",n-$("header").outerHeight()+"px")}),$(".header-10-sub .scroll-btn a").on("click",function(n){return n.preventDefault(),$.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1}),$(".header-10-sub .hero-unit a").on("click",function(n){n.preventDefault(),$.scrollTo($("#"+$(this).data("section")),{axis:"y",duration:500})}),$(".nav, .nav-scroll").find("a").on("click",function(n){$.scrollTo($("#"+$(this).data("section")),{axis:"y",duration:500,filter:":not(.external)"})}),$(".header-10-sub, .content-23.custom-bg").each(function(){n.any()?$(this).css("background-attachment","initial"):$(this).parallax("50%",.3,!0)}),$(".content-8").length>0&&fadedEls($(".content-8"),300),$(".content-7").length>0&&(fadedEls($(".content-7"),300),function(n){$("img:first-child",n).css("left","-29.7%"),$(window).resize(function(){n.hasClass("ani-processed")||n.data("scrollPos",n.offset().top-$(window).height()+n.outerHeight())}).scroll(function(){n.hasClass("ani-processed")||$(window).scrollTop()>=n.data("scrollPos")&&(n.addClass("ani-processed"),$("img:first-child",n).animate({left:0},500))})}($(".screen"))),function(n){n.css("left","-100%"),$(window).resize(function(){n.hasClass("ani-processed")||n.data("scrollPos",n.offset().top-$(window).height()+n.outerHeight())}).scroll(function(){n.hasClass("ani-processed")||$(window).scrollTop()>=n.data("scrollPos")&&(n.addClass("ani-processed"),n.animate({left:0},500))})}($(".content-11 > .container")),$(window).resize().scroll()}),$(window).load(function(){$("html").addClass("loaded"),$(window).resize().scroll()}),startupKit.attachBgVideo()}(jQuery);