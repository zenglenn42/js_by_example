function getFortune() {
	fortunes = new Array(
		"Beware fortunes of unknown origin.",
		"There's no place like home.",
		"Speak softly and work for the federal govement.",
		"You will meet a mysterious stranger.",
	);
	var fate = Math.floor(Math.random() * fortunes.length);
	var now = new Date();
	var str = "Today is ";
	str += now.toLocaleString() + "<br /><br />";
	str += "Today's fortune: <br /><br />";
	str += "<em>" + fortunes[fate] + "</em>";
	divRef = document.getElementById("divination");
	divRef.innerHTML = str;
}
