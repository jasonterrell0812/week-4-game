// A $( document ).ready() block.
$( document ).ready(function() {
 
// function computerGuess() {
	var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  	$('#random-number').html(randomNumber);
// }

// computerGuess();

function game(sum) {
	if (sum > randomNumber) {
		console.log("Gave over");
		loses();
	}	else if (sum === randomNumber) {
		console.log("you win");
		win();
	}

	
}

function win(){
	var wins = 0;
	wins++;
	$('#Wins').html(wins);
}	

function loses(){
	var losses = 0;
	losses++;
	$('#Losses').html(losses);
}
	
// function reset(){
// 	$('#sum').empty();
	
// }	


function crystalRandom () {
	var crystal1 = Math.floor(Math.random() * (12 - 1)) + 1;
	var crystal2 = Math.floor(Math.random() * (12 - 1)) + 1;
	var crystal3 = Math.floor(Math.random() * (12 - 1)) + 1;
	var crystal4 = Math.floor(Math.random() * (12 - 1)) + 1;
	var sum = 0;
	

	
	$("#crystal1").on("click", function() {
		sum = sum + crystal1;
		$('#sum').html(sum);
		game(sum)
	});	
	$("#crystal2").on("click", function() {
		sum = sum + crystal2
		$('#sum').html(sum);
		game(sum)
	});	
	$("#crystal3").on("click", function() {
		sum = sum + crystal3
		$('#sum').html(sum);
		game(sum)
	});	
	$("#crystal4").on("click", function() {
		sum = sum + crystal4
		$('#sum').html(sum);
		game(sum)
	});

	

	
}
	
crystalRandom();



});
