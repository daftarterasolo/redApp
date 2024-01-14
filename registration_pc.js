/*class loadRegisterData {
    constructor() {
      if (this.constructor === "loadRegisterData") {
          throw new Error("Object cannot be made..");
      }  
    }
}

class loadRegisterDataTuk extends loadRegisterData {
  constructor() {
    super(constructor);
  }  
}
*/

function detailItem(arr, jenisTera, iter) {
  let detailStr = ``;
  let uttp = ``;
  let arrLabel = [];

  let i = 0;
  detailStr += `<table class="wadah">`;
  
  console.log(arr);
  detailStr += `<thead><tr><td>WTU</td><td>Alamat</td><td>UTTP</td><td>Merek</td><td>SN</td><td>Tipe</td><td>Jml</td><td>Buatan</td><td>Penera</td></tr></thead>`;
  detailStr += `<tbody><tr><td>${arr[2]}</td><td>${arr[3]}</td><td>${arr[6]} / ${arr[7]} / ${arr[8]}</td><td>${arr[9]}</td><td>${arr[10]}</td><td>${arr[11]}</td><td>${arr[12]}</td><td>${arr[13]}</td></tr></tbody>`;
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


function changeDate() {
  let tgl = document.querySelectorAll('.tgl');

  for (let k of tgl) {
    k.addEventListener("change", async () => {
      //console.log(k.id);

      let obj = {
        "tgl_tuk" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbwOdKdXcTkSTcFlBRW_KjdQdvMs3OdGwbXpeDe3KjcgYTFTwbaj3niE8BEE8QOoWG3WzA/exec",
          "layoutPos" : ".k_tuk",
          "jenisTera" : "tuk"
        },
        "tgl_tera" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbwwcsuTOwtj-SNAvZRXIQXXS2aBHN44D-d7oGiZ2WC-8BpNgY8K3mMEU5p5H2_RcF8Hww/exec",
          "layoutPos" : ".k_tera",
          "jenisTera" : "tera"          
        },
        "tgl_spbu" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbx-SWs7QFx19uB_dHVsrUK8Wwiu_W_2kKLYcFt5JJpjcDcruUEMvXMJsVljRfWIllcnKw/exec",
          "layoutPos" : ".k_spbu",
          "jenisTera" : "spbu"          
        },
        "tgl_loko" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbyLm3QRkA7sYj-KZC_CSK5NB4YXibuZLjFUymU3_GOe6cviUYZCp0QTr1E4qk-dNUZa/exec",
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
            for (let l of e.data) {
              //console.log(l);
              if (l[1] !== lastOrder) {
                str += `</div></div>`;
                
                if (l.length === 18) {
                  str += `<div class="item"><div class="inner">Nomor Order : ${l[17]}<div class="innerOfInner">${detailItem(l, obj[k.id]["jenisTera"], iterator)}</div>`;
                } else {
                  str += `<div class="item"><div class="inner">Nomor Order : ${l[16]}<div class="innerOfInner">${detailItem(l, obj[k.id]["jenisTera"], iterator)}</div>`;                  
                }
                
                //str += `<div class="item"><div class="inner">Nomor Order : ${l[16]}<div class="innerOfInner">${detailItem(l, obj[k.id]["jenisTera"], iterator)}</div>`;
              } else {
                str += `<div class="innerOfInner">${detailItem(l, obj[k.id]["jenisTera"], iterator)}</div>`;
              }

              lastOrder = l[1];
              iterator++;
            }
          } else {
            return;
          }
          //console.log(str);
          document.querySelector(obj[k.id]["layoutPos"]).innerHTML = str; 
      });
    });

  }
}

function clearTemplate(layout) {
  document.querySelector(layout).innerHTML = `<pre style="color : #0D98BA; font-family: 'Poppins', sans-serif;">Loading ......</pre>`; 
}

function getNowDate() {
  let d = new Date();
  let nowDate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  
  for (let k of document.querySelectorAll('.tgl')) {
    k.value = nowDate;
  }
}

function chooseMenu() {
  let tab = document.querySelectorAll(".tablink");

  for (let tb of tab) {
    tb.addEventListener("click", async () => {
   
      let obj = {
        "defaultOpen" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbwOdKdXcTkSTcFlBRW_KjdQdvMs3OdGwbXpeDe3KjcgYTFTwbaj3niE8BEE8QOoWG3WzA/exec",
          "layoutPos" : ".k_tuk"
        },
        "tabTera" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbwwcsuTOwtj-SNAvZRXIQXXS2aBHN44D-d7oGiZ2WC-8BpNgY8K3mMEU5p5H2_RcF8Hww/exec",
          "layoutPos" : ".k_tera"          
        },
        "tabSpbu" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbx-SWs7QFx19uB_dHVsrUK8Wwiu_W_2kKLYcFt5JJpjcDcruUEMvXMJsVljRfWIllcnKw/exec",
          "layoutPos" : ".k_spbu"          
        },
        "tabLoko" : {
          "urlApi" : "https://script.google.com/macros/s/AKfycbyLm3QRkA7sYj-KZC_CSK5NB4YXibuZLjFUymU3_GOe6cviUYZCp0QTr1E4qk-dNUZa/exec",
          "layoutPos" : ".k_loko"          
        }        
      };

      const urlApi = obj[tb.id]["urlApi"];

      let d = new Date();
      let nowDate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;

      //console.log(urlApi);

      const postData = {
        'tanggal' : nowDate,
        'authData' : {
              'token' : sessionStorage.getItem('key') 
        }
      };

      clearTemplate(obj[tb.id]["layoutPos"]);

      await fetch(urlApi, {
          method : 'POST',
          body : JSON.stringify(postData) 
      })
      .then(e => e.json())
      .then(e => {
          let str = '';
          if (e.result !== "error") {
            let lastOrder = 0;
            let iterator = 0
            for (let l of e.data) {
              //console.log(l);
              if (l[1] !== lastOrder) {
                str += `</div></div>`;
                if (l.length === 18) {
                  str += `<div class="item"><div class="inner">Nomor Order : ${l[17]}<div class="innerOfInner">${detailItem(l,obj[tb.id]["jenisTera"], iterator)}</div>`;
                } else {
                  str += `<div class="item"><div class="inner">Nomor Order : ${l[16]}<div class="innerOfInner">${detailItem(l,obj[tb.id]["jenisTera"], iterator)}</div>`;                  
                }
              } else {
                str += `<div class="innerOfInner">${detailItem(l,obj[k.id]["jenisTera"], iterator)}</div>`;
              }

              lastOrder = l[1];
              iterator++;
            }
          } else {
            return;
          }
          //console.log(str);
          document.querySelector(obj[tb.id]["layoutPos"]).innerHTML = str; 
      });


    });
  } 
}

let backToMain = document.getElementById('backToMain');
backToMain.addEventListener("click", () => {
  window.location.replace("/");
});

chooseMenu();
getNowDate();
changeDate();


