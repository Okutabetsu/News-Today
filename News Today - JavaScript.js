function getTime() {
	var x = document.getElementById('timepara');
	x.innerHTML = Date();
}

function resetTime() {
	var y = document.getElementById('timepara');
	y.innerHTML = 'Get current time';
}