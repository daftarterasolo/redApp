function changeDate() {
  let tgl = document.querySelectorAll('.tgl');
  for (let k of tgl) {
    k.addEventListener("change", () => {
      alert(k.id);
    });

  }
}

function getNowDate() {
  let d = new Date();
  let nowDate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  //console.log(nowDate);
  for (let k of document.querySelectorAll('.tgl')) {
    k.value = nowDate;
  }
}

getNowDate();
changeDate();


