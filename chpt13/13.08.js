var start;
function startTimer() {
	console.log("startTimer");
	start = new Date();
}

function stopTimer() {
	console.log("stopTimer");
	var diffSecs = 0;
	if (start) {
		var stop = new Date();
		var startMsec = start.getTime();
		var stopMsec = stop.getTime();
		diffSecs = (stopMsec - startMsec) / 1000;
	}
	return diffSecs;
}

function reportTime() {
	console.log("reportTime");
	var secs = stopTimer();
	var str = "Lingered " + secs + " secs.";
	document.title = str;
}

// I get a brief flash to the console that the alert box
// is "Blocked" during the unload event.  I'm guessing there is
// either a race condition or a sane browser configuration policy
// in effect during window unload that prevents new alert windows from 
// popping up.  
//
// I'm working around this by hooking the blur event instead
// of unload.
// window.onload = startTimer;
// window.onunload = reportTime

window.onfocus = startTimer;
window.onblur = reportTime;
