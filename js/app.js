const cardsAll = document.getElementsByClassName('card');
const allCardsClosedArray = [...cardsAll];
const shuffledCardsAll = shuffle(allCardsClosedArray);

const deck = document.querySelector('.deck');

document.querySelector(".restart").addEventListener("click", restartGame);

function startGame() {
		for(let shuffledCard of shuffledCardsAll){
		deck.appendChild(shuffledCard);
		shuffledCard.classList.add("match", "open", "show");
	};
		setTimeout(function() {
				hideCards()
			}, 3000)
};

function hideCards(){
	for(let shuffledCard of shuffledCardsAll){
		shuffledCard.classList.remove("match", "open", "show");
	}
};

startGame ();
 let openCards = [];
 let matchedCards = [];
 let moves = 0;
 let movesTotal = [];

function addEventListenerForCards() {
	for (const c of allCardsClosedArray){
		c.addEventListener('click', function() {
			card = c;
			mainFunction();
		}, false);
	}
}

addEventListenerForCards();

function mainFunction() {
 updateStars();

	if (!card.classList.contains('open') && !card.classList.contains('show')) {


	console.log(card);


 	openCards.push(card);
 	card.classList.add('open', 'show');
 	//console.log('Open Cards:', openCards.length);
 	movesTotal.push(moves);
 	//console.log('Moves Total:', movesTotal.length);
 	const totalMoves = document.querySelector('.moves');
 	totalMoves.textContent = movesTotal.length;


//first card
	if (movesTotal.length <= 1) {
		 startTimer();
	 };




 	 if (openCards.length == 2) {
 	 	if (openCards[0].innerHTML == openCards[1].innerHTML) {

		console.log("match correct!");
	 				openCards[0].classList.add('match', 'open', 'show');
	 				openCards[1].classList.add('match', 'open', 'show');

	 				matchedCards.push(openCards[0]);
					matchedCards.push(openCards[1]);

	//				console.log("matchedCards.length", matchedCards.length);
	// 				console.log("document.getElementsByClassName('match').length", document.getElementsByClassName('match').length)																										;
					openCards = [];
	 			} else {

	 				setTimeout(function() {
	 					openCards.forEach(function(card) {
 						card.classList.remove('open', 'show');
 					});
 					openCards = [];
 				}, 1000);
 			}
 		}
 	}

 	if (document.getElementsByClassName('match').length == 16 ) {
 		endGame();
 	}
};




 function updateStars() {
 if (movesTotal.length <= 1) {
 	document.querySelector('.stars').style.color = "yellow";
 		} else if (movesTotal.length >= 2 && movesTotal.length <= 3) {
 			document.querySelector('#star-one').style.color = "gray";
 				} else if (movesTotal.length >= 4 && movesTotal.length <= 5) {
 				document.querySelector('#star-two').style.color = "gray";
 					} else if (movesTotal.length >= 6 && movesTotal.length <= 7) {
 					document.querySelector('#star-three').style.color = "gray";
 						} else if (movesTotal.length >= 8 && movesTotal.length <= 9) {
 						document.querySelector('#star-four').style.color = "gray";
 							} else if (movesTotal.length >= 10) {
 							document.querySelector('#star-five').style.color = "gray";
 							}
 }
 ;


 function startTimer () {
   var sec = 0;
    function pad ( val ) {
      return val > 9 ? val : "0" + val;
    }
    setInterval(function(){
      document.getElementById("sec").innerHTML=pad(++sec%60);
      document.getElementById("min").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
 }

 //When game finishes and modal appears

 function endGame () {
   const modal = document.querySelector(".modal");
   modal.style.display = "block";

   let totalSeconds = document.getElementById("sec").innerHTML;
   let totalMinutes = document.getElementById("min").innerHTML;

   finalSeconds.innerHTML = `${totalSeconds}`;
   finalMinutes.innerHTML = `${totalMinutes}`;

   let totalMoves = movesTotal.length;
   movesFinal.innerHTML = `${totalMoves}`;
   if (totalMoves <= 20) {
     starTotal.innerHTML = '3';
   } else if(totalMoves >= 35 && totalMoves <= 20) {
     starTotal.innerHTML = '2';
   } else {
     starTotal.innerHTML = '1';
   }
 }


 function restartGame(){
   window.location.href = window.location.href;
 }

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
