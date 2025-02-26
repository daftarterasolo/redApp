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
  
        if (data['jenisTera'] === "sidangwly") {
          url = "https://script.google.com/macros/s/AKfycbzIBuhSpSXpMRVeUGg4NTBqimmi6MbtIbTS5xu9vBwbzwIXzgM4iqZCO9ClyMnOXHJVmg/exec";
        }
  
        console.log(data['jenisTera']);
        console.log(url);
  
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
        
        if (data['jenisTera'] === "sidangwly") {
          url = "https://script.google.com/macros/s/AKfycbzIBuhSpSXpMRVeUGg4NTBqimmi6MbtIbTS5xu9vBwbzwIXzgM4iqZCO9ClyMnOXHJVmg/exec";
        }
  
        console.log(data['jenisTera']);
        console.log(url);
  
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
            "urlApi" : /*"https://script.google.com/macros/s/AKfycbxQ0Df1SBipq1v2wqkSlbxyQNjI3e2wcJr3wLKgRoiRiRsXBe4RgYOhIGx01gBUGRjJJw/exec",*/
            "https://script.google.com/macros/s/AKfycbxK5JTcPQ-ppis3ojx5TK62V-ZA5rp-g_xlCfNIFVGBpWwYTU-l5iu695Yv8hJH9hzxPg/exec",
            "layoutPos" : ".k_tuk",
            "jenisTera" : "tuk"
          },
          "tgl_tera" : {
            "urlApi" : /*"https://script.google.com/macros/s/AKfycby_EIGGqCHpnGBqshXzS1_cGZ_zMz1OgaWZVBX7bJCxlDCUm29tBC_du1PnEdohGkEMXw/exec",*/
            "https://script.google.com/macros/s/AKfycbwCGulZm-TAnm1VYkS3aGIWVSkmWSrHzwgietq75T7Wi-mh5tqUiGRAeAKVJbcqC5VvTw/exec",
            "layoutPos" : ".k_tera",
            "jenisTera" : "tera"          
          },
          "tgl_spbu" : {
            "urlApi" : "https://script.google.com/macros/s/AKfycbyDkQgrJbZvMQY86zOflYAYmC31DPEffdxFH3mutX6Gv0EFmJQotvEgVa7P1pnaijt87A/exec",
            "layoutPos" : ".k_spbu",
            "jenisTera" : "spbu"          
          },
          "tgl_loko" : {
            "urlApi" : /*"https://script.google.com/macros/s/AKfycbwASU7suSjjiAm2Fg_BJFqdRF03tOQ09V1ZvyBV-03NyTVj-UUrHPRa2HnPO3E_2Ti1Hw/exec",*/
            "https://script.google.com/macros/s/AKfycbw8r6li1QLuddRiFVaYNYQQV3VRsMJPcTzYNrvfNZ-TwUcWcTWECS7nQdjXj-pO1slNgw/exec",
            "layoutPos" : ".k_loko",
            "jenisTera" : "loko"          
          },
          "tgl_sidangwly" : {
            "urlApi" : /*"https://script.google.com/macros/s/AKfycbwOdMBRwhcGOUj1TbRbkdgOtgipunPyp3FcGgSQpqZ8dF_BjgsRVSAZcqmL2I6VuwOLJg/exec",*/
            "https://script.google.com/macros/s/AKfycbxl0LbXpQYD8bJiwl31GIAFqWz7nF4q4iQWsEXgI6qlhGVG7Izm-A0MV8fGLiLI92YgDw/exec",
            "layoutPos" : ".k_sidangwly",
            "jenisTera" : "sidangwly"          
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
                  
                  /*if (l.length === 18) {
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
                  }
                  else*/
                  if (l.length === 20) {
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
                  }

                  else {
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
    document.querySelector(layout).innerHTML = `<pre style="color : #FFFFFF; font-family: 'Poppins', sans-serif;">Loading ......</pre>`; 
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
  
        let jenisTera = this.parentElement.parentElement.parentElement.classList[1];
  
        this.classList[1] === "mass" ? api = "https://sert.metrologi.ska:5005/formulirpendaftaranmassal" : api = "https://sert.metrologi.ska:5005/formulirpendaftaran";
        
        jenisTera === "k_tera" ? api = "https://sert.metrologi.ska:5005/formulirpendaftarantera" : '';

        jenisTera === "k_sidangwly" ? api = "https://sert.metrologi.ska:5005/formulirpendaftaransdgwly" : '';
  
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
  
        switch(this.parentElement.parentElement.parentElement.classList[1]) {
          case 'k_tera':
            api = "https://sert.metrologi.ska:5005/buktidaftartera";
            break;
  
          case 'k_tuk':
            api = "https://sert.metrologi.ska:5005/buktidaftar";
            let peneraOption = this.parentElement.children[2].children[0].children[1].children[0].children[8].children[0];
            if (peneraOption && peneraOption.options[peneraOption.selectedIndex].text === "") {
              alert("Penera belum diisi, Silahkan isi inisial penera dahulu.");
              return;
            }
            //api = "https://sert.metrologi.ska:5005/buktidaftarmassal"
  
            break;
  
          case 'k_spbu':
            api = "https://sert.metrologi.ska:5005/buktidaftarspbu";
            break;
  
          case 'k_loko':  
            api = "https://sert.metrologi.ska:5005/buktidaftarloko";
            break;

          case 'k_sidangwly':
            api = "https://sert.metrologi.ska:5005/buktidaftarsidangwly";
            /*
            if (peneraOption && peneraOption.options[peneraOption.selectedIndex].text === "") {
              alert("Penera belum diisi, Silahkan isi inisial penera dahulu.");
              return;
            }
            */
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
        
    const objectUTTP = {
      "N" : "NERACA",
      "TS" : "TIMBANGAN SENTISIMAL",
      "TM" : "TIMBANGAN MEJA",
      "TE" : "TIMBANGAN ELEKTRONIK",
      "DL" : "DACIN LOGAM",
      /*"AT" : "ANAK TIMBANGAN",*/
      "TBI" : "TIMBANGAN BOBOT INGSUT",
      "TP" : "TIMBANGAN PEGAS",
      "TJE" : "TIMBANGAN JEMBATAN ELEKTRONIK",
      "PUBBM" : "POMPA UKUR BBM",
      "MP" : "METER PARKIR",
      "ATB" : "ANAK TIMBANGAN KASAR",
      "ATH" : "ANAK TIMBANGAN HALUS",
      "TC" : "TIMBANGAN CEPAT"
    };
    
    console.log(formData);

    for (let[name, value] of formData) {
      name === "utp2" ? serializedData['utp'] = value : name === "utp" ? serializedData[name] = objectUTTP[value] : serializedData[name] = value;
      
    }
  
    return serializedData;   
  }
  
  function editBtnClickHandler() {
    let editBtn = document.getElementById("submitEdit");
    editBtn.addEventListener('click', async () => {
      editBtn.value = "Sedang proses mengubah data...";
      editBtn.style.backgroundColor = "#000000";
      editBtn.style.borderColor = "#BB0606";

      const formData = new FormData(document.getElementById("sertForm"));
      
      let n_order = formData.get('norder').split("/");
      let jenisTera = "";

      switch(n_order.length) {
        case 4:
          jenisTera = "tera";
          break;

        default:
          const jenisTeraKonversi = {
            'TUK' : 'tuk',
            'LOKO' : 'loko',
            'SDG_WLY' : 'sidangwly',
            'TULK' : 'spbu' 
          }

          jenisTera = jenisTeraKonversi[n_order[2]];                      
      }

      formData.append('jenisTera', jenisTera);
      formData.append('token',sessionStorage.getItem('key')); 
      console.log(formData);

      switch(formData.get('qrcode')) {
        case '':
          console.log('kirim data');
          let url = "https://script.google.com/macros/s/AKfycbz9_oI5FDrMNk1jdpZ4jtdxsxq5m-Dj_1dQaxKifUIJ1wSBMbOD5vQhwphJ2s4bz0xPAw/exec";
          await fetch(url,{
            method : 'POST',
            body : formData
          });

          console.log('qrcode kosong');
          break;
        default: 
          console.log(`qrcode : ${formData.get('qrcode')}`)
      }


    });
  }

  function batalBtnClickHandler() {
    let batalBtn = document.getElementById('submitBatal');
    batalBtn.addEventListener('click', async () => {
      batalBtn.value = "Sedang memproses pembatalan...";
      batalBtn.style.backgroundColor = "#000000";
      batalBtn.style.borderColor = "#FF5F01";
      
      const formData = new FormData(document.getElementById("sertForm"));

      let n_order = formData.get('norder').split("/");
      let jenisTera = "";

      if (n_order.length <= 4) {
        jenisTera = "tera";
      } else {

        const jenisTeraKonversi = {
          'TUK' : 'tuk',
          'LOKO' : 'loko',
          'SDG_WLY' : 'sidangwly',
          'TULK' : 'spbu' 
        }

        jenisTera = jenisTeraKonversi[n_order[2]];
      }

      const dataPembatalan = {
        'jenisTera' : jenisTera,
        'barisYgDihapus' : formData.get('baris'),
        'authData' : {
              'token' : sessionStorage.getItem('key') 
        }
      };

      let api = "https://script.google.com/macros/s/AKfycbw-yR-D2qqo7LWIDLh5TglR6aCYWPBWEq5f3W13IIX1i4cdkkk3lRIde3zODSrYo52xJg/exec";

      await fetch(api,{
        method : "POST",
        header : {
          "Content-Type" : "Application/json"
        },
        body : JSON.stringify(dataPembatalan)
      })
      .then(result => result.json())
      .then(result => {
        batalBtn.value = "Batalkan";
        batalBtn.style.backgroundColor = "#FF5F01";
        batalBtn.style.borderColor = "#000000";
        alert(result.message);

      });
      
    });
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
        let jml;
        j_tera === "tera" ? idx_penera = 15 : idx_penera = 14;
        j_tera === "tera" ? buatan = 14 : buatan = 13;
        j_tera === "spbu" ? norder = 17 : norder = 16;
        j_tera === "tera" ? jml = 13 : jml = 12; 
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
        j_tera === "tera" ? serialNum = `${arrai[11]}${arrai[10]} - ${arrai[11]}${arrai[10]+arrai[13]-1}` : serialNum = arrai[10];
  
        const objectUTTP = {
          "N" : "NERACA",
          "TS" : "TIMBANGAN SENTISIMAL",
          "TM" : "TIMBANGAN MEJA",
          "TE" : "TIMBANGAN ELEKTRONIK",
          "DL" : "DACIN LOGAM",
          /*"AT" : "ANAK TIMBANGAN",*/
          "TBI" : "TIMBANGAN BOBOT INGSUT",
          "TP" : "TIMBANGAN PEGAS",
          "TJE" : "TIMBANGAN JEMBATAN ELEKTRONIK",
          "PUBBM" : "POMPA UKUR BBM",
          "MP" : "METER PARKIR",
          "ATB" : "ANAK TIMBANGAN KASAR",
          "ATH" : "ANAK TIMBANGAN HALUS",
          "TC" : "TIMBANGAN CEPAT"
        };
  
        const objectUTTPReverse = {
          "NERACA" : "N",
          "TIMBANGAN SENTISIMAL" : "TS",
          "TIMBANGAN MEJA" : "TM",
          "TIMBANGAN ELEKTRONIK" : "TE",
          "DACIN LOGAM" : "DL",
          /*"ANAK TIMBANGAN" : "AT",*/
          "TIMBANGAN BOBOT INGSUT" : "TBI",
          "TIMBANGAN PEGAS" : "TP",
          "TIMBANGAN JEMBATAN ELEKTRONIK" : "TJE",
          "POMPA UKUR BBM" : "PUBBM",
          "METER PARKIR" : "MP",
          "ANAK TIMBANGAN KASAR" : "ATB",
          "ANAK TIMBANGAN HALUS" : "ATH",
          "TIMBANGAN CEPAT" : "TC"
        };
  
        const objectUTTPReverseDetails = {
          "NERACA" : ["1000 g / 500 mg","500 g / 250 mg","250 g / 125 mg","100 g / 50 mg","50 g / 25 mg"],
          "TIMBANGAN SENTISIMAL" : ["500 kg / 200 g","300 kg / 100 g","150 kg / 100 g"],
          "TIMBANGAN MEJA" : ["10 kg / 10 g","25 kg / 25 g","5 kg / 5 g","3 kg / 3 g"],        
          "DACIN LOGAM" : ["110 kg / 100 g","50 kg / 100 g","25 kg / 100 g"],
          "TIMBANGAN BOBOT INGSUT" : ["520 kg / 200 g","310 kg / 100 g","150 kg / 50 g","50 kg / 10 g"],
          "TIMBANGAN PEGAS" : ["100 kg / 500 g","50 kg / 200 g","30 kg / 100 g","25 kg / 100 g","20 kg / 100 g","15 kg / 50 g","2 kg / 10 g"]
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
        
        console.log(j_tera);

        if (j_tera === "spbu") {
          //console.log(`ini adalah ${this.parentElement.parentElement.children[1].innerHTML}`);
          let listOfNozz = this.parentElement.parentElement.children[1].innerHTML.split("<br>").join("\n");
          console.log(listOfNozz);
  
          tableForm.innerHTML = `<tr><td>No Order</td><td><input type="text" class="inputSert hanyabaca" name="norder" id="norder" value="${nomor_order}" readonly></td></tr>
            <tr><td>Tanggal Peneraan</td><td><input type="text" class="inputSert hanyabaca" name="tglTera" id="tglTera" value="${parseTglTera(arrai[0])}" readonly></td></tr>
            <tr><td>WTU</td><td><input type="text" class="inputSert" name="wtu" id="wtu" value="${arrai[2]}"></td></tr>
            <tr><td>Alamat</td><td><input type="text" class="inputSert" name="almt" id="almt" value="${arrai[3]}"></td></tr>
            <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${arrai[6]} ${arrai[7]} / ${arrai[8]}"></td></tr>-->
            <tr><td>UTTP</td><td><textarea class="inputSert" id="utp2" name="utp2" rows="10" cols="33">${listOfNozz}</textarea></td></tr>
            <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp2" id="utp2" value="${utp}"></td></tr>-->
            <tr><td>Kap / Dayabaca</td><td><input type="text" class="inputSert" name="kapDayabaca" id="kapDayabaca" value="${arrai[7]} / ${arrai[8]}"></td></tr>
            <tr><td>Merek</td><td><input type="text" class="inputSert" name="mrk" id="mrk" value="${arrai[9]}"></td></tr>
            <tr><td>Serial Number</td><td><input type="text" class="inputSert" name="srlnum" id="srlnum" value="${serialNum}"></td></tr>
            <tr><td>Model/Tipe</td><td><input type="text" class="inputSert" name="mdl" id="mdl" value="${arrai[11]}"></td></tr>
            <tr><td>Penera</td><td><input type="text" class="inputSert" name="pb" id="pb" value="${arrai[idx_penera].split("-").length < 2 ? dataPeneraDetail[arrai[idx_penera]] : parsePenera(arrai[idx_penera])}"></td></tr>
            <tr><td>Buatan</td><td><input type="text" class="inputSert" name="buatan" id="buatan" value="${arrai[buatan]}"></td></tr>
            <tr><td style="color : darkgreen;">Penandatangan<br>[ wajib diisi ]</td><td><select class="inputSert" name="ttd" id="ttd"><option value="kepala">Ka UPTD Metrologi</option><option value="kepala_tte">Ka UPTD Metrologi TTE</option><option value="kasubag">Ka Subbag TU</option></select></td></tr>         
            <tr><td style="color : red;">No.Urut Sertifikat<br>[ wajib diisi ]</td><td><input type="text" class="inputSert" name="nurut" id="nurut" value=""></td></tr>
            <tr><td colspan=2 id="submitTd"><input type="button" name="submitSert" id="submitSert" value = "Buat Sertifikat">&nbsp;<input type="button" name="submitEdit" id="submitEdit" value = "Ubah Data">&nbsp;<!--<input type="button" name="submitDel" id="submitDel" value = "Hapus">&nbsp;--><input type="button" name="submitBatal" id="submitBatal" value = "Batalkan"></tr>
            `;
  
        }
        if (j_tera === 'tera') {
          let str = ``;
          tableForm.innerHTML = `<tr><td>No Order</td><td><input type="text" class="inputSert hanyabaca" name="norder" id="norder" value="${nomor_order}" readonly></td></tr>
            <tr><td>Tanggal Peneraan</td><td><input type="text" class="inputSert hanyabaca" name="tglTera" id="tglTera" value="${parseTglTera(arrai[0])}" readonly></td></tr>
            <tr><td>WTU</td><td><input type="text" class="inputSert" name="wtu" id="wtu" value="${arrai[2]}"></td></tr>
            <tr><td>Alamat</td><td><input type="text" class="inputSert" name="almt" id="almt" value="${arrai[3]}"></td></tr>
            <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${arrai[6]} ${arrai[7]} / ${arrai[8]}"></td></tr>-->
            <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${utp}"></td></tr>-->
            <tr><td>UTTP</td><td><select class="inputSert" name="utp" id="utp">
            ${ Object.entries(objectUTTPReverse).reduce((acc, [key,val]) => acc + `<option value="${val}">${key}</option>`,``)} 
            </select></td></tr>
            <tr><td>Kap / Dayabaca</td><td><input type="text" class="inputSert" name="kapDayabaca" id="kapDayabaca" value="${arrai[7]} / ${arrai[8]}"></td></tr>
            <tr><td>Merek</td><td><input type="text" class="inputSert" name="mrk" id="mrk" value="${arrai[9]}"></td></tr>
            <tr><td>Jumlah</td><td><input type="text" class="inputSert" name="jml" id="jml" value="${arrai[jml]}"></td></tr>
            <tr><td>Serial Awal</td><td><input type="text" class="inputSert" name="srlAwal" id="srlAwal" value="${arrai[10]}"></td></tr>
            <tr><td>Teks Nomor Seri</td><td><input type="text" class="inputSert" name="txtSeri" id="txtSeri" value="${arrai[11]}"></td></tr>
            <tr><td>Serial Number</td><td><input type="text" class="inputSert hanyabaca" name="srlnum" id="srlnum" value="${serialNum}" readonly></td></tr>
            <tr><td>Model/Tipe</td><td><input type="text" class="inputSert" name="mdl" id="mdl" value="${arrai[12]}"></td></tr>
            <tr><td>Penera</td><td><input type="text" class="inputSert" name="pb" id="pb" value="${arrai[idx_penera].split("-").length < 2 ? dataPeneraDetail[arrai[idx_penera]] : parsePenera(arrai[idx_penera])}"></td></tr>
            <tr><td>Buatan</td><td><input type="text" class="inputSert" name="buatan" id="buatan" value="${arrai[buatan]}"></td></tr>
            <tr><td>QRCODE (Jika ada)</td><td><input type="text" class="inputSert" name="qrcode" id="qrcode" value="${arrai[19]}"></td></tr>
            <tr><td style="color : darkgreen;">Penandatangan<br>[ wajib diisi ]</td><td><select class="inputSert" name="ttd" id="ttd"><option value="kepala">Ka UPTD Metrologi</option><option value="kepala_tte">Ka UPTD Metrologi TTE</option><option value="kasubag">Ka Subbag TU</option></select></td></tr>         
            <tr><td style="color : red;">No.Urut Sertifikat<br>[ wajib diisi ]</td><td><input type="text" class="inputSert" name="nurut" id="nurut" value=""></td></tr>
            <tr><td>Nomor Baris</td><td><input type="text" class="inputSert" name="baris" id="baris" value="${arrai[17]}"></td></tr>
            <tr><td colspan=2 id="submitTd"><input type="button" name="submitSert" id="submitSert" value = "Buat Sertifikat">&nbsp;<input type="button" name="submitEdit" id="submitEdit" value = "Ubah Data">&nbsp;<!--<input type="button" name="submitDel" id="submitDel" value = "Hapus">&nbsp;--><input type="button" name="submitBatal" id="submitBatal" value = "Batalkan"></tr>
            `;

        } 
        if (j_tera !== 'spbu' && j_tera !== 'tera') {
          let str = ``;
          tableForm.innerHTML = `<tr><td>No Order</td><td><input type="text" class="inputSert hanyabaca" name="norder" id="norder" value="${nomor_order}" readonly></td></tr>
            <tr><td>Tanggal Peneraan</td><td><input type="text" class="inputSert hanyabaca" name="tglTera" id="tglTera" value="${parseTglTera(arrai[0])}" readonly></td></tr>
            <tr><td>WTU</td><td><input type="text" class="inputSert" name="wtu" id="wtu" value="${arrai[2]}"></td></tr>
            <tr><td>Alamat</td><td><input type="text" class="inputSert" name="almt" id="almt" value="${arrai[3]}"></td></tr>
            <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${arrai[6]} ${arrai[7]} / ${arrai[8]}"></td></tr>-->
            <!--<tr><td>UTTP</td><td><input type="text" class="inputSert" name="utp" id="utp" value="${utp}"></td></tr>-->
            <tr><td>UTTP</td><td><select class="inputSert" name="utp" id="utp">
            ${ Object.entries(objectUTTPReverse).reduce((acc, [key,val]) => acc + `<option value="${val}">${key}</option>`,``)} 
            </select></td></tr>
            <tr><td>Kap / Dayabaca</td><td><input type="text" class="inputSert" name="kapDayabaca" id="kapDayabaca" value="${arrai[7]} / ${arrai[8]}"></td></tr>
            <tr><td>Merek</td><td><input type="text" class="inputSert" name="mrk" id="mrk" value="${arrai[9]}"></td></tr>
            <tr><td>Jumlah</td><td><input type="text" class="inputSert" name="jml" id="jml" value="${arrai[jml]}"></td></tr>
            <tr><td>Serial Number</td><td><input type="text" class="inputSert" name="srlnum" id="srlnum" value="${serialNum}"></td></tr>
            <tr><td>Model/Tipe</td><td><input type="text" class="inputSert" name="mdl" id="mdl" value="${arrai[11]}"></td></tr>
            <tr><td>Penera</td><td><input type="text" class="inputSert" name="pb" id="pb" value="${arrai[idx_penera].split("-").length < 2 ? dataPeneraDetail[arrai[idx_penera]] : parsePenera(arrai[idx_penera])}"></td></tr>
            <tr><td>Buatan</td><td><input type="text" class="inputSert" name="buatan" id="buatan" value="${arrai[buatan]}"></td></tr>
            <tr><td>QRCODE (Jika ada)</td><td><input type="text" class="inputSert" name="qrcode" id="qrcode" value="${arrai[19]}"></td></tr>
            <tr><td style="color : darkgreen;">Penandatangan<br>[ wajib diisi ]</td><td><select class="inputSert" name="ttd" id="ttd"><option value="kepala">Ka UPTD Metrologi</option><option value="kepala_tte">Ka UPTD Metrologi TTE</option><option value="kasubag">Ka Subbag TU</option></select></td></tr>         
            <tr><td style="color : red;">No.Urut Sertifikat<br>[ wajib diisi ]</td><td><input type="text" class="inputSert" name="nurut" id="nurut" value=""></td></tr>
            <tr><td>Nomor Baris</td><td><input type="text" class="inputSert" name="baris" id="baris" value="${arrai[17]}"></td></tr>
            <tr><td colspan=2 id="submitTd"><input type="button" name="submitSert" id="submitSert" value = "Buat Sertifikat">&nbsp;<input type="button" name="submitEdit" id="submitEdit" value = "Ubah Data">&nbsp;<!--<input type="button" name="submitDel" id="submitDel" value = "Hapus">&nbsp;--><input type="button" name="submitBatal" id="submitBatal" value = "Batalkan"></tr>
            `;
  
        }
  
        el.appendChild(elHeader);
        el.appendChild(sertForm);
        document.getElementById("sertForm").appendChild(tableForm);
        j_tera !== "spbu" ? document.getElementById("utp").value = objectUTTPReverse[utp] : '';

        if (j_tera !== "spbu") {
          (function changeUttpHandler() {
            let originalUttp = document.getElementById("utp").options[document.getElementById("utp").selectedIndex].text;
            document.getElementById("utp").addEventListener("change", () => {
              let pilihKapDiv = document.createElement("div");
              pilihKapDiv.setAttribute("id","pilihKapDiv");   
              pilihKapDiv.style.position = "fixed";
              pilihKapDiv.style.top = "20%";
              pilihKapDiv.style.left = "25%";
              pilihKapDiv.style.width = "30%";
              pilihKapDiv.style.height = "auto";
              pilihKapDiv.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Transparan gelap
              pilihKapDiv.style.zIndex = "9999"; // Pastikan di atas semua elemen lain
              pilihKapDiv.style.pointerEvents = "auto"; // Aktifkan overlay untuk klik  
              pilihKapDiv.style.paddingBottom = "14px";   
    
              let choosenUttp = document.getElementById("utp").options[document.getElementById("utp").selectedIndex].text;
              pilihKapDiv.innerHTML = `<span class="closeListSpan">X Close This Dialog</span>`;
              if (objectUTTPReverseDetails[document.getElementById("utp").options[document.getElementById("utp").selectedIndex].text]) { 
                pilihKapDiv.innerHTML += `<h3 class="headerList">Pilih Kapasitas dan Dayabaca ${choosenUttp}-nya ... </h3>`;
                pilihKapDiv.innerHTML += `<ul>${ objectUTTPReverseDetails[document.getElementById("utp").options[document.getElementById("utp").selectedIndex].text].reduce((acc,nilai) => acc + `<li><a class="list_href" id="${nilai}" href=#>${objectUTTPReverse[choosenUttp]} ${nilai}</a></li>`,`<li hidden><a class="originalVal" id="${originalUttp}" href=#></a></li>`) }</ul>`;

              } else {
                pilihKapDiv.innerHTML += `<h3 class="headerList">Isi Kapasitas dan Dayabaca ${choosenUttp}-nya ... </h3>`;  
                pilihKapDiv.innerHTML += `<input type="hidden" class="originalVal" id="${originalUttp}" value="${originalUttp}">`;
                pilihKapDiv.innerHTML += `<table width="100%">
                                          <tr><td>Kapasitas</td><td><input type="text" name="new_kap" id="new_kap"></td></tr>
                                          <tr><td>Dayabaca</td><td><input type="text" name="new_d" id="new_d"></td></tr>
                                          </table>`;
                pilihKapDiv.innerHTML += `<br><br><button class="button-52" role="button" id="set">SUBMIT</button>`;
                
              }
    
              document.body.appendChild(pilihKapDiv);
    
              // Matikan interaksi dengan background
              document.body.style.pointerEvents = "none";
              pilihKapDiv.style.pointerEvents = "auto"; // Overlay tetap bisa diklik
    
              // Matikan scroll
              document.body.style.overflow = "hidden";     
    
              (function tutupDialog() {

                document.querySelector(".closeListSpan").addEventListener('click', () => {
                  document.getElementById("utp").value = objectUTTPReverse[document.querySelector(".originalVal").id];
                  document.getElementById("pilihKapDiv").remove();
                  document.body.style.pointerEvents = "auto";
                  document.body.style.overflow = "auto";  
                });
                  
              })();    
              
              (function list_hrefClickHandler() {

                document.querySelectorAll(".list_href").forEach(function(elem) {
                  elem.addEventListener('click', function() {
                    //console.log(this.id);
                    document.getElementById("kapDayabaca").value = this.id;
                    document.getElementById("pilihKapDiv").remove();
                    document.body.style.pointerEvents = "auto";
                    document.body.style.overflow = "auto";  
  
                  });
                });
                
              })();

              (function submitBtnHandler() {
                document.getElementById("set").addEventListener('click', () => {
                  document.getElementById("kapDayabaca").value = `${document.getElementById("new_kap").value} / ${document.getElementById("new_d").value}`;
                  document.getElementById("pilihKapDiv").remove();
                  document.body.style.pointerEvents = "auto";
                  document.body.style.overflow = "auto";  
                });
              })();
                  
            });
          })();
          
        }
    
        if (j_tera === "tera") {
          (function changeJmlHandler() {
            let jml_existing = Number(document.getElementById("jml").value);
            document.getElementById("jml").addEventListener('keyup',() => {
              let jml_now = Number(document.getElementById("jml").value);
              let serial_awal = Number(document.getElementById("srlAwal").value);
              let text_serial = document.getElementById("txtSeri").value;

              document.getElementById("srlnum").value = `${text_serial}${serial_awal} - ${text_serial}${serial_awal+jml_now-1}`;
            });
          })();

          (function seriAwalHandler() {
            let seriAwal_existing = Number(document.getElementById("srlAwal").value);
            document.getElementById("srlAwal").addEventListener('keyup',() => {
              let jml = Number(document.getElementById("jml").value);
              let serial_awal_now = Number(document.getElementById("srlAwal").value);
              let text_serial = document.getElementById("txtSeri").value;

              document.getElementById("srlnum").value = `${text_serial}${serial_awal_now} - ${text_serial}${serial_awal_now+jml-1}`;
            });
          })();

          (function txtSerialHandler() {
            let txtSerial_existing = Number(document.getElementById("txtSeri").value);
            document.getElementById("txtSeri").addEventListener('keyup',() => {
              let jml = Number(document.getElementById("jml").value);
              let serial_awal = Number(document.getElementById("srlAwal").value);
              let text_serial_now = document.getElementById("txtSeri").value;

              document.getElementById("srlnum").value = `${text_serial_now}${serial_awal} - ${text_serial_now}${serial_awal+jml-1}`;
            });
          })();

          /*
          (function changeJmlHandler() {
            let jml_existing = Number(document.getElementById("jml").value);
            let seri_awal = Number(document.getElementById("srlAwal").value);
            let txt_noseri_awal = document.getElementById("txtSeri").value;

            document.getElementById("jml").addEventListener("blur", () => {
              //alert("jml berubah");
              if (jml_existing === Number(document.getElementById("jml").value)) {
                return;
              }

              let changeSeriAwalDiv = document.createElement("div");
              changeSeriAwalDiv.setAttribute("id","changeSeriAwalDiv");   
              changeSeriAwalDiv.style.position = "fixed";
              changeSeriAwalDiv.style.top = "20%";
              changeSeriAwalDiv.style.left = "25%";
              changeSeriAwalDiv.style.width = "50vw";
              changeSeriAwalDiv.style.height = "50vh";
              changeSeriAwalDiv.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Transparan gelap
              changeSeriAwalDiv.style.zIndex = "9999"; // Pastikan di atas semua elemen lain
              changeSeriAwalDiv.style.pointerEvents = "auto"; // Aktifkan overlay untuk klik    

              changeSeriAwalDiv.innerHTML = `<span class="closeListSpan">X Close This Dialog</span>` 
              changeSeriAwalDiv.innerHTML += `<h3 class="headerList">Anda telah mengubah jumlah uttp, apakah nomor seri awal dan teks nomor serinya juga berubah? </h3>`;
              changeSeriAwalDiv.innerHTML += `
              <form id="ubahJmlForm">
                <table>
                  <tr><td colspan=2><input type="button" name="ya" id="ya" value = "Iya">&nbsp;<input type="button" name="tdk" id="tdk" value = "Tidak"></td></tr>
                  <tr class="sembunyikan id="penjelasan"><td colspan=2>Jika iya, silahkan mengisi NOmor Seri Awal yang baru dan Text Nomor Seri yang baru di bawah ini</td></tr>
                  <tr class="sembunyikan"><td>Nomor Seri Awal Baru</td><td><input type="text" name="s_a" id="s_a" value="${seri_awal}"></td></tr>
                  <tr class="sembunyikan"><td>Text Nomor Seri Baru</td><td><input type="text" name="t_n" id="t_n" value="${txt_noseri_awal}"></td></tr>
                </table>
              </form>
              `;

              document.body.appendChild(changeSeriAwalDiv);
    
              // Matikan interaksi dengan background
              document.body.style.pointerEvents = "none";
              changeSeriAwalDiv.style.pointerEvents = "auto"; // Overlay tetap bisa diklik
    
              // Matikan scroll
              document.body.style.overflow = "hidden";     

              (function iyaHandler() {
                document.getElementById("ya").addEventListener('click', () => {
                  document.querySelector(".sembunyikan").style.display = "block";
                });
              })();

              (function tutupDialog() {
                document.querySelector(".closeListSpan").addEventListener('click', () => {
                  document.getElementById("changeSeriAwalDiv").remove();
                  document.body.style.pointerEvents = "auto";
                  document.body.style.overflow = "auto";  
              });
              })();     
              
            });

          })();
          */
        }

        SertBtnClickedHandler();  
        batalBtnClickHandler();
        editBtnClickHandler();
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
  
  
  
  
  