export async function siapkanKamera() {
    //cek if device has camera
    //console.log(navigator.mediaDevices);
    //console.log(navigator.mediaDevices.getUserMedia);
    const video = document.querySelector("#video");
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
        navigator.mediaDevices.getUserMedia(constrain).then(stream => {
            video.srcObject = stream;
        });

    }
    
/*
    navigator.mediaDevices.enumerateDevices().then(devices => {
        //console.log(devices);
        const videoDev = devices.filter(device => device.kind === 'videoinput');
        if (videoDev.length !== 0) {
            alert("Device has camera");
        } else {
            alert("Device does not have camera");
        }
        //console.log(videoDev);
    });
*/
}

siapkanKamera();