$(document).ready(function(){$(".js--services-section").waypoint(function(n){"down"==n?$("nav").addClass("sticky"):$("nav").removeClass("sticky")});mixitup(".container");$("a").on("click",function(n){if(""!==this.hash){n.preventDefault();var t=this.hash;$("html,body").animate({scrollTop:$(t).offset().top},800,function(){window.location.hash=t})}})});let box=document.querySelector(".icon");box.addEventListener("click",function(){var n=document.getElementById("myLinks");"block"===n.style.display?n.style.display="none":n.style.display="block"});
$("svg.radial-progress").each(function(e,t){$(this).find($("circle.complete")).removeAttr("style")}),$(window).scroll(function(){$("svg.radial-progress").each(function(e,t){$(window).scrollTop()>$(this).offset().top-.75*$(window).height()&&$(window).scrollTop()<$(this).offset().top+$(this).height()-.25*$(window).height()&&(percent=$(t).data("percentage"),radius=$(this).find($("circle.complete")).attr("r"),circumference=2*Math.PI*radius,strokeDashOffset=circumference-percent*circumference/100,$(this).find($("circle.complete")).animate({"stroke-dashoffset":strokeDashOffset},1250))})}).trigger("scroll");