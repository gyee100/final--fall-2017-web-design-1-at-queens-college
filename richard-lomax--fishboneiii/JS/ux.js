var hme;

function setvars(){
  if(document.getElementById('hme')){
    hme=document.getElementById('hme');
    sethme();
  }
}

function sethme(){
  var x=Math.floor(Math.random()*4)+1;
  var p='artwork.html';
  if(!(x%2)){
    p='videos.html';
  }
  if(!(x%3)){
    p='code.html';
  }
  if(!(x%4)){
    p='about.html';
  }
  hme.href=p;
}

document.addEventListener('DOMContentLoaded',setvars,false);
