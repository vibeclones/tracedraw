(function(){
var root=document.documentElement;
try{var t=localStorage.getItem("td-help-theme");if(t)root.setAttribute("data-theme",t);}catch(e){}
document.getElementById("theme").addEventListener("click",function(){
 var dark=root.getAttribute("data-theme")==="dark"||(!root.getAttribute("data-theme")&&matchMedia("(prefers-color-scheme: dark)").matches);
 var n=dark?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem("td-help-theme",n);}catch(e){}
});
document.getElementById("menu-toggle").addEventListener("click",function(){document.body.classList.toggle("menu-open");});
var lang=document.getElementById("lang");
lang.addEventListener("change",function(){
 location.href=HELP.up+"../"+lang.value+"/"+HELP.page+".html"+location.hash;
});
var tabs=document.querySelectorAll(".tabs button"),toc=document.getElementById("toc"),panel=document.getElementById("search-panel"),q=document.getElementById("q"),res=document.getElementById("results");
function show(which){
 tabs.forEach(function(b){b.setAttribute("aria-selected",String(b.dataset.tab===which));});
 toc.hidden=which!=="contents";panel.hidden=which!=="search";
 if(which==="search"){q.focus();load();}
 try{sessionStorage.setItem("td-help-tab",which);}catch(e){}
}
tabs.forEach(function(b){b.addEventListener("click",function(){show(b.dataset.tab);});});
var index=null,loading=false;
function load(){
 if(index||loading)return;loading=true;
 fetch(HELP.up+"search.json").then(function(r){return r.json();}).then(function(j){index=j;run();}).catch(function(){loading=false;});
}
function norm(s){return s.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"");}
function run(){
 if(!index)return;
 var terms=norm(q.value).split(/\s+/).filter(Boolean);
 res.innerHTML="";
 if(!terms.length)return;
 var hits=[];
 index.forEach(function(p){
  var t=norm(p.t),h=norm(p.h),x=norm(p.x),score=0;
  for(var i=0;i<terms.length;i++){
   var w=terms[i],s=0;
   if(t.indexOf(w)>=0)s+=20;if(h.indexOf(w)>=0)s+=6;
   var k=0,pos=x.indexOf(w);while(pos>=0&&k<20){k++;pos=x.indexOf(w,pos+w.length);}s+=k;
   if(!s)return;score+=s;
  }
  hits.push([score,p]);
 });
 hits.sort(function(a,b){return b[0]-a[0];});
 if(!hits.length){var li=document.createElement("li");li.textContent=HELP.none;res.appendChild(li);return;}
 hits.slice(0,40).forEach(function(e){
  var p=e[1],li=document.createElement("li"),a=document.createElement("a");
  a.href=HELP.up+p.p+".html";a.textContent=p.t;li.appendChild(a);
  var s=document.createElement("small");s.textContent=p.s;li.appendChild(s);res.appendChild(li);
 });
}
q.addEventListener("input",run);
try{if(sessionStorage.getItem("td-help-tab")==="search"){show("search");}}catch(e){}
var cur=document.querySelector("nav.toc a.current");if(cur&&cur.scrollIntoView)cur.scrollIntoView({block:"center"});
})();
