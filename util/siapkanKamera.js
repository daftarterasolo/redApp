async function siapkanKamera() {
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

function closeQrBtnHandler() {
    let closeBtn = document.querySelector(".qrCloseHref");
    closeBtn.addEventListener('click',() => document.querySelector(".scanDiv").classList.add("hidden"));
}

async function readData(qrCode) {
    const apiUrl = "https://script.google.com/macros/s/AKfycbzjWdF6PAi-7nMSvEPxWdJab4ZwI51aSdoccyQzriwKq9W6hM-lWkHvwcqPMyY-sIrOnw/exec"; 
    await fetch(apiUrl, {
        method : 'POST',
        body : JSON.stringify({'keyword' : qrCode})
    })
    .then(e => e.json())
    .then(e => {
        return e.readData;
    });

}

async function buatHasilQueryDiv(kode) {
    let kueriDiv = document.createElement("div");
    kueriDiv.setAttribute("class", "hasilKueriDiv");
    let formQR = document.createElement("form");
    formQR.setAttribute("id","formQR");
    formQR.innerHTML = `
        <input type="text" class="form_data" name="kode_qr" id="kode_qr" placeholder="qr_code">
        <input type="text" class="form_data" name="nama" id="nama" placeholder="nama">
        <input type="text" class="form_data" name="alamat" id="alamat" placeholder="alamat">
        <input type="button" id="sbBtn" value="submit">
        <input type="button" id="clBtn" value="cancel">    
    `;

    kueriDiv.append(formQR);
    /*
    let submitBtn = document.createElement("input");
    submitBtn.setAttribute("value", "Submit")
    submitBtn.setAttribute("id","sbBtn");
    submitBtn.setAttribute("type", "button");
    let cancelBtn = document.createElement("input");
    cancelBtn.setAttribute("id","clBtn");
    cancelBtn.setAttribute("value", "Cancel");
    cancelBtn.setAttribute("type", "button");
    */
    await readData(kode);
    //kueriDiv.append(submitBtn);
    //kueriDiv.append(cancelBtn);
    let mainDiv = document.querySelector(".main");
    mainDiv.insertBefore(kueriDiv, mainDiv.querySelector(".scanDiv"));
    closeScanDiv();
}

export async function lakukanScan() {
    let scandiv = document.querySelector(".scanDiv");
    scandiv.classList.remove("hidden");
    let h3 = document.createElement("h3");
    h3.setAttribute("id","qrTitle");
    h3.innerHTML = "Tunggu sebentar.. Apps sedang menyiapkan kamera."
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