// A $( document ).ready() block.
$( document ).ready(function() {
 
function computerGuess() {
	var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  	console.log(randomNumber);
  	$('#random-number').html(randomNumber);
}

computerGuess();

function crystalRandom () {
	var crystal1 = Math.floor(Math.random() * (12 - 1)) + 1;
	var crystal2 = Math.floor(Math.random() * (12 - 1)) + 1;
	var crystal3 = Math.floor(Math.random() * (12 - 1)) + 1;
	var crystal4 = Math.floor(Math.random() * (12 - 1)) + 1;
	var sum = 0;

	$("#crystal1").on("click",function(){
		sum = sum+crystal1;
		console.log(sum);
	});	
	$("#crystal2").on("click",function(){
		sum=sum+crystal2
		console.log(sum);
	});	
	$("#crystal3").on("click",function(){
		sum=sum+crystal3
		console.log(sum)
	});	
	$("#crystal4").on("click",function(){
		sum=sum+crystal4
		console.log(sum)
	});	
		
	//
	if 	random number < sum then lose
		lose++;
	else if random number = sum then win
		wins++;

	var lose
	var win	



}



crystalRandom();




});

