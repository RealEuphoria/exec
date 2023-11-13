/// script_execution.js
/// alias jseval.js
/// world ISOLATED
	window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.code === "Backquote") {



document.write(`

<html>
	<h1>Euphoria Menu</h1><hr>
	<button onclick="execjs()">Execute Javascript</button>
</html>


`)

function execjs(){
		let command = prompt("Evaluate Command:");
		try {
			let evaledCommand = eval(command);
			alert(evaledCommand);
		} catch (err) {
			alert(err);
		}
	}
});
