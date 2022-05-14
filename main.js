let nav=document.getElementById("nav-open");
let close=document.getElementById("close");
nav.onclick=function(){
    console.log("click")
    document.getElementById("nav-content").style.display="block";
}
close.onclick=function(){
    document.getElementById("nav-content").style.display="none";
}