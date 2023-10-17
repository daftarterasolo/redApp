export async function siapkanKamera() {
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

        const deteksiKode = () => {
            qrcodeDetector.detect(video)
            .then(codes => {
                if (codes.length === 0) return;

                for (const qrcode of codes) {
                    alert(qrcode.rawValue);
                }

                clearInterval(setIntervalID);
            })
            .catch(err => {
                clearInterval(setIntervalID);
            });
        } 

        var setIntervalID = setInterval(deteksiKode, 1000);
    }    
}

