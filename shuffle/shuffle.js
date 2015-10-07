function Shuffled () {
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;
	 	while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	}
	
	var shuffled = [];
	for (var i = 1; i != Reveal.getTotalSlides(); ++i) shuffled.push(i)
	
	shuffle(shuffled);
	var currentIndex = -1;

	this.next = function() {
		currentIndex += 1;
		Reveal.slide(shuffled[currentIndex]);
	}

	this.previous = function () {
		currentIndex -= 1;
		Reveal.slide(shuffled[currentIndex]);
	}
}


var shuffled = new Shuffled();


Reveal.configure({
		keyboard: {
		13: function() { // enter
				shuffled.next();
			},
		32: function() { // space
				shuffled.next();
			},
		37: function() { // left
				shuffled.previous();
		},
		39: function() { // right
				shuffled.next();
		}

  }
});