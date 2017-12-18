var date = new Date();
var today = date.getDate();
var curYear = date.getFullYear();
var curMonth = date.getMonth();
date.setDate(1);
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var monthSet = new Array();
monthSet[0] = 31;
monthSet[1] = 28;
monthSet[2] = 31;
monthSet[3] = 30;
monthSet[4] = 31;
monthSet[5] = 30;
monthSet[6] = 31;
monthSet[7] = 31;
monthSet[8] = 30;
monthSet[9] = 31;
monthSet[10] = 30;
monthSet[11] = 31;
var days=new Array();
days[0]="Sunday";
days[1]="Monday";
days[2]="Tuesday";
days[3]="Wednesday";
days[4]="Thursday";
days[5]="Friday";
days[6]="Saturday";

function calendar(){
cal=""
cal += "<table border='1' style='text-align:center'>"
cal += "<tr><td colspan='7' style='background-color:#b2c4cf'>&nbsp;</td></tr>"
cal += "<tr><td style='background-color:#b2c4cf'><a href='#' onClick='backYear();'> &#60; &#60; </a></td><td><a href='#' onClick='backMonth();'> &#60; </a></td><td colspan='3' id='spot'>" + month[date.getMonth()] + " " + date.getFullYear() + "</td><td><a href='#' onClick='upMonth();'> &#62; </a></td><td style='background-color:#b2c4cf'><a href='#' onClick='upYear();'> &#62; &#62; </a></td></tr>"
cal+="<tr>"
curDay=1
week=1
cchange=0
start=0
while (cchange < days.length) {
    if (cchange == 0 || cchange == 6) {
        cal += "<th style='background-color:#b2c4cf'>" + days[cchange] + "</th>";
        cchange++;
    }
    else {
        cal += "<th>" + days[cchange] + "</th>";
        cchange++;
    }
}
cal+="</tr>"
	while (week<6){
	dow=1
	cal+="<tr>"
	while (dow < 8) {
		if (start==date.getDay()){
			if (dow==1 && curDay<monthSet[date.getMonth()] || dow==7 && curDay<monthSet[date.getMonth()]){
			    cal += "<td style='background-color:#b2c4cf'>" + curDay + "</td>"
			}
			else if (curDay>monthSet[date.getMonth()]){
				cal+="<td style='background-color:#ccc'>&nbsp;</td>"}
			else if (curDay==today && date.getFullYear()==curYear && date.getMonth()==curMonth){
				cal+= "<td style='background-color:green'>" + curDay + "</td>"
			}
			else {cal+="<td>" + curDay + "</td>"}
			curDay++;
		}
		else {cal += "<td style='background-color:#ccc'>&nbsp;</td>"
		start++;}
	dow++;
	}

	cal+="</tr>"
	week++;
}
cal += "<tr><td colspan='7' style='background-color:#b2c4cf'><a href='#' onClick='now();'>[Today]</a></td></tr>"
cal += "</table>"
return cal
}
function backMonth(){
date.setMonth(date.getMonth()-1);
document.getElementById('help').innerHTML=calendar();
}
function backYear(){
date.setFullYear(date.getFullYear()-1);
document.getElementById('help').innerHTML=calendar();
}
function upMonth(){
date.setMonth(date.getMonth()+1);
document.getElementById('help').innerHTML=calendar();
}
function upYear(){
date.setFullYear(date.getFullYear()+1);
document.getElementById('help').innerHTML=calendar();
}
function now(){
date.setDate(1);
date.setMonth(curMonth);
date.setFullYear(curYear);
document.getElementById('help').innerHTML=calendar();
}
document.addEventListener('DOMContentLoaded',function(){document.getElementById('help').innerHTML=calendar()},false);
