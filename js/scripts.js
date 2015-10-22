// 5 Question quiz
// Show multiple choice with radio buttons
// When clicking submit, hide the current question and show the next question
// At the end, show how many questions they got right out of 5

var correctAnswers;
function checkAnswer(question){
	
	var questionArray = document.getElementsByName(question);
	var questionResponse;
	var correctAnswer;

	for(var i = 0; i < questionArray.length; i++){
	    
		if ( questionArray[i].checked ) {
		    questionResponse = questionArray[i].value;

		}

		if ( questionArray[i].classList.contains("correctAns") ) {
		   	correctAnswer = questionArray[i].value	   
		}	    
	    	
	}

	if ( questionResponse === correctAnswer ) {
	  	correctAnswers += 1;
	}

}

function checkAllAnswers() {
		correctAnswers = 0;

	    checkAnswer("states");
	    checkAnswer("continents");
	    checkAnswer("insectLegs");
	    checkAnswer("spain");
	    checkAnswer("polarBears");

	    html = "<h4> You got " + correctAnswers + " questions correct!";
	    print(html);
}


var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", checkAllAnswers);

function print(message) {
	var output = document.getElementById("resultsDiv");
	output.innerHTML = message;
}



