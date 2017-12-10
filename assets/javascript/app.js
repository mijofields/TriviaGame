//build the ganme out of objects

var game = {


//array of objects

questions: [{


Q: "Which type of military campaign was the Battle of Britain?",

A0: "Air Battle. The first of it's kind.",
A1: "Land Battle",
A2: "Naval Battle",
A3: "Air Battle",
A4: "Siege",
C: 'A3',
Pic: "https://www.thesun.co.uk/wp-content/uploads/2017/09/nintchdbpict000352144031.jpg?strip=all&w=960&quality=100"

},

{

Q: 'The Art of War was written by who?',
A0: "Sun Tzu. Written in the late sixth century BC.",
A1:'Sun Tzu',
A2:'Dr. Seuss',
A3: 'Stephen King',
A4: 'Pablo Picasso',
C: 'A1'

},

{

Q: "Which was the first capital city of the United States?",
A0: "Philadelphia.  The Declaration of Independence was also signed in Philadelphia.",
A1: "Annapolis, MD",
A2: "Philadelphia, PA",
A3: "Baltimore, MD",
A4: "Princeton, NJ",
C: "A2"
},

{

Q: "In 1893 which was the first country to give women suffrage?",
A0: "New Zealand. The suffrage movement was lead by Kate Sheppard.",
A1: 'Papua New Guinea',
A2: 'New Zealand',
A3: 'France',
A4: 'Saudi Arabia',
C: "A2"

},

 
{

 Q: "Who painted the famous oil painting on war called Guernica?",
 A0: "Pablo Picasso, it is regarded by many the most powerful anti-war painting.",
 A1: "Jackson Pollock",
 A2: 'Leonardo Da Vinci',
 A3: "Banksy",
 A4: "Pablo Picasso",
 C: "A4"

 },

{

Q: "Who was the first person to circumnaviate the globe?",
A0: "Ferdinand Magellan. The expedition lasted from 1519 to 1522.",
A1: "Sir Richard Branson",
A2: "Ferdinand Magellan",
A3: "Orville Wright",
A4: "Christpher Columbus",
C: "A2"

},

{

Q: "Which of these world religions appeard first?",
A0: "Hinduism is a fusion of various Indian cultures and traditions.",
A1: "Islam",
A2: "Mormonism",
A3: "Christianity",
A4: "Hinduism",
C: "A4"

},

{

Q: "Which of these countries declared independence first?",
A0: "The United States of America, in 1776.",       
A1: "United States of America",
A2: "Mexico",
A3: "Colombia",
A4: "Brazil",
C: "A1"

},

{

Q: "Which country declared independence from British rule on August 15th 1947?",
A0: "India.  Mahatma Gandhi was the leader of the independence movement.", 
A1: "United States of America",
A2: "Thailand",
A3: "Mexico",
A4: "India",
C: "A4"

},

{

Q: "Which of the wonders of the ancient world was found in Alexandria?",
A0: "The Lighthouse or Pharos, of Alexandria.",
A1: "Temple of Artmeis",
A2: "The Great Pyramid",
A3: "The Lighthouse",
A4: "The Hanging Gardens",
C: "A3"

},

{

Q: "What invention did Karl Benz receive a patent for in 1879?",
A0: "The internal cobustion engine.",
A1: "Rubber",
A2: "The Lightbulb",
A3: "Internal Combustion Engine",
A4: "Steel",
C: "A3"

}

// {

// Q: "Hannibal famously crossed The Alps with which animals?",
// A0: "Elephants",
// A1: "Camels",
// A2: "Rhinos",
// A3: "Donkeys",
// A4: "Elephants",
// C: "A4"

// },

// {

// Q: "Which of these world religions appeard first?",
// A0: "Hinduism.",
// A1: "Islam",
// A2: "Buddhism",
// A3: "Christianity",
// A4: "Hinduism",
// C: "A4"

// },

// {

// Q: "Which of these countries declared independence first?",
// A0: "Uniated States of America in 1776.",		
// A1: "United States of America",
// A2: "Mexico",
// A3: "Colombia",
// A4: "Brazil",
// C: "A1"

// },

// {

// Q: "Who is attributed with creating the world wide web?",
// A0: "Tim Berners-Lee.",
// A1: "Tim Berners-Lee",
// A2: "Alan Turing",
// A3: "Bill Gates",
// A4: "Thomas Edison",
// C: "A1"

// },

// {

// Q: "Which Pacific Island island was captured by US forces on 26th March 1945",
// A0: "Iwo Jima.",
// A1: "Okinawa",
// A2: "Iwo Jima",
// A3: "Truk",
// A4: "Palau",
// C: "A2"

// },

// {

// Q: "What invention did Karl Benz receive a patent for in 1879?",
// A1: "Pneumatic Tire",
// A2: "Gear Stick",
// A3: "Internal Combustion Engine",
// A4: "Gear Differential",
// C: "A3"

// },

// {

// Q: "Which country declared independence from the UK on August 15th 1947?",
// A1: "Israel",
// A2: "Jamaica",
// A3: "South Africa",
// A4: "India",
// C: "A4"

// },

// {

// Q: "Which was the first capital city of the United States?",
// A1: "Annapolis, MD",
// A2: "Philadelphia, PA",
// A3: "Baltimore, MD",
// A4: "Princeton, NJ",
// C: "A2"


// },

// {

// Q: "Which ship was the first to arrive and resuce survivors from The Titanic?",
// A1: "The Arizona",
// A2: "The George Washington",
// A3: "The Bremen",
// A4: "The Carpathia",
// C: "A4"

],


correct: 0,
incorrect: 0,
noAnswer: 0,
started: false,
question: 0,
correctAnswer:"",
seconds: 2000,
intervalSeconds:"",
correctText: "",


decrementSeconds: function(){

	if (game.seconds === 0 ){

		game.notAnswered();
	

	} else {

		game.seconds--;
		$("#display").html("<h4>" + game.seconds);

	}

}, //end of decrement seconds


timer: function(){


	$(".start").on("click", function () {

	if(game.started===false){
	$("#move").addClass("d-flex justify-content-center");
	$("#A1").removeClass("float-right");
	$("#A3").removeClass("float-right");
	$(".start").removeClass("active").addClass("disabled");
    game.correct = 0;
    game.incorrect= 0;
    game.noAnswer = 0;
    game.question = 0;

	game.newQuestion();
	game.started=true;

    	 }})}, //end of timer function


stop: function() {


	  clearInterval(game.intervalSeconds);
      game.question++;
      console.log("next question: " + game.question);
      // game.gameFlow();
      game.newQuestion();



}, //end of stop

unbind: function(){


	$("#A1").unbind("click").removeClass("correct");
	$("#A2").unbind("click").removeClass("correct");
	$("#A3").unbind("click").removeClass("correct");
	$("#A4").unbind("click").removeClass("correct");


},



newQuestion: function() {


        if(game.question > 9){


            game.gameOver();

        } else {
		game.seconds=2000,
		game.intervalSeconds = setInterval(game.decrementSeconds, 10)
    	game.unbind();
    	$("#question").text(game.questions[game.question].Q);
    	$("#A1").text(game.questions[game.question].A1).on("click", game.answerCheck);
    	$("#A2").text(game.questions[game.question].A2).on("click", game.answerCheck);
    	$("#A3").text(game.questions[game.question].A3).on("click", game.answerCheck);
    	$("#A4").text(game.questions[game.question].A4).on("click", game.answerCheck);
    	game.correctAnswer=game.questions[game.question].C;
    	game.correctText = game.questions[game.question].A0;
        $(".my-2").html("<h5> You have 20 seconds each to answer the following " + (10-game.question) + " questions:");
        


    }},


answerCheck: function () {


    		console.log($(this).attr("data-value"));


            game.unbind();



    	if ($(this).attr("data-value") === game.correctAnswer){

    		
    		game.CorrectAnswer();
    	}

    	else {

 
    		game.IncorrectAnswer();

    	}},


IncorrectAnswer: function(){

		clearInterval(game.intervalSeconds);
		game.question++;
		game.incorrect++;
		console.log("incorrect: "+game.incorrect);

		console.log(game.correctText);
		$("#"+game.correctAnswer).addClass("correct").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);

		$("#question").text("Incorrect Answer");
		$("#display").html("<h4>" + game.correctText);

    	// $("#display").html("<h4>" + "The correct answer was " + ;

    	

   		setTimeout(game.newQuestion, 3000);


 },


CorrectAnswer: function(){


		clearInterval(game.intervalSeconds);
		game.question++;
		game.correct++;
		$("#"+game.correctAnswer).addClass("correct").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);

		$("#question").text("Correct Answer");
		$("#display").html("<h4>" + game.correctText);
		setTimeout(game.newQuestion, 3000);
	




},

notAnswered: function(){


    	clearInterval(game.intervalSeconds);
      	game.question++;
      	console.log("next question: " + game.question);

    	$("#question").text("You did not provide an answer in the time alloted");
    	$("#A1").text("No Answer");
    	$("#A2").text("No Answer");
    	$("#A3").text("No Answer");
    	$("#A4").text("No Answer");
    	$("#display").html("<h4> You didn't provide an answer, next question coming up...");

    	game.noAnswer++;

    	setTimeout(game.newQuestion, 3000);
    	
    	console.log("not answered " + game.noAnswer);

},


gameOver: function(){


    var percentage = (game.correct / 10)*100


    game.unbind();
    clearInterval(game.intervalSeconds);
    $("#question").text("The Game is over! Well done!");
    $("#A1").text("You got " + game.correct + " right.");
    $("#A2").text("You got " + game.incorrect+ " wrong.");
    $("#A3").text("You did not answer " + game.noAnswer+".");
    $("#A4").text("You were " + percentage +"% correct.");
    $("#display").html("<h4> The game is over, click Start to try again");
    $(".my-2").text("");
    game.started=false;
    $(".start").removeClass("disabled").addClass("active");
    game.timer();

    




}



};




$(".my-2").html("<h5> You have 20 seconds each to answer the following 10 questions.");



//end of gameFlow function

    game.timer	();

    //  Execute the run function.
    

