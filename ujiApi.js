const downloadBuktiDaftar = () => {
/*
	//let api = "http://192.168.100.106:5005/buktidaftar";
	let api = "https://sert.metrologi.ska:5005/buktidaftar";

	let data = {"bukti_daftar": [["2024-01-16T03:23:27.319Z",114,"PAKET HERONA EXPRESS","Kestalan, Surakarta","-","62","TS","500 kg","200 g","PRESISIE","E160029","-",1,"Indonesia","gc","","114/TS/TUK/I/2024",225],["2024-01-16T03:23:27.319Z",114,"PAKET HERONA EXPRESS","Kestalan, Surakarta","-","62","TS","500 kg","200 g","PRESISIE","E160029","-",1,"Indonesia","gc","","114/TS/TUK/I/2024",225],["2024-01-16T03:23:27.319Z",114,"PAKET HERONA EXPRESS","Kestalan, Surakarta","-","62","TS","500 kg","200 g","PRESISIE","E160029","-",1,"Indonesia","gc","","114/TS/TUK/I/2024",225]]}

	fetch(api,{
		method : 'POST',
		headers : {
			"Content-Type" : "application/json"
		},
		body : JSON.stringify(data)
	})
	.then(result => result.json())
	.then(result => {
		console.log(result);
	});
*/

	let api = "https://sert.metrologi.ska:5005/buktidaftar";

	fetch(api, {
		method : 'GET',
		headers : {
			"Accept" : "Application/octet-stream"
		}
	})
	.then(data => data.blob())
	.then(data => {
		const aElement = document.createElement("a");
		aElement.setAttribute("download", "bukti_daftar_terbaru_114_04_Maret_2024.docx");
		const href = URL.createObjectURL(data);
		aElement.href = href;
		aElement.setAttribute("target", "_blank");
		aElement.click();
		URL.revokeObjectURL(href);
	});

}


downloadBuktiDaftar();