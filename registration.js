function detailItem(arr) {
  let detailStr = "";

  for (let ar of arr) {
    detailStr += ` ${ar} |`;
  }

  return detailStr;
}


function changeDate() {
  let tgl = document.querySelectorAll('.tgl');
  for (let k of tgl) {
    k.addEventListener("change", async () => {
      //alert(k.value);

      const urlApi = "https://script.google.com/macros/s/AKfycbwOdKdXcTkSTcFlBRW_KjdQdvMs3OdGwbXpeDe3KjcgYTFTwbaj3niE8BEE8QOoWG3WzA/exec";

      const postData = {
        'tanggal' : k.value,
        'authData' : {
              'token' : sessionStorage.getItem('key') 
        }
      };

      await fetch(urlApi, {
          method : 'POST',
          body : JSON.stringify(postData) 
      })
      .then(e => e.json())
      .then(e => {
          let str = '';
          if (e.result !== "error") {
            let lastOrder = 0;
            for (let l of e.data) {
              console.log(l);
              if (l[1] !== lastOrder) {
                str += `</div></div>`;
                str += `<div class="item"><div class="inner">Nomor Order : ${l[16]}<div class="innerOfInner">${detailItem(l)}</div>`;
              } else {
                str += `<div class="innerOfInner">${detailItem(l)}</div>`;
              }

              /*for (let m of l) {
                //console.log(m);
                str += `${m}`;
              }*/

              lastOrder = l[1];
              //str += `<div class="item"><div class="inner">${l}</div></div>`;
              //document.querySelector("k_tuk").append()

            }
          } else {
            return;
          }
          //console.log(str);
          document.querySelector(".k_tuk").innerHTML = str; 
      });
    });

  }
}

function getNowDate() {
  let d = new Date();
  let nowDate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  
  for (let k of document.querySelectorAll('.tgl')) {
    k.value = nowDate;
  }
}

getNowDate();
changeDate();


