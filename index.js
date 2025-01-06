//import { createFormMasy } from './service/formMasy.js';
import { createFormMasyRedApp } from './service/formMasyRedApp.js';
import { createFormPabrik } from './service/formPabrik.js';
//import { createFormSpbu } from './service/formSpbu.js';
import { createFormSpbuRedApp } from './service/formSpbuRedApp.js';
//import { createFormLoko } from './service/formLoko.js';
import { createFormLokoRedApp } from './service/formLokoRedApp.js';
import { masySubmitProcessor, pabrikSubmitProcessor, lokoSubmitProcessor, spbuSubmitProcessor, scanOnlySubmitProcessor } from './service/submitProcessor.js';
import { masyPrepareCam, lokoPrepareCam, scanOnlyPrepareCam } from './util/siapkanKamera.js';
import { createFormScanOnly } from './service/formScanOnly.js';
//import { checkTheLocalSession, lout } from './service/login.js';

/*
function pageRedirect() {
	window.location.replace("login.html");
}

function setIdTitle() {
	//document.getElementById("idUser").innerHTML = sessionStorage.getItem('id');
	document.getElementById("idUser").innerHTML = sessionStorage.getItem('fname');
}

function removeSession() {
	sessionStorage.removeItem('id');
	sessionStorage.removeItem('key');
	sessionStorage.removeItem('fname');
}

function clickLogout() {
	document.getElementById("logout").addEventListener("click", async () => {
		const l_out = new lout(parseInt(sessionStorage.getItem('id')), sessionStorage.getItem('key'));
		let loutResult = await l_out.doOut();
		loutResult.result === "success" ? removeSession() : '';
		pageRedirect();
	});
}
*/
(function main() {
	/*
	new checkTheLocalSession().getStatus === true ? setIdTitle() : pageRedirect();

	clickLogout();
	*/
	
	let menuMsy = document.querySelector(".menu").children[1];

	menuMsy.addEventListener("click", async () => {
		let str = `<div class="mainContent">      
						<div class="subContent" id="sub1">
							<div class="title">Silahkan isi data</div>
							<form>
								<input type="text" class="form_data" name="nama" id="nama" placeholder="Masukkan nama / badan usaha">
								<textarea  class="form_data" name="alamat" id="alamat" rows="4" cols="10" placeholder="Masukkan alamat"></textarea>  
								<input type="text" class="form_data" name="kel" id="kel" list="kelurahan" placeholder="Masukkan kelurahan">  
								<input type="number" class="form_data" name="wa" id="wa" placeholder="Nomor HP/Whatsapp">
								<input type="button" name="next" id="next" value="Next..">
							</form>
						</div>
						<div class="subContent" id="sub2">
							<div class="title">Silahkan Pilih Timbangan/UTTP</div>  
							<div class="shopChart"></div>
							<div class="addUttp">
								<div class="addDiv">+<p id="klik">Klik disini</p></div>
								<div class="addDiv qrDiv"></div>
							</div>
							<div class="backBtnDiv">
								<form><input type="button" name="back" id="back" value="Back.."></form>
								<form><input type="button" name="sbmt" id="sbmt" value="Submit"></form>
							</div>                  
						</div>
						<datalist id="kelurahan"></datalist>
					</div>
					<div class="uttpDiv hidden"></div>					
					<div class="scanDiv hidden">
						<!--<h3></h3>--> 
						<video id="video" autoplay style="max-width : 100%; max-height : 100%;"></video>
					</div>
					<div class="jmlhDiv hidden">
						<form class="spe">
							<input type="text" class="form_data" name="uttp" id="uttp" readonly>
							<input type="text" class="form_data" name="kap" id="kap" readonly placeholder="kapasitas">
							<input type="text" class="form_data" name="d" id="d" readonly placeholder="dayabaca">
							<input type="number" class="form_data" name="jml" id="jml" placeholder="jumlah..">
							<input type="text" class="form_data" name="merk" id="merk" placeholder="merk">
							<input type="text" class="form_data" name="tipe" id="tipe" placeholder="tipe/model">
							<input type="text" class="form_data" name="sn" id="sn" placeholder="no seri">
							<input type="text" class="form_data" name="buatan" id="buatan" placeholder="buatan">
							<input type="button" class="form_data" name="setJml" id="setJml" value="Tambahkan ke keranjang">
						</form>
						<p style="text-align : right;"><a class="closeFormJml" href=#><span>x</span> Close</a></div></p>
					</div>`;
		
		const formMasyRedApp = new createFormMasyRedApp(document.querySelector(".main"), str);
		await formMasyRedApp.generateForm();

		const args = ['k', 'this.list[k][0]', 'this.list[k][4]', 'this.list[k][0]', 'this.list[k][1]', 'this.list[k][2]']
		formMasyRedApp.stringUttp`<div id=${args[0]} class='daftarUttp' style="background-image : url(${args[2]});"><fieldset class="listFieldset"><legend class="listLegend">${args[3]} ${args[4]}</legend></fieldset></div>`;
		formMasyRedApp.generateBtnHandler();

		const scanHandler = new masyPrepareCam(formMasyRedApp);
		const sbmtHandler = new masySubmitProcessor(formMasyRedApp);

	});

	let menuPbrk = document.querySelector(".menu").children[0];

	menuPbrk.addEventListener("click", async () => {

		let str = `<div class="mainContent">      
						<div class="subContent" id="sub1">
							<div class="title">Silahkan isi data Anda</div>
							<form>
								<input type="text" class="form_data" name="nama" id="nama" list="pabrik" placeholder="Masukkan nama Pabrik">
								<textarea  class="form_data" name="alamat" id="alamat" rows="4" cols="10" placeholder="Masukkan alamat Pabrik/Perusahaan"></textarea>  
								<input type="text" class="form_data" name="kel" id="kel" list="kelurahan" placeholder="Masukkan kelurahan">  
								<input type="number" class="form_data" name="wa" id="wa" placeholder="Nomor HP/Whatsapp">
								<input type="button" name="next" id="next" value="Next..">
							</form>
						</div>
						<div class="subContent" id="sub2">
							<div class="title">Silahkan Pilih Timbangan/UTTP</div>  
							<div class="shopChart"></div>	
							<div class="addUttp">
								<div class="addDiv">+<p id="klik">Klik disini</p></div>
							</div>
							<div class="backBtnDiv">
								<form><input type="button" name="back" id="back" value="Back.."></form>
								<form><input type="button" name="sbmt" id="sbmt" value="Submit"></form>
							</div>                  
						</div>
						<datalist id="kelurahan"></datalist>
						<datalist id="pabrik"></datalist>
					</div>
					<div class="uttpDiv hidden"></div>
					<div class="jmlhDiv hidden">
						<h1>Silahkan isi jumlah & no.seri</h1>
						<form>
							<input type="number" class="form_data" name="jml" id="jml" placeholder="jumlah...">
							<input type="text" class="form_data" name="merk" id="merk" placeholder="merek...">
							<input type="text" class="form_data" name="tipe" id="tipe" placeholder="tipe...">
							<input type="text" class="form_data" name="kap" id="kap" placeholder="kapasitas maksimum...">
							<input type="text" class="form_data" name="d" id="d" placeholder="dayabaca...">
							<input type="text" class="form_data" name="txtSerial" id="txtSerial" style="width : 80%;" placeholder="Masukkan text nomor seri (jika ada)">							
							<input type="number" class="form_data" name="serial" id="serial" style="width : 45%;" placeholder="no seri awal">
							<input type="number" class="form_data" name="serialAkhir" id="serialAkhir" style="width : 45%;" placeholder="no seri akhir" readonly>
							<input type="button" class="form_data" name="setJml" id="setJml" value="Tambahkan ke keranjang">
							<p style="text-align : right;"><a class="closeFormJml" href=#><span>x</span> Close</a></div></p>
						</form>
					</div>`;

		const formPabrik = new createFormPabrik(document.querySelector(".main"), str);
		await formPabrik.generateForm();
		formPabrik.generateBtnHandler();
		const args = ['k', 'this.list[k][0]', 'this.list[k][4]', 'this.list[k][0]', 'this.list[k][1]', 'this.list[k][2]']
		formPabrik.stringUttp`<div id=${args[0]} class='daftarUttp' style="background-image : url(${args[2]});"><fieldset class="listFieldset"><legend class="listLegend">${args[3]} ${args[4]}</legend></fieldset></div>`;

		const sbmtHandler = new pabrikSubmitProcessor(formPabrik);
		sbmtHandler.setApi();
	});

	let menuSpbu = document.querySelector(".menu").children[2];
	menuSpbu.addEventListener("click", () => {
		let str = `<div class="mainContent">      
						<div class="subContent" id="sub1">
							<div class="title">Silahkan isi data Anda</div>
							<form>
								<!--<input type="text" class="form_data" name="nama" id="nama" list="spbu" placeholder="Masukkan nama SPBU">-->
								<select class="form_data" name="nama" id="nama">
								</select>
								<textarea  class="form_data" name="alamat" id="alamat" rows="4" cols="10" placeholder="Masukkan alamat SPBU"></textarea>  
								<input type="text" class="form_data" name="kel" id="kel" list="kelurahan" placeholder="Masukkan kelurahan">  
								<input type="number" class="form_data" name="wa" id="wa" placeholder="Nomor HP/Whatsapp">
								<input type="button" name="next" id="next" value="Next..">
							</form>
						</div>
						<div class="subContent" id="sub2">
							<div class="title">
								Pilih Nozzle<br>
								<span>Periksa Jenis Cairan, Merk, dan No. Seri</span>
							</div> 
							<!--<form>-->
							<!--<input type="number" class="form_data" name="jml_nozzle" id="jml_nozzle" placeholder="Masukkan Jumlah Nozzle">-->
							<div class="nozzDiv">
								<!--
								<div>
									<input type="checkbox" id="scales" name="scales" checked />
									<label class="nozzLabel" for="scales">Scales</label>
								</div>
								<div>
									<input type="checkbox" id="horns" name="horns" />
									<label class="nozzLabel" for="horns">Horns</label>
								</div>
								-->
							</div>
							<!--</form>-->
							<!--							
							<div class="title">Silahkan Pilih Timbangan/UTTP</div>  
							<div class="shopChart"></div>	
							<div class="addDiv">+<p id="klik">Klik disini</p></div>
							-->

							<div class="backBtnDiv">
								<form><input type="button" name="back" id="back" value="Back.."></form>
								<form><input type="button" name="sbmt" id="sbmt" value="Submit"></form>
							</div>                  
						</div>
						<datalist id="kelurahan"></datalist>
						<datalist id="spbu"></datalist>
					</div>
					
					<div class="uttpDiv hidden"></div>
					<div class="jmlhDiv hidden"><h1>Silahkan isi jumlah & no.seri</h1>
						<form>
							<input type="number" class="form_data" name="jml" id="jml" placeholder="jumlah...">
							<input type="number" class="form_data" name="serial" id="serial" style="width : 45%;" placeholder="no seri awal">
							<input type="number" class="form_data" name="serialAkhir" id="serialAkhir" style="width : 45%;" placeholder="no seri akhir" readonly>
							<input type="button" class="form_data" name="setJml" id="setJml" value="Tambahkan ke keranjang">
						</form>
					</div>`;		
			const formSpbuRedApp = new createFormSpbuRedApp(document.querySelector(".main"), str);
			formSpbuRedApp.generateForm();
			formSpbuRedApp.generateBtnHandler();
			formSpbuRedApp.whenSpbuChange();
			//formSpbuRedApp.whenCheckBoxChecked();

			const sbmtHandler = new spbuSubmitProcessor(formSpbuRedApp);

		
	});

	let menuLoko = document.querySelector(".menu").children[3];
	menuLoko.addEventListener("click", () => {
		let str = `<div class="mainContent">      
						<div class="subContent" id="sub1">
							<div class="title">Silahkan isi data Anda</div>
							<form>
								<input type="text" class="form_data" name="nama" id="nama" list="perushLoko" placeholder="Masukkan nama / badan usaha">
								<textarea  class="form_data" name="alamat" id="alamat" rows="4" cols="10" placeholder="Masukkan alamat"></textarea>  
								<input type="text" class="form_data" name="kel" id="kel" list="kelurahan" placeholder="Masukkan kelurahan">  
								<input type="number" class="form_data" name="wa" id="wa" placeholder="Nomor HP/Whatsapp">
								<input type="button" name="next" id="next" value="Next..">
							</form>
						</div>
						<div class="subContent" id="sub2">
							<div class="title">Silahkan Pilih Timbangan/UTTP</div>  
							<div class="shopChart"></div>
							<div class="addUttp">
								<div class="addDiv">+<p id="klik">Klik disini</p></div>
								<div class="addDiv qrDivLoko"></div>
							</div>
							<div class="backBtnDiv">
								<form><input type="button" name="back" id="back" value="Back.."></form>
								<form><input type="button" name="sbmt" id="sbmt" value="Submit"></form>
							</div>                  
						</div>
						<datalist id="kelurahan"></datalist>
						<datalist id="perushLoko"></datalist>
					</div>
					<div class="uttpDiv hidden"></div>		
					<div class="scanDiv hidden">
						<video id="video" autoplay style="max-width : 100%; max-height : 100%;"></video>
					</div>			
					<div class="jmlhDiv hidden">
						<form class="spe">
							<input type="text" class="form_data" name="uttp" id="uttp" readonly>
							<input type="text" class="form_data" name="kap" id="kap" readonly placeholder="kapasitas">
							<input type="text" class="form_data" name="d" id="d" readonly placeholder="dayabaca">
							<input type="number" class="form_data" name="jml" id="jml" placeholder="jumlah..">
							<input type="text" class="form_data" name="merk" id="merk" placeholder="merk">
							<input type="text" class="form_data" name="tipe" id="tipe" placeholder="tipe/model">
							<input type="text" class="form_data" name="sn" id="sn" placeholder="no seri">
							<input type="text" class="form_data" name="buatan" id="buatan" placeholder="buatan">
							<input type="button" class="form_data" name="setJml" id="setJml" value="Tambahkan ke keranjang">
						</form>
						<p style="text-align : right;"><a class="closeFormJml" href=#><span>x</span> Close</a></div></p>
					</div>`;

		const formLokoRedApp = new createFormLokoRedApp(document.querySelector(".main"), str);
		formLokoRedApp.generateForm();
	
		const args = ['k', 'this.list[k][0]', 'this.list[k][4]', 'this.list[k][0]', 'this.list[k][1]', 'this.list[k][2]']
		formLokoRedApp.stringUttp`<div id=${args[0]} class='daftarUttp' style="background-image : url(${args[2]});"><fieldset class="listFieldset"><legend class="listLegend">${args[3]} ${args[4]}</legend></fieldset></div>`;

		formLokoRedApp.generateBtnHandler();
		
		const scanHandler = new lokoPrepareCam(formLokoRedApp);
		const sbmtHandler = new lokoSubmitProcessor(formLokoRedApp);
		sbmtHandler.setApi();						
	});

	let menuScanOnly = document.querySelector('.menu2').children[0];
	menuScanOnly.addEventListener("click",() => {
		let str = `<div class="mainContent">      
						<div class="subContent" id="sub2">
							<div class="title">Silahkan Scan QRCode</div>  
							<div class="shopChart"></div>
							<div class="addUttp">
								<div class="addDiv qrDivScanOnly"></div>
							</div>
							<div class="backBtnDiv">
								<form><input type="button" name="sbmt" id="sbmt" value="Submit"></form>
							</div>                  
						</div>
					</div>
					<div class="uttpDiv hidden"></div>					
					<div class="scanDiv hidden">
						<!--<h3></h3>--> 
						<video id="video" autoplay style="max-width : 100%; max-height : 100%;"></video>
					</div>`;		

		const formScanOnly = new createFormScanOnly(document.querySelector(".main"), str);
		formScanOnly.generateForm();
		const scanHandler = new scanOnlyPrepareCam(formScanOnly);
		const sbmtHandler = new scanOnlySubmitProcessor(formScanOnly);
		sbmtHandler.setApi();
	});

	let menuManage = document.querySelector('.menu2').children[2];
	menuManage.addEventListener("click", () => {
		window.location.replace("registration_pc_2025.html");
	});

	let menuVerif = document.querySelector('.menu2').children[1];
	menuVerif.addEventListener("click", () => {
		alert("Mohon maaf belum bisa diakses, Menu ini masih dalam pengembangan...");
	});
 
})();


