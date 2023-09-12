import { createFormPabrik } from './formPabrik.js';
//import { createFormMasy } from './formMasy.js';
//import { getSpbu } from '../util/utilFunc.js';
import { getSpbuOptions } from '../util/utilFunc.js';

export class createFormSpbuRedApp extends createFormPabrik {
	#spbuData = [];
	#dataForm = {};

	//new method
	#setCSSSpbu() {
		document.querySelectorAll(".title").forEach(e => {
			e.style.backgroundColor = "#432616";
			e.style.fontWeight = "bolder";
			e.style.textShadow = "none";
		});
		document.querySelectorAll(".subContent").forEach(e => e.style.borderTop = "6px solid #432616");
		document.querySelectorAll(".subContent").forEach(e => e.style.borderBottom = "6px solid #432616");
		document.querySelector(".backBtnDiv").style.top = "10px";
	}

	//method load nama-nama spbu utk dijalankan pd method generateForm()
	async #loadSpbu() {
		//document.getElementById("spbu") != null ? this.#spbuData = await getSpbu() : '';
		document.getElementById("nama") != null ? this.#spbuData = await getSpbuOptions() : '';
	}

	//Override setLoadingBarColor() from parent class
	setLoadingBarColor() {
		document.querySelectorAll(".lds-facebook div").forEach(el => el.style.background = "#432616");
	}

	#setDataToSend() {
		this.set_dataToSend = {1 : ['PUBBM','','','','','']};
	}

	//override method generateForm() from parent class
	async generateForm() {
		await super.generateForm();
		this.#setCSSSpbu();
		await this.#loadSpbu();
		this.#setDataToSend();
	}

	//override determineDataSrc() from parent class
	determineDataSrc() {
		return this.#spbuData;
	}

	//overide method setCssSubmitBtn() pd parent class
	static setCssSubmitBtn() {
		super.setCssSubmitBtn();
		document.getElementById("sbmt").style.borderColor = "rgb(67, 38, 22)";
	}

    async whenSpbuChange() {
        let nama = document.getElementById("nama");
        if (nama !== null) {
            nama.addEventListener("input", async e => {
                await fetch("https://script.google.com/macros/s/AKfycbyCpjyzGYCXOTSQSHdEZazH33t1sqGUm967ML_U2EeK0nH36rFAFm-8NxjEvvmNu6I/exec", {
                    method : 'POST',
                    body : JSON.stringify({'spbu' : e.target.value}) 
                })
                .then(e => e.json())
                .then(e => {
					console.log(e);
					switch (e.result) {
						case 'error':
							document.querySelector(".nozzDiv").innerHTML = "Error";		
							break;
						
						default:
							let str = '';
							for (let k of e.uttp) {
								str += `<div>
								<input type="checkbox" id="scales" name="scales"/>
								<label class="nozzLabel" for="scales">[${k[1]}.${k[3]}] [${k[4]}/${k[5]}/${k[6]}] [${k[7]}] [${k[8]}}]</label>
								</div>`;
							}
							document.querySelector(".nozzDiv").innerHTML = str;			
					}

				});
            });    
        }
    }

	get get_dataForm() {
		this.#dataForm['nama'] = document.getElementById('nama').value;
		this.#dataForm['alamat'] = document.getElementById('alamat').value;
		this.#dataForm['kel'] = document.getElementById('kel').value;
		this.#dataForm['wa'] = document.getElementById('wa').value; 
		this.#dataForm['jenisTera'] = "spbu";
		return this.#dataForm;
	}

	get get_dataToSend() {
		this.constructor.dataToSend[1][5] = document.getElementById('jml_nozzle').value;
		return this.constructor.dataToSend;
	}

	
}