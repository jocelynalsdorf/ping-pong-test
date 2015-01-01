$(document).ready(function() {
	

var userNum = prompt("Enter a whole number, such as 100");

	var ping = "ping";
	var pong = "pong";
	var pp = "ping-pong";

for (var i = 1; i <= userNum; i++) {

	if (i % 15 === 0) {
		$(".number-list").append("<span class=\"pingponger\">" + pp + "</span");
	}
	else if(i % 3 === 0) {
		$(".number-list").append("<span class=\"pinger\">" + ping + "</span");	
	}
	else if (i % 5 === 0) {
		$(".number-list").append("<span class=\"ponger\">" + pong + "</span");	
	} 
	else {	
		$(".number-list").append("<span class=\"num\">" + i + "</span");
	}
};

});