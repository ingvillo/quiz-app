$(document).ready(function(){

/*--- Questions Variable ---*/
var questions = [
//Question 1
  	{
    question: 'LAX',
    choices: ['Las Vegas, USA', 'Los Angeles, USA', 'La Crosse, USA'],
    correct: 2
	},

//Question 2  
 	{
    question: 'SGN',
    choices: ['Ho Chi Minh City, China', 'Stavanger, Norway', 'Geneva, Switzerland'],
	correct: 1
	},

//Question 3
  	{
    question: 'YVR',
    choices: ['Vancouver, Canada', 'Toronto, Canada', 'Montreal, Canada'],
    correct: 1
	},  

//Question 4
	{
	question: 'BOM',
	choices: ['Bonn, Germany', 'Broome, Australia', 'Mumbai, India'],
	correct: 3
	},

//Question 5
	{
	question: 'CDG',
	choices: ['Cambridge, UK', 'Paris, France', 'Doha, Qatar'],
	correct: 2
	},

//Question 6
	{
	question: 'DAD',
	choices: ['Da Nang, Viet Nam', 'Damascus, Syrian Arab Republic', 'Datadawai, Indonesia'],
	correct: 1
	},

//Question 7
	{
	question: 'SYD',
	choices: ['Stockholm, Sweden', 'Surabaya, Indonesia', 'Sydney, Australia'],
	correct: 3
	},   

//Question 8
	{
	question: 'JNB',
	choices: ['Nairobi, Kenya', 'Johannesburg, South Africa', 'Jakarta, Indonesia'],
	correct: 2
	},

//Question 9
	{
	question: 'MAD',
	choices: ['Madinah, Saudi Arabia', 'Madang, Papua New Guinea', 'Madrid, Spain'],
	correct: 3
	},  

//Question 10
	{
	question: 'HND',
	choices: ['Helsinki, Finland', 'Hong Kong, Hong Kong', 'Tokyo, Japan'],
	correct: 3
	}  
];


/*--- Result Message Variable ---*/
var result_msg = [
	"You've been everywhere!", "Oh you frequent flyer you", "Your Holiday Awaits", "You might want to try again?", "Oh dear, try again?"
];



/*--- Variables ---*/
var questionNum = 0;
var questionTotal = questions.length;
var correctTotal = 0;

var answer = $('input:radio[name=option][id=option]:checked').val();
var correctAnswer = questions[questionNum].correct;

/*--- Hide quiz and result section on load ---*/
$('.quiz-section').hide();
$('.result-section').hide();


/*--- On start quiz ---*/

  $('#startQuizButton').click(function(){  //start the quiz and show the first question
    $('.result-section').hide();
    $('.start-section').hide();
    $('.quiz-section').show();
    questionDisplay();
  });


$('.quiz-section').on('click', '#option', function(){

    if (answer == correctAnswer) {  
    	//if correct answer was selected    
      	correctTotal++;
      	console.log(correctTotal);
    } 
  });
  
  $('.quiz-section').on('click', '#option', function(){
    //quiz is finished, show result-section
    if ((questionNum+1) == questionTotal) { 
      	$('.result-section').show();

    	$('#finalScore').text(correctTotal + "/" + questionTotal);
    	$('#result-msg').show(); 
    	$('#startQuizButton').show();
  		//hide other "screens"
    	$('.quiz-section').hide();
    	$('.start-section').hide();
      
    } else {
   		//continue to next question
    	questionNum++;
    	questionDisplay();
    }
  });





$('.result-section').on('click', '#startQuizButton', function(){
	$('.start-section').show();
	$('.quiz-section').hide();
	$('.result-section').hide();
    	//reset variables to start quiz again
    	questionNum = 0;             
    	correctTotal = 0;	
});


function questionDisplay() {                           
	//displays the current question
    $('#questionNum').text("Question " + (questionNum+1) + " of " + questionTotal);
    $('#question').text(questions[questionNum].question);
    $('#choices').empty();
    var choiceTotal = questions[questionNum].choices.length;
    for (var i=0; i<choiceTotal; i++) {                  
    	//displays the answer choices
    	$('#choices').append("<input type='radio' class='option' id='option' name='option' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
    }
  }




});