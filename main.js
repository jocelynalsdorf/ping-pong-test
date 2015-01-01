$(document).ready(function() {
	

var userNum = prompt("Enter a whole number, such as 10");

	var ping = "ping";
	var pong = "pong";
	var pp = "ping-pong";

for (var i = 1; i <= userNum; i++) {

	if (i % 15 === 0) {
		$(".number-list").append(pp);
		
	}
		else if(i % 3 === 0) {
		$(".number-list").append(ping);	
	}
	else if (i % 5 === 0) {
		$(".number-list").append(pong);	
	}
	 
	else {	
		$(".number-list").append(i);
	}
};






});