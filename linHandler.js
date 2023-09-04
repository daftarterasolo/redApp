import { lgin, clearForm, checkTheLocalSession, setSession } from './service/login.js';

function setSubmitBtn() {
	const lin = document.getElementById("lin");
	lin.style.backgroundColor = "#69b076";
	lin.style.fontWeight = "100";
	lin.style.color = "#dddddd";
	lin.value = "Signing in ....";	
}

function setBackSubmitBtn() {
	const lin = document.getElementById("lin");
	lin.style.backgroundColor = "green";
	lin.value = "Sign in";	
	lin.style.fontWeight = "700";
	lin.style.color = "#FFFFFF";
}

function pageRedirect() {
	window.location.replace("/redApp");
}


(function main() {
	new checkTheLocalSession().getStatus === true ? pageRedirect() : '';

	document.getElementById("lin").addEventListener("click", async () => {
		const logIn = new lgin(document.getElementById("uname").value, document.getElementById("pass").value);
		setSubmitBtn();
		let loginResult = await logIn.doIn();
		if (loginResult.result === "error") {
			document.querySelector(".alert").classList.remove("hidden");
			document.getElementById("spanAlert").innerHTML = loginResult.data;
		} else {
			new setSession(loginResult.id, loginResult.data);
			pageRedirect();
		}
		setBackSubmitBtn();
		const clFrm = new clearForm(["uname", "pass"]); 
	});
	
	document.querySelector(".octicon").addEventListener("click", () => {
		document.querySelector(".alert").classList.add("hidden");
		document.getElementById("spanAlert").innerHTML = "";	
	});

})();

