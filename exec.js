/// script_execution.js
/// alias jseval.js
/// world ISOLATED
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.code === "Backquote") {
		let command = prompt("Evaluate Command:");
		try {
			let evaledCommand = eval(command);
			alert(evaledCommand);
		} catch (err) {
			alert(err);
		}
	}
});
//eruda injector
window.addEventListener("keyup", (event) => {
	if (event.ctrlKey && event.altKey && event.key === "]") {
		

(function(){var r=_=>eruda.initDesktop();if(!window.eruda){var s=document.createElement("script");s.src="https://cdn.jsdelivr.net/gh/BinBashBanana/erudesktop@master/dist/eruda.js";s.onload=r;s.onerror=_=>alert("Failed to load script");document.body.appendChild(s)}else r()})();


	}
});
