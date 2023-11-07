import { createFormMasyRedApp } from './formMasyRedApp.js';
//import { masyPrepareCam, lokoPrepareCam } from './util/siapkanKamera.js';

export class createFormScanOnly extends createFormMasyRedApp {
	
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
		document.querySelector("#sbmt").style.backgroundColor = "#098586";
		document.querySelector("#sbmt").style.borderColor = "#FFFFFF";
		document.querySelector("#sbmt").style.color = "#FFFFFF";
	}

	async generateForm() {
		this.#generateLoadingBar(true);
		this.#removeContentComponent();
		this.formKontainer.insertAdjacentHTML('beforeend', this.str);
		this.#setCSSScanOnly();
		setTimeout(() => this.#generateLoadingBar(false), 1000);
	}

	//override method generateShopChartTbl() pd parent class
	static generateShopChartTbl(arr) {
		super.generateShopChartTbl(arr);
		document.querySelector("table").setAttribute('id', 'tabelLoko');
	} 

} 