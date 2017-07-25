console.log( "random.js" );

let leftArrow = `<section class="arrow-box">
				<p class="arrow">&#8678;</p>
				</section>`

let rightArrow = `<section class="arrow-box">
				<p class="arrow">&#8680;</p>
				</section>`

let container = document.getElementById("body-container");

container.addEventListener("click", (event) => {
	let randomNum = Math.floor((Math.random() * 10) + 1);
	console.log( "randomNum", randomNum );
	let arrowDisplay = document.getElementById("arrow-holder");
	console.log( "arrowDisplay", arrowDisplay );
	if (randomNum <= 5) {
		arrowDisplay.innerHTML = leftArrow;
	}
	else {
		arrowDisplay.innerHTML = rightArrow;
	}
});


