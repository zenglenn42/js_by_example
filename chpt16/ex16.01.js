window.onload = init;
function init() {
	document.coffeeMenu.reset();
	document.coffeeMenu.order.onclick = order;
	console.log("coffeeMenu", document.coffeeMenu)
	rewardsProgram();
}

function rewardsProgram() {
	var form = document.coffeeMenu;
	if (document.cookie) {
		console.log("found cookie ", document.cookie);
		str = decodeURI(document.cookie);
		var beg = str.indexOf("name=");
		if (beg != -1) {
			var name = str.substr(beg).split("=")[1].split(";")[0];
			console.log("name=", name);
			form.name.value = name;
		}

		beg = str.indexOf("room=");
		if (beg != -1) {
			var room = str.substr(beg).split("=")[1].split(";")[0];
			console.log("room=", room);
			form.room.value = room;
		}

		beg = str.indexOf("drink=");
		if (beg != -1) {
			var drink = str.substr(beg).split("=")[1].split(";")[0];
			console.log("drink=", drink);
			var selections = document.coffeeMenu.selections;
			for (var i = 0; i < selections.length; i++) {
				if (selections[i].value == drink) {
					selections[i].checked = true;
					break;
				}
			}
		}
		var notes = document.getElementById("notes");
		notes.innerHTML = "<p>Welcome back.  Enjoy a 25% discount.</p>";
	}
}

function makeCookie(name, room, drink) {
	expiry = new Date();
	console.log("date", expiry.toString());
	days = 7; 
	expiry.setTime(expiry.getTime() + days * 24 * 60 * 60 * 1000)
	console.log("date", expiry.toString());
	var cookie = encodeURI("name") + "=" + encodeURI(name);
	    cookie += "; expires" + "=" + expiry.toGMTString();
	document.cookie = cookie;
	console.log("cookie = ", cookie);

	cookie = encodeURI("room") + "=" + encodeURI(room);
	cookie += "; expires" + "=" + expiry.toGMTString();
	document.cookie = cookie;
	console.log("cookie = ", cookie);

	cookie = encodeURI("drink") + "=" + encodeURI(drink);
	cookie += "; expires" + "=" + expiry.toGMTString();
	document.cookie = cookie;
	console.log("cookie = ", cookie);
}

function order() {
	var drink;
	var form = document.coffeeMenu;
	var name = form.name.value;
	var room = form.room.value;
	var selections = document.coffeeMenu.selections;
	for (var i = 0; i < selections.length; i++) {
		if (selections[i].checked) {
			drink = selections[i].value;
			console.log("drink=", drink);
			break;
		}
	}
	if (name && room && drink) {
		console.log("name=", name);
		console.log("room=", room);
		console.log("drink=", drink);
		var notes = document.getElementById("notes");
		notes.innerHTML = "<p>Thank you for your order.</p>";
		makeCookie(name, room, drink);
	} else {
		alert("Unable to order without a completed form.");
	}
}