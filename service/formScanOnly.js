//import { masyPrepareCam, lokoPrepareCam } from './util/siapkanKamera.js';

export class createFormScanOnly {
	static shopChartTemp = [];
	static dataToSend = {};

	constructor(formKontainer, str) {
		this.formKontainer = formKontainer;
		this.str = str;
		this.constructor.shopChartTemp = [];
		this.constructor.dataToSend = {};
	}

	//method yg dijalankan pd #generateLoadingBar()
	setLoadingBarColor() {
		document.querySelectorAll(".lds-facebook div").forEach(el => el.style.background = "#4682b4");
	}

	//method yg dijalankan pd generateForm()
	#generateLoadingBar(logic) {
		document.querySelector(".tutorial") != null ? document.querySelector(".tutorial").remove() : '';
		this.setLoadingBarColor();
		logic === true ? document.querySelector(".ld1").classList.remove("hidden") : document.querySelector(".ld1").classList.add("hidden");
	}

	//method yg dijalankan pd generateForm()
	#removeContentComponent() {
		document.querySelector(".uttpDiv") != null ? document.querySelector(".uttpDiv").remove() : '';
		document.querySelector(".mainContent") != null ? document.querySelector(".mainContent").remove() : '';
		//document.querySelector(".jmlhDiv") != null ? document.querySelector(".jmlhDiv").remove() : '';
	}

	#setCSSScanOnly() {
		document.querySelectorAll(".title").forEach(e => {
			e.style.backgroundColor = "#4682b4";
			e.style.fontWeight = "bolder";
			e.style.color = "#ffffff";
			e.style.zIndex = "2";
		});
		document.querySelectorAll(".subContent").forEach(e => e.style.borderTop = "3px solid #4682b4");
		document.querySelectorAll(".subContent").forEach(e => e.style.borderBottom = "3px solid #4682b4");
		document.querySelector("#sbmt").style.backgroundColor = "#FFFFFF";
		document.querySelector("#sbmt").style.borderColor = "#4682b4";
		document.querySelector("#sbmt").style.color = "#4682b4";
	}

	async generateForm() {
		this.#generateLoadingBar(true);
		this.#removeContentComponent();
		this.formKontainer.insertAdjacentHTML('beforeend', this.str);
		this.#setCSSScanOnly();
		setTimeout(() => this.#generateLoadingBar(false), 1000);
	}

} 