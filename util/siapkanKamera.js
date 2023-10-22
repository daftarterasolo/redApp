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

                for (const qrcode of codes) {
                    //alert(qrcode.rawValue);
                }

                clearInterval(setIntervalID);
                closeScanDiv();
                buatHasilQueryDiv();
            })
            .catch(err => {
                clearInterval(setIntervalID);
                closeScanDiv();
                buatHasilQueryDiv();
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

function buatHasilQueryDiv() {
    let kueriDiv = document.createElement("div");
    kueriDiv.setAttribute("class", "hasilKueriDiv");
    let submitBtn = document.createElement("input");
    submitBtn.setAttribute("value", "Submit")
    submitBtn.setAttribute("id","sbBtn");
    submitBtn.setAttribute("type", "button");
    let cancelBtn = document.createElement("input");
    cancelBtn.setAttribute("id","clBtn");
    cancelBtn.setAttribute("value", "Cancel");
    cancelBtn.setAttribute("type", "button");
    kueriDiv.append(submitBtn);
    kueriDiv.append(cancelBtn);
    let mainDiv = document.querySelector(".main");
    mainDiv.insertBefore(kueriDiv, mainDiv.querySelector(".scanDiv"));
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