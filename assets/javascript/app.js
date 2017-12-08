//build the ganme out of objects

var game = {


//array of objects

questions: [{


Q: "Which type of military campaign was the Battle of Britain?",
A1: "Land Battle",
A2: "Naval Battle",
A3: "Air Battle",
A4: "Siege",
C: 'A3'

},

{

Q: 'The International Brigades was a paramilitary unit which fought during which modern civil war?',
A1:'Spanish Civil War',
A2:'Guatemalan Civir War',
A3: 'Chechen Civil War',
A4: 'Rwandan Civil War',
C: 'A1'

},

{

Q: "Which disease caused the pandemic of 1918?",
A1: "Yellow Fever",
A2: "The Plague",
A3: "Influenza",
A4: 'Measles',
C: "A3"

},

{

Q: "In 1893 which was the first country to give women suffrage?",
A1: 'United Kingdom',
A2: 'New Zealand',
A3: 'France',
A4: 'United States of America',
C: "A2"

},

 
{

 Q: "Who painted the famous oil painting on war called Guernica?",
 A1: "Francisco Goya",
 A2: 'Salvador Dali',
 A3: "Joan Miro",
 A4: "Pablo Picasso",
 C: "A4"

 },

{

Q: "Who's assasination has been accredited for the outbreak of World War One?",
A1: "King Leopold of Belgium",
A2: "Tzar Nicolas of Russia",
A3: "Archduke Franz Ferdinand of Austria",
A4: "Queen Isabella of Spain",
C: "A3"

},

{

Q: "Whose codified law system was attributed with the move away from the Feudal system in Europe in the 19th century?",
A1: "Napoleon",
A2: "Justinian",
A3: "King George III",
A4: "King Victor Emmanuel",
C: "A1"

},

{

Q: "Who was the first person to circumnaviate the globe?",
A1: "Sir Francis Drake",
A2: "Ferdinand Magellan",
A3: "Vasco da Gama",
A4: "Christpher Columbus",
C: "A2"

},

{

Q: "Which nation won the first World Cup in 1930?",
A1: 'Brazil',
A2: 'Argentina',
A3: 'Germany',
A4: 'Uruguay',
C: "A4"

},

{

Q: "Which of the wonders of the ancient world was found in Alexandria?",
A1: "Temple of Artmeis",
A2: "The Great Pyramid",
A3: "The Lighthouse",
A4: "The Hanging Gardens",
C: "A3"

},

{

Q: "Who was the first Prime Minister of the State of Israel",
A1: "Shimon Peres",
A2: "David Ben Gurion",
A3: "Theodore Herzl",
A4: "Meir Kahane",
C: "A2"

},

{

Q: "Hannibal famously crossed The Alps with which animals?",
A1: "Camels",
A2: "Rhinos",
A3: "Donkeys",
A4: "Elephants",
C: "A4"

},

{

Q: "Which of these world religions appeard first?",
A1: "Islam",
A2: "Buddhism",
A3: "Christianity",
A4: "Hinduism",
C: "A4"

},

{

Q: "Which of these countries declared independence first?",		
A1: "United States of America",
A2: "Mexico",
A3: "Colombia",
A4: "Brazil",
C: "A1"

},

{

Q: "Who is attributed with creating the world wide web?",
A1: "Tim Berners-Lee",
A2: "Alan Turing",
A3: "Bill Gates",
A4: "Thomas Edison",
C: "A1"

},

{

Q: "Which Pacific Island island was captured by US forces on 26th March 1945",
A1: "Okinawa",
A2: "Iwo Jima",
A3: "Truk",
A4: "Palau",
C: "A2"

},

{

Q: "What invention did Karl Benz receive a patent for in 1879?",
A1: "Pneumatic Tire",
A2: "Gear Stick",
A3: "Internal Combustion Engine",
A4: "Gear Differential",
C: "A3"

},

{

Q: "Which country declared independence from the UK on August 15th 1947?",
A1: "Israel",
A2: "Jamaica",
A3: "South Africa",
A4: "India",
C: "A4"

},

{

Q: "Which was the first capital city of the United States?",
A1: "Annapolis, MD",
A2: "Philadelphia, PA",
A3: "Baltimore, MD",
A4: "Princeton, NJ",
C: "A2"


},

{

Q: "Which ship was the first to arrive and resuce survivors from The Titanic?",
A1: "The Arizona",
A2: "The George Washington",
A3: "The Bremen",
A4: "The Carpathia",
C: "A4"

}],


correct: 0,
incorrect: 0,
notAnswered: 0,
started: false,
question: 0,
correctAnswer:"",
seconds: 2000,
intervalSeconds:"",


decrementSeconds: function(){

	if (game.seconds === 0 ){

		alert("Time Up!");
		game.stop();

	} else {

		game.seconds--;
		$("#display").html("<h4>" + game.seconds);

	}

}, //end of decrement seconds


timer: function(){


	$(".start").on("click", function () {

	if(game.started===false){
	$("#move").addClass("d-flex justify-content-center");
	$(".start").removeClass("active").addClass("disabled");
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


	$("#A1").unbind("click");
	$("#A2").unbind("click");
	$("#A3").unbind("click");
	$("#A4").unbind("click");


},



newQuestion: function() {

		game.seconds=2000,
		game.intervalSeconds = setInterval(game.decrementSeconds, 10)
    	game.unbind();
    	$("#question").text(game.questions[game.question].Q);
    	$("#A1").text(game.questions[game.question].A1).on("click", game.answerCheck);
    	$("#A2").text(game.questions[game.question].A2).on("click", game.answerCheck);
    	$("#A3").text(game.questions[game.question].A3).on("click", game.answerCheck);
    	$("#A4").text(game.questions[game.question].A4).on("click", game.answerCheck);
    	game.correctAnswer=game.questions[game.question].C;
    	console.log("Correct Answer: "+ game.correctAnswer);
    
    	 // }

    },



answerCheck: function () { //check on this, not using data correctly


    		console.log($(this).attr("data-value"));
    		console.log(typeof game.correctAnswer);
    		console.log(typeof $(this).attr("data-value")); //when you put this back into object REMEMBER .this


    	if ($(this).attr("data-value") === game.correctAnswer){

    		alert("Correct Answer"); //here do a function to flip to new question
    		game.correct++;
    		console.log("Correct " + game.correct);
    		console.log("Incorrect " + game.incorrect);
    		game.stop();
    	
    	}

    	else {

    		alert("Incorrect Answer");
    		game.incorrect++;
    		console.log("Incorrect " + game.incorrect);
    		console.log("Correct " + game.correct);
    		game.stop();

    	}


    }












    	} //end of gameFlow function

    game.timer	();

    //  Execute the run function.
    

