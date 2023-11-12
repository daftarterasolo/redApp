function changeDate() {
  let tgl = document.querySelectorAll('.tgl');
  for (let k of tgl) {
    k.addEventListener("change", () => {
      alert(k.id);
    });

  }
}

changeDate();
