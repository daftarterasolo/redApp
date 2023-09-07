import { createFormMasy } from './formMasy.js';
import { listOfUttpMasyRedApp } from '../util/utilFunc.js';

/*
async function test() {
    let x = await listOfUttpMasyRedApp();
    console.log(x);

}

test();
*/ 
export class createFormMasyRedApp extends createFormMasy {
	//override method di parent class utk dijalankan pada #addBtnHandler
	async generateListUttp() {
		if (document.querySelectorAll(".daftarUttp").length === 0) { // cek jika elemen .daftarUttp sdh ada atau belum
			let str = `<div class="judl"><a class="closeHref" href=#>Close</a></div>`;
			this.list = await listOfUttpMasy();
			for (let k in this.list) {
				str += this.strUttp.reduce((result,str,i) => `${result}${str}${eval(this.argsUttp[i]) || ''}`,'');
			}	
			this.lsKontainer.innerHTML = str;		
			this.pickUttpHandler();
			this.setJmlPickedUttp();
		} 
	}
}
