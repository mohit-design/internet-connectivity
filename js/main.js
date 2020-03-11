var checkStatus = function() {
	if(navigator.onLine) {
		var element = document.getElementById("bgColor");
  		element.classList.remove("active");
		// document.getElementById("online-offline").innerHTML = "User is online."
	} else {
		var element = document.getElementById("bgColor");
  		element.classList.add("active");
		document.getElementById("online-offline").innerHTML = "User is offline."
	}
}
checkStatus();
window.addEventListener("online",function() {
	checkStatus();
});
window.addEventListener("offline",function() {
	checkStatus();
});