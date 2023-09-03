import { lgin, clearForm } from './service/login.js';

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

function setSession(id, key) {
	sessionStorage.setItem('id', id);
	sessionStorage.setItem('key', key);
}

(function main() {
	document.getElementById("lin").addEventListener("click", async () => {
		const logIn = new lgin(document.getElementById("uname").value, document.getElementById("pass").value);
		setSubmitBtn();
		let loginResult = await logIn.doIn();
		if (loginResult.result === "error") {
			document.querySelector(".alert").classList.remove("hidden");
			document.getElementById("spanAlert").innerHTML = loginResult.data;
		} else {
			setSession(loginResult.id, loginResult.data);
		}
		setBackSubmitBtn();
		const clFrm = new clearForm(["uname", "pass"]); 
	});	
})();

