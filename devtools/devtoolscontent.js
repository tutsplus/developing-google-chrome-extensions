window.onload = function() {
	var port = chrome.extension.connect({ name: "color-divs-port" });
	document.getElementById("button").onclick = function() {
    	port.postMessage({ type: "color-divs"});
	}
}