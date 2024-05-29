function tempAlert(duration) {
  let wadah = document.querySelector(".wadah");

  if (wadah !== null) {
    wadah.addEventListener("change", function() {
      console.log("test");
    });

  }
}

//tempAlert(5000);
let dispenser = "__";
let jenisBBM = [];
function detailItem(arr, jenisTera, iter, penera) {
  let detailStr = ``;
  let uttp = ``;
  let arrLabel = [];

  let i = 0;
  detailStr += `<table class="wadah">`;
  
  console.log(arr);
  //console.log(penera);

  let strPenera = ``;
  let strPenera2 = ``;

  if (arr.length === 19) {
    strPenera = `<select class="pilihPenera" id="${arr[18]}"><option></option>`;
    strPenera2 = `<select class="pilihPenera2" id="${arr[18]}"><option></option>`;
  } else {
    strPenera = `<select class="pilihPenera" id="${arr[17]}"><option></option>`;    
    strPenera2 = `<select class="pilihPenera2" id="${arr[17]}"><option></option>`;    
  }

  for (let [i,k] of penera.entries()) {
    i !== 0 ? strPenera += `<option value="${jenisTera}">${k[2]}</option>` : '';
    i !== 0 ? strPenera2 += `<option value="${jenisTera}">${k[2]}</option>` : '';
  }

  strPenera += `</select>`;

  if (jenisTera === "tera") {
    detailStr += `<thead><tr><td>WTU</td><td>Alamat</td><td>UTTP</td><td>Merek</td><td>SN</td><td>Tipe</td><td>Jml</td><td>Buatan</td><td>Penera</td></tr></thead>`;
    detailStr += `<tbody><tr><td>${arr[2]}</td><td>${arr[3]}</td><td>${arr[6]} / ${arr[7]} / ${arr[8]}</td><td>${arr[9]}</td><td>${arr[10]} - ${arr[10]+arr[13]-1}</td><td>${arr[11]}</td><td>${arr[13]}</td><td>${arr[14]}</td><td>${arr[15] === ""? `${strPenera} & ${strPenera2}` : arr[15]}</td><td><input type="button" class="sertifikatBtn" name="${arr[1]}-${iter}-${jenisTera}" id="${arr[1]}-${iter}-${jenisTera}" value = "Sertifikat"></td></tr></tbody>`;    

  } 
  else if (jenisTera === "spbu") {
    console.log(arr[15].split(".")[0]);

    if (arr[15].split(".")[0] === dispenser) {
      jenisBBM += `<br>Pompa Ukur BBM untuk ${arr[16]} (${arr[15]})`;
      detailStr += `<thead class="green"><tr><td>WTU</td><td>Jenis BBM</td><td>Alamat</td><td>UTTP</td><td>Merek</td><td>SN</td><td>Tipe</td><td>Jml</td><td>Buatan</td><td>Penera</td><td></td></tr></thead>`;      
      detailStr += `<tbody class="green"><tr><td>${arr[2]}</td><td>${jenisBBM}</td><td>${arr[3]}</td><td>${arr[6]} / ${arr[7]} / ${arr[8]}</td><td>${arr[9]}</td><td>${arr[10]}</td><td>${arr[11]}</td><td>${arr[12]}</td><td>${arr[13]}</td><td>${arr[14] === ""? `${strPenera} & ${strPenera2}` : arr[14]}</td><td><input type="button" class="sertifikatBtn" name="${arr[1]}-${iter}-${jenisTera}" id="${arr[1]}-${iter}-${jenisTera}-${arr[15]}" value = "Sertifikat"></td></tr></tbody>`;
    } else {
      jenisBBM = `<br>Pompa Ukur BBM untuk ${arr[16]} (${arr[15]})`;
      detailStr += `<thead class="blue"><tr><td>WTU</td><td>Jenis BBM</td><td>Alamat</td><td>UTTP</td><td>Merek</td><td>SN</td><td>Tipe</td><td>Jml</td><td>Buatan</td><td>Penera</td><td></td></tr></thead>`;      
      detailStr += `<tbody class="blue"><tr><td>${arr[2]}</td><td>${jenisBBM}</td><td>${arr[3]}</td><td>${arr[6]} / ${arr[7]} / ${arr[8]}</td><td>${arr[9]}</td><td>${arr[10]}</td><td>${arr[11]}</td><td>${arr[12]}</td><td>${arr[13]}</td><td>${arr[14] === ""? `${strPenera} & ${strPenera2}` : arr[14]}</td><td><input type="button" class="sertifikatBtn" name="${arr[1]}-${iter}-${jenisTera}" id="${arr[1]}-${iter}-${jenisTera}-${arr[15]}" value = "Sertifikat"></td></tr></tbody>`;
    }

    
    
    dispenser = arr[15].split(".")[0];
  }
  else {
    detailStr += `<thead><tr><td>WTU</td><td>Alamat</td><td>UTTP</td><td>Merek</td><td>SN</td><td>Tipe</td><td>Jml</td><td>Buatan</td><td>Penera</td></tr></thead>`;
    detailStr += `<tbody><tr><td>${arr[2]}</td><td>${arr[3]}</td><td>${arr[6]} / ${arr[7]} / ${arr[8]}</td><td>${arr[9]}</td><td>${arr[10]}</td><td>${arr[11]}</td><td>${arr[12]}</td><td>${arr[13]}</td><td>${arr[14] === ""? `${strPenera} & ${strPenera2}` : arr[14]}</td><td><input type="button" class="sertifikatBtn" name="${arr[1]}-${iter}-${jenisTera}" id="${arr[1]}-${iter}-${jenisTera}" value = "Sertifikat"></td></tr></tbody>`;
  }

  detailStr += `</table>`;
  /*
  for (let [idx,ar] of arr.entries()) {
    //detailStr += ` ${ar} |`;
    if (idx != 0 && idx != 1 && idx != 15 && idx != 16 && idx != 5 && idx != 4 && idx != 17) {
      if (idx === 6 || idx === 7 || idx === 8) {
        uttp += `${ar} / `;
        if (idx === 8) {
          detailStr += `<tr><td class="label">${arrLabel[i]}</td><td>${uttp}</td></tr>`;
          i++;
        }
      } else {
        detailStr += `<tr><td class="label">${arrLabel[i]}</td><td>${ar}</td></tr>`;
        i++;
      }
    }
  }
  

  detailStr += `
    <tr><td colspan=2 align="center"><input type="button" name="${arr[1]}-${iter}" id="${arr[1]}-${iter}" value = "Sertifikat"></td></tr>
    </table>
  `;
  */

  return detailStr;
}


function detectIfPeneraSelected() {
  let peneraSelect = document.querySelectorAll(".pilihPenera");
  
  for (let k of peneraSelect) {
    k.addEventListener("change", async function() {
      let el = document.createElement("div");
      el.setAttribute("class", "alertUpdatePenera");
      el.innerHTML = "Tunggu sebentar ya..";

      const data = {
          'baris' : k.id,
          'penera' : k.options[k.selectedIndex].text,
          'jenisTera' : k.options[k.selectedIndex].value,
          'authData' : {
            'token' : sessionStorage.getItem('key')
          }
      };

      this.parentElement.appendChild(el);
      

      let url = "https://script.google.com/macros/s/AKfycbxM3w_o36FS0giKTKchPjM84XMRxTqorCVqq5XU_TBi7_IZDDoTVx8ZOacYcgzpT3oqxw/exec";
      await fetch(url, {
        method : 'POST',
        body : JSON.stringify(data)
      })
      .then(e => e.json())
      .then(e => {
        if (e.result === "success") {
          el.innerHTML = "Data Penera Berhasil Diupdate";
        } else {
          el.innerHTML = "Update data gagal";
        }
        
        setTimeout(() => {
          this.parentElement.removeChild(el);
        },1000);

      });
    });

  }
}

function detectIfPeneraDuaSelected() {
  let peneraSelect = document.querySelectorAll(".pilihPenera2");
  
  for (let k of peneraSelect) {
    k.addEventListener("change", async function() {
      let el = document.createElement("div");
      el.setAttribute("class", "alertUpdatePenera");
      el.innerHTML = "Tunggu sebentar ya..";

      const data = {
          'baris' : k.id,
          'penera' : k.options[k.selectedIndex].text,
          'jenisTera' : k.options[k.selectedIndex].value,
          'authData' : {
            'token' : sessionStorage.getItem('key')
          }
      };

      this.parentElement.appendChild(el);
      

      let url = "https://script.google.com/macros/s/AKfycbxM3w_o36FS0giKTKchPjM84XMRxTqorCVqq5XU_TBi7_IZDDoTVx8ZOacYcgzpT3oqxw/exec";
      await fetch(url, {
        method : 'POST',
        body : JSON.stringify(data)
      })
      .then(e => e.json())
      .then(e => {
        if (e.result === "success") {
          el.innerHTML = "Data Penera Berhasil Diupdate";
        } else {
          el.innerHTML = "Update data gagal";
        }
        
        setTimeout(() => {
          this.parentElement.removeChild(el);
        },1000);

      });
    });

  }
}


let dataPeneraDetail = {};

async function getPenera() {
  let url = "https://script.google.com/macros/s/AKfycbwVWS2_MAlA828n87BkKf4rkBHScPSxlAvPbKNiFtgMah2sZeGOUhrFguoVu7SJDtM/exec";
  let dataPenera;
  
  await fetch(url)
        .then(data => data.json())
        .then(data => {
          dataPenera = data;
        });

  for (let i of dataPenera.data) {
    dataPeneraDetail[i[2]] = `${i[1]} / ${i[3]}`;
  }      
  //console.log(dataPeneraDetail);

  return dataPenera;
}

let dataPenera;


async function changeDate() {
  let tgl = document.querySelectorAll('.tgl');

  dataPenera = await getPenera();

  for (let k of tgl) {
    k.addEventListener("change", async () => {
      //console.log(k.id);

      let obj = {
        "tgl_tuk" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbxQ0Df1SBipq1v2wqkSlbxyQNjI3e2wcJr3wLKgRoiRiRsXBe4RgYOhIGx01gBUGRjJJw/exec",
          "layoutPos" : ".k_tuk",
          "jenisTera" : "tuk"
        },
        "tgl_tera" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycby_EIGGqCHpnGBqshXzS1_cGZ_zMz1OgaWZVBX7bJCxlDCUm29tBC_du1PnEdohGkEMXw/exec",
          "layoutPos" : ".k_tera",
          "jenisTera" : "tera"          
        },
        "tgl_spbu" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbyDkQgrJbZvMQY86zOflYAYmC31DPEffdxFH3mutX6Gv0EFmJQotvEgVa7P1pnaijt87A/exec",
          "layoutPos" : ".k_spbu",
          "jenisTera" : "spbu"          
        },
        "tgl_loko" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbwASU7suSjjiAm2Fg_BJFqdRF03tOQ09V1ZvyBV-03NyTVj-UUrHPRa2HnPO3E_2Ti1Hw/exec",
          "layoutPos" : ".k_loko",
          "jenisTera" : "loko"          
        }        
      };

      const urlApi = obj[k.id]["urlApi"];

      //console.log(k.value);

      const postData = {
          'tanggal' : k.value,
          'authData' : {
                'token' : sessionStorage.getItem('key') 
          }
      };

      clearTemplate(obj[k.id]["layoutPos"]);

      await fetch(urlApi, {
          method : 'POST',
          body : JSON.stringify(postData) 
      })
      .then(e => e.json())
      .then(e => {
          let str = '';
          if (e.result !== "error") {
            let lastOrder = 0;
            let iterator = 0;
            //console.log(e.data);
            arrayData = e.data;

            for (let l of e.data) {
              //console.log(l);
              if (l[1] !== lastOrder) {
                str += `</div></div>`;
                
                if (l.length === 18) {
                  let nomor_order = "";
                  let mass = "";

                  if (l[16].split("/").length === 6) {
                    let arrFromNorder = l[16].split("/");
                    arrFromNorder.pop();
                    nomor_order = arrFromNorder.join("/");
                    mass = ' mass';
                  } else {
                    nomor_order = l[16];
                  }
                  
                  //str += `<div class="item"><div class="inner"><button id="${l[1]}" class="printSKRD">Nomor Order : ${l[16]}</button><div class="innerOfInner">${detailItem(l, obj[k.id]["jenisTera"], iterator, dataPenera.data)}</div>`;
                  str += `<div class="item"><div class="inner"><button id="${l[1]}" class="printSKRD${mass}">Nomor Order : ${nomor_order}</button>&nbsp;<button id="_${l[1]}" class="printFormulir${mass}">Cetak Formulir</button><div class="innerOfInner">${detailItem(l, obj[k.id]["jenisTera"], iterator, dataPenera.data)}</div>`;
                } else {
                  str += `<div class="item"><div class="inner"><button id="${l[1]}" class="printSKRD">Nomor Order : ${l[17]}</button>&nbsp;<button id="_${l[1]}" class="printFormulir">Cetak Formulir</button><div class="innerOfInner">${detailItem(l, obj[k.id]["jenisTera"], iterator, dataPenera.data)}</div>`;                  
                }
                
                //str += `<div class="item"><div class="inner">Nomor Order : ${l[16]}<div class="innerOfInner">${detailItem(l, obj[k.id]["jenisTera"], iterator)}</div>`;
              } else {
                str += `<div class="innerOfInner">${detailItem(l, obj[k.id]["jenisTera"], iterator, dataPenera.data)}</div>`;
              }

              lastOrder = l[1];
              iterator++;
            }

          } else {
            alert(`Loading data tidak berhasil. Error Message : ${e.data}`);
            clearLoading(obj[k.id]["layoutPos"]);
            return;
          }
          //console.log(str);

          document.querySelector(obj[k.id]["layoutPos"]).innerHTML = str; 
          detectIfPeneraSelected();
          detectIfPeneraDuaSelected();
          printSKRD();
          printFormulir();
          printSertifikat();
          
          let prev = "";
          let prevElem = "";
          let panjangNode = document.querySelectorAll('.wadah').length;
          //console.log(panjangNode);

          document.querySelectorAll('.wadah').forEach((nil, indeks) => {  
            //console.log(nil.children[1].children[0].children[10].children[0].style.display = "none");
            let now = nil.children[0].classList[0];
            if (prev === "green" && now === "blue") {
              prevElem.children[0].classList.add("black");
              prevElem.children[1].classList.add("black");
              //let arr = prevElem.children[1].children[0].children[1].innerHTML.split("<br>").filter(item => item !== "");
              //console.log(prevElem.children[1].children[0].children[1].innerHTML.split("<br>"));  
              //console.log(arr);
            }
            
            if (indeks === panjangNode-1) {
              nil.children[0].classList.add("black");
              nil.children[1].classList.add("black");

            }

            prev = nil.children[0].classList[0];
            prevElem = nil;
            
          });
          
      });
    });

  }
  
}

function clearTemplate(layout) {
  document.querySelector(layout).innerHTML = `<pre style="color : #0D98BA; font-family: 'Poppins', sans-serif;">Loading ......</pre>`; 
}

function clearLoading(layout) {
  document.querySelector(layout).innerHTML = ``; 
}


function getNowDate() {
  let d = new Date();
  let nowDate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  
  for (let k of document.querySelectorAll('.tgl')) {
    k.value = nowDate;
  }
}

function  getArrayData() {
  return arrayData;
}

function filterTheArray(arr, id) {
    let arrayToSend = [];

    for (let k of arr) {
      if (k[1] === parseInt(id)) {
        arrayToSend.push(k);
      }
    }
    return arrayToSend;    
}

function printFormulir() {

  let prtTombol = document.querySelectorAll('.printFormulir');
  for (let k of prtTombol) {
    k.addEventListener('click', async function() {
      let api = "";
      console.log(this.parentElement.parentElement.parentElement.classList[1]);
      /*
      switch(this.parentElement.parentElement.parentElement.classList[1]) {
        case 'k_tera':
          api = "https://sert.metrologi.ska:5005/buktidaftartera";
          break;

        case 'k_tuk':
          api = "https://sert.metrologi.ska:5005/buktidaftar";
          //api = "https://sert.metrologi.ska:5005/buktidaftarmassal"
          break;

        case 'k_spbu':
          api = "https://sert.metrologi.ska:5005/buktidaftarspbu";
          break;

        case 'k_loko':  
          api = "https://sert.metrologi.ska:5005/buktidaftarloko";
          break;
      }

      this.classList[1] === "mass" ? api = "https://sert.metrologi.ska:5005/buktidaftarmassal" : '';
      //console.log(api);
      */
      api = "https://sert.metrologi.ska:5005/formulirpendaftaran";

      let data = {"bukti_daftar" : filterTheArray(getArrayData(), this.id.replace("_",""))};
      console.log(data);
      
      let el = document.createElement("div");
      el.setAttribute("class", "alertCetakBukti");
      el.innerHTML = "Tunggu sebentar...Server sdg menyiapkan formulir pendaftaran";
      let tempElement = this.parentElement;
      tempElement.insertBefore(el, this);
      
      fetch(api,{
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      .then(result => result.json())
      .then(result => {
        
        fetch(api, {
          method : 'GET',
          headers : {
            "Accept" : "Application/octet-stream"
          }
        })
        .then(data => data.blob())
        .then(data => {
          //console.log(result['file']);
          const aElement = document.createElement("a");
          aElement.setAttribute("download", result['file']);
          const href = URL.createObjectURL(data);
          aElement.href = href;
          aElement.setAttribute("target", "_blank");
          aElement.click();
          URL.revokeObjectURL(href);
          el.innerHTML = "Proses download selesai";
          setTimeout(() => tempElement.removeChild(el), 500);
          
        });
  
      });
      
    });

  }
}


function printSKRD() {

  let prtTombol = document.querySelectorAll('.printSKRD');
  for (let k of prtTombol) {
    k.addEventListener('click', async function() {
      let api = "";
      console.log(this.parentElement.parentElement.parentElement.classList[1]);
      /*this.parentElement.parentElement.parentElement.classList[1] === "k_tera" ?
        api = "https://sert.metrologi.ska:5005/buktidaftartera" : api = "https://sert.metrologi.ska:5005/buktidaftar";
      */
      //console.log(this.classList);
      //return false;

      switch(this.parentElement.parentElement.parentElement.classList[1]) {
        case 'k_tera':
          api = "https://sert.metrologi.ska:5005/buktidaftartera";
          break;

        case 'k_tuk':
          api = "https://sert.metrologi.ska:5005/buktidaftar";
          //api = "https://sert.metrologi.ska:5005/buktidaftarmassal"
          break;

        case 'k_spbu':
          api = "https://sert.metrologi.ska:5005/buktidaftarspbu";
          break;

        case 'k_loko':  
          api = "https://sert.metrologi.ska:5005/buktidaftarloko";
          break;
      }

      this.classList[1] === "mass" ? api = "https://sert.metrologi.ska:5005/buktidaftarmassal" : '';
      //console.log(api);

      
      let data = {"bukti_daftar" : filterTheArray(getArrayData(), this.id)};
      console.log(data["bukti_daftar"][0][14]);
      let dropdown = this.parentElement.children[2].children[0].children[1].children[0].children[8].children[0];

      if (dropdown) {
        console.log(dropdown.selectedIndex);
        console.log(dropdown.options[dropdown.selectedIndex].text);

        if (data["bukti_daftar"][0][14] === "") {
          data["bukti_daftar"][0][14] = dropdown.options[dropdown.selectedIndex].text;
        }

      }

      console.log(data);

      //return;

      let el = document.createElement("div");

      el.setAttribute("class", "alertCetakBukti");
      el.innerHTML = "Tunggu sebentar...Server sdg menyiapkan bukti daftar";
      let tempElement = this.parentElement;
      tempElement.insertBefore(el, this);

      fetch(api,{
        method : 'POST',
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      })
      .then(result => result.json())
      .then(result => {
        
        fetch(api, {
          method : 'GET',
          headers : {
            "Accept" : "Application/octet-stream"
          }
        })
        .then(data => data.blob())
        .then(data => {
          //console.log(result['file']);
          const aElement = document.createElement("a");
          aElement.setAttribute("download", result['file']);
          const href = URL.createObjectURL(data);
          aElement.href = href;
          aElement.setAttribute("target", "_blank");
          aElement.click();
          URL.revokeObjectURL(href);
          el.innerHTML = "Proses download selesai";
          setTimeout(() => tempElement.removeChild(el), 500);
          
        });
  
      });
      
      /*
      console.log(filterTheArray(getArrayData(), this.id));
      //console.log(this.id);

      let el = document.createElement("div");
      el.setAttribute("class", "alertCetakBukti");
      el.innerHTML = "Tunggu sebentar...Sedang membuat bukti pendaftaran";
      this.parentElement.insertBefore(el, this);
      this.parentElement.removeChild(el);
      //seTimeout(() => this.parentElement.removeChild(el),2000);
      */
    });

  }
}

function closeSertDialog(el) {
  document.querySelector('.closeSertSpan').addEventListener('click', () => document.querySelector('body').removeChild(el));
}

function parsePenera(inisial) {
  let ar = inisial.split("-");

  return `${dataPeneraDetail[ar[0]]} - ${dataPeneraDetail[ar[1]]}`;
}

function parseTglTera(rawTgl) {
  const tglToText = (tgl) => {
    let bln = {"01" : "Januari","02" : "Februari","03" : "Maret","04" : "April","05" : "Mei","06" : "Juni","07" : "Juli","08" : "Agustus","09" : "September","10" : "Oktober","11" : "November","12" : "Desember"};

    return `${tgl[0]} ${bln[tgl[1]]} ${tgl[2]}`;
  }

  //console.log(rawTgl.split("T")[0].split("-").reverse());
  return tglToText(rawTgl.split("T")[0].split("-").reverse());
}

function serializedFormSertData() {
  let formData = new FormData(document.getElementById('sertForm'));
  let serializedData = {};

  for (let[name, value] of formData) {
    serializedData[name] = value;
  }

  return serializedData;   
}

function SertBtnClickedHandler() {
  let submitSert = document.getElementById('submitSert');
  submitSert.addEventListener('click', async function() {
    if (document.getElementById('nurut').value === "") {
      alert("Peringatan ! Pembuatan Sertifikat Gagal karena Nomor Urut Sertifikat Belum Diisi. Silahkan diisi dahulu");
      return false;
    }

    console.log(serializedFormSertData());
    
    let api = "https://sert.metrologi.ska:5005/sertifikat_tuk";

    document.getElementById("submitSert").value = `Processing...`;

    await fetch(api,{
      method : "POST",
      header : {
        "Content-Type" : "Application/json"
      },
      body : JSON.stringify(serializedFormSertData())
    })
    .then(result => result.json())
    .then(result => {
      console.log(result);

      fetch(api, {
        method : 'GET',
        headers : {
          "Accept" : "Application/octet-stream"
        }
      })
      .then(data => data.blob())
      .then(data => {
        //console.log(result['file']);
        const aElement = document.createElement("a");
        aElement.setAttribute("download", result['file']);
        const href = URL.createObjectURL(data);
        aElement.href = href;
        aElement.setAttribute("target", "_blank");
        aElement.click();
        URL.revokeObjectURL(href);
        //el.innerHTML = "Proses download selesai";
        //setTimeout(() => tempElement.removeChild(el), 500);
        document.getElementById("submitSert").value = `Buat Sertifikat`;
      });

    })

  });
}

function printSertifikat() {
  let sertTombol = document.querySelectorAll('.sertifikatBtn');

  for (let k of sertTombol) {
    k.addEventListener('click', function() {
      let j_tera = this.id.split("-")[2];
      let idx_penera = "";
      let buatan;
      let norder;
      j_tera === "tera" ? idx_penera = 15 : idx_penera = 14;
      j_tera === "tera" ? buatan = 14 : buatan = 13;
      j_tera === "spbu" ? norder = 17 : norder = 16;
      //console.log(getArrayData()[this.id.split("-")[1]]);
      console.log(getArrayData());
      let el = document.createElement("div");
      el.setAttribute("class", "sertContainer");
      document.querySelector('body').appendChild(el);
      let elSpan = document.createElement("span");
      elSpan.setAttribute("class", "closeSertSpan");
      elSpan.innerHTML = "X Close";
      el.appendChild(elSpan);
      let elHeader = document.createElement("h2");
      elHeader.setAttribute("class", "certHeader");
      elHeader.innerHTML = "Cek Kembali Data Sertifikat";

      let sertForm = document.createElement("form");
      sertForm.setAttribute("id","sertForm");

      let tableForm = document.createElement("table");
      tableForm.setAttribute("class","tableForm");
      let arrai = getArrayData()[this.id.split("-")[1]];
      let serialNum = "";
      j_tera === "tera" ? serialNum = `${arrai[10]} - ${arrai[10]+arrai[13]-1}` : serialNum = arrai[10];

      const objectUTTP = {
        "N" : "NERACA",
        "TS" : "TIMBANGAN SENTISIMAL",
        "TM" : "TIMBANGAN MEJA",
        "TE" : "TIMBANGAN ELEKTRONIK",
        "DL" : "DACIN LOGAM",
        "AT" : "ANAK TIMBANGAN",
        "TBI" : "TIMBANGAN BOBOT INGSUT",
        "TP" : "TIMBANGAN PEGAS",
        "TJE" : "TIMBANGAN JEMBATAN ELEKTRONIK",
        "PUBBM" : "POMPA UKUR BBM"
      };

      let nomor_order = "";

      if (arrai[norder].split("/").length === 6) {
        let arrFromNorder = arrai[norder].split("/");
        arrFromNorder.pop();
        nomor_order = arrFromNorder.join("/");
      } else {
        nomor_order = arrai[norder];
      }

      let utp = objectUTTP[arrai[6]];
      utp == "POMPA UKUR BBM" ? utp = `${utp} (${arrai[16]} ${arrai[15]})` : ''; 

      if (j_tera === "spbu") {
        let listOfNozz = this.parentElement.parentElement.children[1].innerHTML.split("<br>").join("\n");

        tableForm.innerHTML = `<tr><td>No Order</td><td><input type="text" class="inputSert hanyabaca" name="norder" id="norder" value="${nomor_order}" readonly></td></tr>
          <tr><td>Tanggal Peneraan</td><td><input type="text" class="inputSert hanyabaca" name="tglTera" id="tglTera" value="${parseTglTera(arrai[0])}" readonly></td></tr>
          <tr><td>WTU</td><td><input type="text" class="inputSert" name="wtu" id="wtu" value="${arrai[2]}"></td></tr>
          <tr><td>Alamat</td><td><input type="text" class="inputSert" name="almt" id="almt" value="${arrai[3]}"></td></tr>
          <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${arrai[6]} ${arrai[7]} / ${arrai[8]}"></td></tr>-->
          <tr><td>UTTP</td><td><textarea class="inputSert" id="utp" name="utp" rows="10" cols="33">${listOfNozz}</textarea></td></tr>
          <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${utp}"></td></tr>-->
          <tr><td>Kap / Dayabaca</td><td><input type="text" class="inputSert" name="kapDayabaca" id="kapDayabaca" value="${arrai[7]} / ${arrai[8]}"></td></tr>
          <tr><td>Merek</td><td><input type="text" class="inputSert" name="mrk" id="mrk" value="${arrai[9]}"></td></tr>
          <tr><td>Serial Number</td><td><input type="text" class="inputSert" name="srlnum" id="srlnum" value="${serialNum}"></td></tr>
          <tr><td>Model/Tipe</td><td><input type="text" class="inputSert" name="mdl" id="mdl" value="${arrai[11]}"></td></tr>
          <tr><td>Penera</td><td><input type="text" class="inputSert" name="pb" id="pb" value="${arrai[idx_penera].split("-").length < 2 ? dataPeneraDetail[arrai[idx_penera]] : parsePenera(arrai[idx_penera])}"></td></tr>
          <tr><td>Buatan</td><td><input type="text" class="inputSert" name="buatan" id="buatan" value="${arrai[buatan]}"></td></tr>
          <tr><td style="color : red;">No.Urut Sertifikat<br>[ wajib diisi ]</td><td><input type="text" class="inputSert" name="nurut" id="nurut" value=""></td></tr>
          <tr><td colspan=2 id="submitTd"><input type="button" name="submitSert" id="submitSert" value = "Buat Sertifikat"></tr>
          `;

      } else {
        tableForm.innerHTML = `<tr><td>No Order</td><td><input type="text" class="inputSert hanyabaca" name="norder" id="norder" value="${nomor_order}" readonly></td></tr>
          <tr><td>Tanggal Peneraan</td><td><input type="text" class="inputSert hanyabaca" name="tglTera" id="tglTera" value="${parseTglTera(arrai[0])}" readonly></td></tr>
          <tr><td>WTU</td><td><input type="text" class="inputSert" name="wtu" id="wtu" value="${arrai[2]}"></td></tr>
          <tr><td>Alamat</td><td><input type="text" class="inputSert" name="almt" id="almt" value="${arrai[3]}"></td></tr>
          <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${arrai[6]} ${arrai[7]} / ${arrai[8]}"></td></tr>-->
          <tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${utp}"></td></tr>
          <tr><td>Kap / Dayabaca</td><td><input type="text" class="inputSert" name="kapDayabaca" id="kapDayabaca" value="${arrai[7]} / ${arrai[8]}"></td></tr>
          <tr><td>Merek</td><td><input type="text" class="inputSert" name="mrk" id="mrk" value="${arrai[9]}"></td></tr>
          <tr><td>Serial Number</td><td><input type="text" class="inputSert" name="srlnum" id="srlnum" value="${serialNum}"></td></tr>
          <tr><td>Model/Tipe</td><td><input type="text" class="inputSert" name="mdl" id="mdl" value="${arrai[11]}"></td></tr>
          <tr><td>Penera</td><td><input type="text" class="inputSert" name="pb" id="pb" value="${arrai[idx_penera].split("-").length < 2 ? dataPeneraDetail[arrai[idx_penera]] : parsePenera(arrai[idx_penera])}"></td></tr>
          <tr><td>Buatan</td><td><input type="text" class="inputSert" name="buatan" id="buatan" value="${arrai[buatan]}"></td></tr>
          <tr><td style="color : red;">No.Urut Sertifikat<br>[ wajib diisi ]</td><td><input type="text" class="inputSert" name="nurut" id="nurut" value=""></td></tr>
          <tr><td colspan=2 id="submitTd"><input type="button" name="submitSert" id="submitSert" value = "Buat Sertifikat"></tr>
          `;

      }
      /*
      tableForm.innerHTML = `<tr><td>No Order</td><td><input type="text" class="inputSert hanyabaca" name="norder" id="norder" value="${nomor_order}" readonly></td></tr>
        <tr><td>Tanggal Peneraan</td><td><input type="text" class="inputSert hanyabaca" name="tglTera" id="tglTera" value="${parseTglTera(arrai[0])}" readonly></td></tr>
        <tr><td>WTU</td><td><input type="text" class="inputSert" name="wtu" id="wtu" value="${arrai[2]}"></td></tr>
        <tr><td>Alamat</td><td><input type="text" class="inputSert" name="almt" id="almt" value="${arrai[3]}"></td></tr>
        <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${arrai[6]} ${arrai[7]} / ${arrai[8]}"></td></tr>-->
        <tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${utp}"></td></tr>
        <tr><td>Kap / Dayabaca</td><td><input type="text" class="inputSert" name="kapDayabaca" id="kapDayabaca" value="${arrai[7]} / ${arrai[8]}"></td></tr>
        <tr><td>Merek</td><td><input type="text" class="inputSert" name="mrk" id="mrk" value="${arrai[9]}"></td></tr>
        <tr><td>Serial Number</td><td><input type="text" class="inputSert" name="srlnum" id="srlnum" value="${serialNum}"></td></tr>
        <tr><td>Model/Tipe</td><td><input type="text" class="inputSert" name="mdl" id="mdl" value="${arrai[11]}"></td></tr>
        <tr><td>Penera</td><td><input type="text" class="inputSert" name="pb" id="pb" value="${arrai[idx_penera].split("-").length < 2 ? dataPeneraDetail[arrai[idx_penera]] : parsePenera(arrai[idx_penera])}"></td></tr>
        <tr><td>Buatan</td><td><input type="text" class="inputSert" name="buatan" id="buatan" value="${arrai[buatan]}"></td></tr>
        <tr><td style="color : red;">No.Urut Sertifikat<br>[ wajib diisi ]</td><td><input type="text" class="inputSert" name="nurut" id="nurut" value=""></td></tr>
        <tr><td colspan=2 id="submitTd"><input type="button" name="submitSert" id="submitSert" value = "Buat Sertifikat"></tr>
        `;
      */

      el.appendChild(elHeader);
      el.appendChild(sertForm);
      document.getElementById("sertForm").appendChild(tableForm);

      SertBtnClickedHandler();  
      closeSertDialog(el);

    });
  }

}

let backToMain = document.getElementById('backToMain');
backToMain.addEventListener("click", () => {
  window.location.replace("/");
});

//console.log(await getPenera());

//chooseMenu();
let arrayData = [];
getNowDate();
changeDate();




