class prepareCam {
    constructor() {
        if (this.constructor === "prepareCam") {
            throw new Error("Object cannot be made..");
        }

    }

    detectIfSubmitClicked() {
		throw new Error("Abstract Method has no implementation...");
	}
}

export class masyPrepareCam extends prepareCam {
    #obj;
    qrData;

    constructor(obj) {
        super(constructor);
        this.#obj = obj;
        this.#addByQrcodeBtnHandler();
    }

    async #siapkanKamera(obj) {
        let video = document.getElementById("video");
        
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const constrain = {
                video : {
                    facingMode : {
                        exact: 'environment'
                    }
                },
                audio : false   
            }
    
            //start video stream
            await navigator.mediaDevices.getUserMedia(constrain).then(stream => {
                video.srcObject = stream;
            });
    
            const qrcodeDetector = new BarcodeDetector({ formats : ['qr_code']});

            let setIntervalID = setInterval(() => {
                qrcodeDetector.detect(video)
                .then(codes => {
                    if (codes.length === 0) return;
    
                    let kode = "";
                    for (const qrcode of codes) {
                        kode = qrcode.rawValue;
                        //alert(qrcode.rawValue);
                    }
    
                    clearInterval(setIntervalID);
                    this.#buatHasilQueryDiv(kode);
                    //closeScanDiv();
                })
                .catch(err => {
                    clearInterval(setIntervalID);
                    this.#buatHasilQueryDiv("");
                    //closeScanDiv();
                });
            },1000);
            
        }    
    }

    #closeScanDiv() {
        document.querySelector(".scanDiv").classList.add("hidden");
    }
    
    #closeKueriDiv() {
        document.getElementById("clBtn").addEventListener("click", () => document.querySelector(".hasilKueriDiv").remove());
    }
    
    #closeQrBtnHandler() {
        let closeBtn = document.querySelector(".qrCloseHref");
        closeBtn.addEventListener('click',() => document.querySelector(".scanDiv").classList.add("hidden"));
    }
    
    #addToChartBtnHandler() {
        document.getElementById("sbBtn").addEventListener("click", () => {
            //alert("Btn Clicked");
            //alert(document.getElementById("addr").checked); 
            let dat = this.#obj.get_dataToSend;
            let arr = this.qrData.readData;
            let nama_uttp = "test";
            /*for (let x of this.#obj.list) {
                if (x[0] === arr[8]) {
                    nama_uttp = x[3];
                    dat[Object.keys(dat).length + 1] = [arr[8],arr[9],arr[10],arr[8],"Timbangan Meja","","1",arr[11],arr[12],arr[15],"China"];
                    alert(JSON.stringify(dat));
                    
                }
                
                
            }*/
            dat[Object.keys(dat).length + 1] = [arr[8],arr[9],arr[10],arr[8],"Timbangan Meja","","1",arr[11],arr[12],arr[15],"China"];
            alert(JSON.stringify(dat));
        });
    }
    
    async #readData(qrCode) {
        let theData;
        const apiUrl = "https://script.google.com/macros/s/AKfycbzjWdF6PAi-7nMSvEPxWdJab4ZwI51aSdoccyQzriwKq9W6hM-lWkHvwcqPMyY-sIrOnw/exec"; 
        await fetch(apiUrl, {
            method : 'POST',
            body : JSON.stringify({'keyword' : qrCode})
        })
        .then(e => e.json())
        .then(e => {
            //alert(e.readData[0]);
            theData = e;
        });
    
        return theData;
    }
    
    async #buatHasilQueryDiv(kode) {
        let kueriDiv = document.createElement("div");
        kueriDiv.setAttribute("class", "hasilKueriDiv");
        let formQR = document.createElement("form");
        formQR.setAttribute("id","formQR");
        formQR.innerHTML = `
            <input type="text" class="form_data" name="qrNama" id="qrNama" placeholder="nama">
            <input type="text" class="form_data" name="qrHp" id="qrHp" placeholder="hp">
            <input type="text" class="form_data" name="qrAlamat" id="qrAlamat" placeholder="alamat">
            <input type="text" class="form_data" name="qrKel" id="qrKel" placeholder="kelurahan">
            <input type="text" class="form_data" name="qrUttp" id="qrUttp" placeholder="uttp">
            <input type="text" class="form_data" name="qrSn" id="qrSn" placeholder="serial">
            <input type="text" class="form_data" name="qrJenisUsaha" id="qrJenisUsaha" placeholder="jenisUsaha">
            <!--<input type="checkbox" id="addr" name="addr" value="ya">
            <label id="addrLabel" for="addr">Apakah ingin menggunakan alamat ssi QrCode?</label><br>-->
            <label class="addrLabel" for="addr">Apakah ingin menggunakan alamat ssi QrCode?
                <input type="checkbox" id="addr" name="addr" value="ya">
                <span class="checkmark"></span>
            </label>
        `;
    
        let formSb = document.createElement("form");
        formSb.innerHTML = `<input type="button" id="sbBtn" value="Tambahkan ke Keranjang" data-inline="true">`;
        let formCnl = document.createElement("form");
        formCnl.innerHTML = `<input type="button" id="clBtn" value="Cancel" data-inline="true">`;
    
        kueriDiv.append(formQR);
        kueriDiv.append(formSb);
        kueriDiv.append(formCnl);
        //let theData = await this.#readData(kode);
        this.qrData = await this.#readData(kode);
        
        let mainDiv = document.querySelector(".main");
        mainDiv.insertBefore(kueriDiv, mainDiv.querySelector(".scanDiv"));
    
        if (this.qrData.result === "error") {
            alert("Maaf, Data tidak ditemukan.");
            document.querySelector(".hasilKueriDiv").remove();    
        }
    
        this.#closeScanDiv();
        document.getElementById("qrNama").setAttribute('value', this.qrData.readData[3]);
        document.getElementById("qrHp").setAttribute('value', this.qrData.readData[5]);
        document.getElementById("qrAlamat").setAttribute('value', this.qrData.readData[4]);
        document.getElementById("qrKel").setAttribute('value', this.qrData.readData[2]);
        document.getElementById("qrUttp").setAttribute('value', `${this.qrData.readData[8]} ${this.qrData.readData[9]} / ${this.qrData.readData[10]}`);
        document.getElementById("qrSn").setAttribute('value', this.qrData.readData[15]);
        document.getElementById("qrJenisUsaha").setAttribute('value', this.qrData.readData[16]);
        this.#closeKueriDiv();
        this.#addToChartBtnHandler();
    }
    
    async #lakukanScan() {
        let scandiv = document.querySelector(".scanDiv");
        scandiv.classList.remove("hidden");
        let h3 = document.createElement("h3");
        h3.setAttribute("id","qrTitle");
        h3.innerHTML = "Tunggu sebentar.. Apps sedang menyiapkan kamera.";
        scandiv.prepend(h3);    
        await this.#siapkanKamera();
        scandiv.removeChild(h3);
        h3.setAttribute("id","qrTitle");
        h3.innerHTML = "Kamera Siap.<br>Scan QRCode Pada UTTP Utk Mendaftar";
        scandiv.contains(document.getElementById('qrTitle')) ? scandiv.removeChild(h3) : '';
        scandiv.prepend(h3);
        let p = document.createElement("a");
        p.setAttribute("class", "qrCloseHref");
        p.innerHTML = "Close";
        scandiv.contains(document.querySelector('.qrCloseHref')) ? scandiv.removeChild(p) : '';             
        scandiv.insertBefore(p,scandiv.firstElementChild);
        this.#closeQrBtnHandler();    
    }    

    #addByQrcodeBtnHandler() {
		let addQrBtn = document.querySelector(".qrDiv");
		if (addQrBtn !== null) {
			addQrBtn.addEventListener('click', async () => {
				this.#lakukanScan();
			});
		}
	}

}

/*
async function siapkanKamera(obj) {
    let video = document.getElementById("video");
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constrain = {
            video : {
                facingMode : {
                    exact: 'environment'
                }
            },
            audio : false   
        }

        //start video stream
        await navigator.mediaDevices.getUserMedia(constrain).then(stream => {
            video.srcObject = stream;
        });

        const qrcodeDetector = new BarcodeDetector({ formats : ['qr_code']});

        function deteksiKode() {
            qrcodeDetector.detect(video)
            .then(codes => {
                if (codes.length === 0) return;

                let kode = "";
                for (const qrcode of codes) {
                    kode = qrcode.rawValue;
                    //alert(qrcode.rawValue);
                }

                clearInterval(setIntervalID);
                buatHasilQueryDiv(kode);
                //closeScanDiv();
            })
            .catch(err => {
                clearInterval(setIntervalID);
                buatHasilQueryDiv();
                //closeScanDiv();
            });
        } 

        var setIntervalID = setInterval(deteksiKode, 1000);
        
    }    
}

function closeScanDiv() {
    document.querySelector(".scanDiv").classList.add("hidden");
}

function closeKueriDiv() {
    document.getElementById("clBtn").addEventListener("click", () => document.querySelector(".hasilKueriDiv").remove());
}

function closeQrBtnHandler() {
    let closeBtn = document.querySelector(".qrCloseHref");
    closeBtn.addEventListener('click',() => document.querySelector(".scanDiv").classList.add("hidden"));
}

function sbmtBtnHandler() {
    document.getElementById("sbBtn").addEventListener("click", () => {
        alert("Btn Clicked");
    });
}

async function readData(qrCode) {
    let theData;
    const apiUrl = "https://script.google.com/macros/s/AKfycbzjWdF6PAi-7nMSvEPxWdJab4ZwI51aSdoccyQzriwKq9W6hM-lWkHvwcqPMyY-sIrOnw/exec"; 
    await fetch(apiUrl, {
        method : 'POST',
        body : JSON.stringify({'keyword' : qrCode})
    })
    .then(e => e.json())
    .then(e => {
        //alert(e.readData[0]);
        theData = e;
    });

    return theData;
}

async function buatHasilQueryDiv(kode) {
    let kueriDiv = document.createElement("div");
    kueriDiv.setAttribute("class", "hasilKueriDiv");
    let formQR = document.createElement("form");
    formQR.setAttribute("id","formQR");
    formQR.innerHTML = `
        <input type="text" class="form_data" name="qrNama" id="qrNama" placeholder="nama">
        <input type="text" class="form_data" name="qrHp" id="qrHp" placeholder="hp">
        <input type="text" class="form_data" name="qrAlamat" id="qrAlamat" placeholder="alamat">
        <input type="text" class="form_data" name="qrKel" id="qrKel" placeholder="kelurahan">
        <input type="text" class="form_data" name="qrUttp" id="qrUttp" placeholder="uttp">
        <input type="text" class="form_data" name="qrSn" id="qrSn" placeholder="serial">
        <input type="text" class="form_data" name="qrJenisUsaha" id="qrJenisUsaha" placeholder="jenisUsaha">
    `;

    let formSb = document.createElement("form");
    formSb.innerHTML = `<input type="button" id="sbBtn" value="submit">`;
    let formCnl = document.createElement("form");
    formCnl.innerHTML = `<input type="button" id="clBtn" value="cancel">`;

    kueriDiv.append(formQR);
    kueriDiv.append(formSb);
    kueriDiv.append(formCnl);
    
    
    //let submitBtn = document.createElement("input");
    //submitBtn.setAttribute("value", "Submit")
    //submitBtn.setAttribute("id","sbBtn");
    //submitBtn.setAttribute("type", "button");
    //let cancelBtn = document.createElement("input");
    //cancelBtn.setAttribute("id","clBtn");
    //cancelBtn.setAttribute("value", "Cancel");
    //cancelBtn.setAttribute("type", "button");
    
    let theData = await readData(kode);
    
    //kueriDiv.append(submitBtn);
    //kueriDiv.append(cancelBtn);
    let mainDiv = document.querySelector(".main");
    mainDiv.insertBefore(kueriDiv, mainDiv.querySelector(".scanDiv"));

    if (theData.result === "error") {
        alert(theData.result);
        document.querySelector(".hasilKueriDiv").remove();    
    }

    closeScanDiv();
    document.getElementById("qrNama").setAttribute('value', theData.readData[3]);
    document.getElementById("qrHp").setAttribute('value', theData.readData[5]);
    document.getElementById("qrAlamat").setAttribute('value', theData.readData[4]);
    document.getElementById("qrKel").setAttribute('value', theData.readData[2]);
    document.getElementById("qrUttp").setAttribute('value', `${theData.readData[8]} ${theData.readData[9]} / ${theData.readData[10]}`);
    document.getElementById("qrSn").setAttribute('value', theData.readData[15]);
    document.getElementById("qrJenisUsaha").setAttribute('value', theData.readData[16]);
    closeKueriDiv();
    sbmtBtnHandler();
}

export async function lakukanScan() {
    let scandiv = document.querySelector(".scanDiv");
    scandiv.classList.remove("hidden");
    let h3 = document.createElement("h3");
    h3.setAttribute("id","qrTitle");
    h3.innerHTML = "Tunggu sebentar.. Apps sedang menyiapkan kamera.";
    scandiv.prepend(h3);    
    await siapkanKamera();
    scandiv.removeChild(h3);
    h3.setAttribute("id","qrTitle");
    h3.innerHTML = "Kamera Siap.<br>Scan QRCode Pada UTTP Utk Mendaftar";
    scandiv.contains(document.getElementById('qrTitle')) ? scandiv.removeChild(h3) : '';
    scandiv.prepend(h3);
    let p = document.createElement("a");
    p.setAttribute("class", "qrCloseHref");
    p.innerHTML = "Close";
    scandiv.contains(document.querySelector('.qrCloseHref')) ? scandiv.removeChild(p) : '';             
    scandiv.insertBefore(p,scandiv.firstElementChild);
    closeQrBtnHandler();    
}
*/