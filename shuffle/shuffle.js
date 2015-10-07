
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

Reveal.configure({
		keyboard: {
		13: function() {
			Reveal.slide(shuffled.pop()),
			console.log(shuffled);}, // go to the next slide when the ENTER key is pressed
		27: function() {}, // do something custom when ESC is pressed
		32: function() {
			Reveal.slide(shuffled.pop()),
			console.log(shuffled);}
  }
});