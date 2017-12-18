var now=new Date();
var month=now.getMonth()+1;
var day=now.getDate();
var year=now.getFullYear();
var hours=now.getHours();
var part="";
var hfrm;
//control AM and PM
	if (hours>11){
		part="pm";
	}
	else {part="am";}
var minutes=now.getMinutes();
//ensure time always displays two digits
	if(minutes<10){
		minutes="0" + minutes;
	}
var showdate=month + "/" + day + "/" + year + "  " + hours + ":" + minutes + part;
mail=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
fon=/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/

function makeFrm(){
	if (document.getElementById('validfrm')){
    hfrm=document.getElementById('validfrm');
    hfrm.addEventListener('submit',function(){validateEvent(hfrm)},false);
  }
  else {
    alert('form not loaded');
  }
}
function validateEvent(frm){
	errorMsg=""
	p=0
	while (p<frm.length){
		frm.elements[p].style.background="white"
		errorMsg+=Emptfld(frm);
		errorMsg+=Numchk(frm);
		errorMsg+=valiDate(frm);
		errorMsg+=chkEmail(frm);
		errorMsg+=chkfone(frm);
	  p++
  }
	if (errorMsg!=""){
    errorMsg=cleanup();
  	err="<div id='shell'>";
  	err+="<div id='msg-head'>Error Message!</div>";
  	err+="<div id='errbody'>" + errorMsg + "</div>";
  	err+="<button id='button' onclick='rere();'>Retry</button>";
  	err+="<div class='clear'></div>";
  	err+="</div>";
	  document.getElementById("point").innerHTML=err;
	  return false;
  }
}
function rere(){
	document.getElementById("point").innerHTML="";
}
function Emptfld(frm){
	error=""
	if (frm.elements[p].className.includes('empty')){
		if (frm.elements[p].value=="" || frm.elements[p].value==null){
			frm.elements[p].style.background="red";
			error+="You must fill out the " + frm.elements[p].name + " field<br />";}
	}
	return error;
}
function Numchk(frm){
	error=""
	if (frm.elements[p].className.includes('number')){
		if (isNaN(frm.elements[p].value) && frm.elements[p].value.length>0){
			frm.elements[p].style.background="yellow"
			error+="The " + frm.elements[p].name + " field must be a number<br />"}
	}
	return error;
}
function valiDate(frm){
	error=""
		if (frm.elements[p].className.includes('month')){
			if (frm.elements[p].value=="00" || frm.elements[p].value>12 || frm.elements[p].value.length==1 && frm.elements[p].value.length>0){
				frm.elements[p].style.background="yellow"
				error+="Please enter a valid " + frm.elements[p].name + "<br />"}
		}
		else if (frm.elements[p].className.includes('day')){
			if (frm.elements[p].value=="00" || frm.elements[p].value>31 || frm.elements[p].value.length==1 && frm.elements[p].value.length>0){
				frm.elements[p].style.background="yellow"
				error+="Please enter a valid " + frm.elements[p].name + "<br />"}
		}
		else if (frm.elements[p].className.includes('year')){
			if (frm.elements[p].value<year && frm.elements[p].value.length>0){
				frm.elements[p].style.background="yellow"
				error+="Please enter a valid " + frm.elements[p].name + "<br >"}
		}
	return error;
}
function chkEmail(frm){
	error=""
	if (frm.elements[p].className.includes('email')){
		if (mail.test(frm.elements[p].value)==false && frm.elements[p].value.length>0){
			frm.elements[p].style.background="yellow";
			error+="Please enter a valid email address in the " + frm.elements[p].name + " field<br />"}
	}
	return error;
}
function chkfone(frm){
	error=""
	if (frm.elements[p].className.includes('phone')){
		if (fon.test(frm.elements[p].value)==false && frm.elements[p].value.length>0){
			frm.elements[p].style.background="yellow"
			error+="Please enter a valid phone number in the " + frm.elements[p].name + " field<br />"}
	}
	return error;
}
function cleanup(){
	errorMsg=errorMsg.replace(/_/g," ");
	return errorMsg;
}

document.addEventListener('DOMContentLoaded',makeFrm,false);
