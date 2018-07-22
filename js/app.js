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
 		openCards.push(card);
 		card.classList.add('open', 'show');
 		movesTotal.push(moves);
 		const totalMoves = document.querySelector('.moves');
 		totalMoves.textContent = movesTotal.length;

		if (movesTotal.length <= 1) {
			 startTimer();
		 };

	 	if (openCards.length == 2) {
	 	 	if (openCards[0].innerHTML == openCards[1].innerHTML) {
		 				openCards[0].classList.add('match', 'open', 'show');
		 				openCards[1].classList.add('match', 'open', 'show');
		 				matchedCards.push(openCards[0]);
						matchedCards.push(openCards[1]);
						openCards = [];
		 	}
			else {
		 				setTimeout(function() {
	 						openCards.forEach(function(card) {
	 						card.classList.remove('open', 'show');
	 						});
	 						openCards = [];
	 					}, 500);
	 		}
	 	}
	}
	if (matchedCards.length == 16) {
		endGame();
	}
};

function updateStars() {
 if (movesTotal.length <= 1) {
 	document.querySelector('.stars').style.color = "yellow";
} else if (movesTotal.length >= 17 && movesTotal.length <= 20) {
 			document.querySelector('#star-one').style.color = "gray";
		} else if (movesTotal.length >= 21 && movesTotal.length <= 24) {
 				document.querySelector('#star-two').style.color = "gray";
			} else if (movesTotal.length >= 25 && movesTotal.length <= 28) {
 					document.querySelector('#star-three').style.color = "gray";
				} else if (movesTotal.length >= 29 && movesTotal.length <= 32) {
 						document.querySelector('#star-four').style.color = "gray";
					} else if (movesTotal.length >= 33) {
 							document.querySelector('#star-five').style.color = "gray";
 							}
 }
 ;


 function startTimer () {
   let sec = 0;
    function pad ( val ) {
      return val > 9 ? val : "0" + val;
    }
  		setInterval(function(){
      document.getElementById("sec").innerHTML=pad(++sec%60);
      document.getElementById("min").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
 }

 function endGame () {

   const results = document.getElementById("results");
   results.style.visibility = "visible";

   let resultSeconds = document.getElementById("sec").innerHTML;
   let resultMinutes = document.getElementById("min").innerHTML;

   finalSeconds.innerHTML = `${resultSeconds}`;
   finalMinutes.innerHTML = `${resultMinutes}`;

   let resultMoves = movesTotal.length;
   movesFinal.innerHTML = `${resultMoves}`;
   if (totalMoves < 17) {
     starTotal.innerHTML = '5';
   } else if(totalMoves >=17 && totalMoves <= 20) {
     starTotal.innerHTML = '4';
	 } else if(totalMoves >=21 && totalMoves <= 24) {
		 starTotal.innerHTML = '3';
	 } else if(totalMoves >=25 && totalMoves <= 28) {
		 starTotal.innerHTML = '2';
	 } else if(totalMoves >=29 && totalMoves <= 32) {
		 starTotal.innerHTML = '1';
   } else {
     starTotal.innerHTML = '0';
   }
 }

 function restartGame(){
   window.location.href = window.location.href;
 }

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};
