(function(){"use strict";
var t=document.querySelector(".nav-toggle"),m=document.getElementById("menu");
if(t&&m){var set=function(o){m.classList.toggle("open",o);t.setAttribute("aria-expanded",o?"true":"false");t.textContent=o?"Close":"Menu";};
t.addEventListener("click",function(){set(!m.classList.contains("open"));});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&m.classList.contains("open")){set(false);t.focus();}});}
var h=document.querySelector(".site-header");
if(h){var on=function(){h.classList.toggle("scrolled",window.scrollY>24);};on();window.addEventListener("scroll",on,{passive:true});}
var n=document.getElementById("bci-notice"),K="mlw_notice_ack";
if(n){var ack=false;try{ack=localStorage.getItem(K)==="1";}catch(e){}
if(!ack)n.hidden=false;
var b=n.querySelector("button");if(b)b.addEventListener("click",function(){n.hidden=true;try{localStorage.setItem(K,"1");}catch(e){}});}
})();
