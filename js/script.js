function zmenbarvu(hodnota) {
    const cislo = Number(hodnota);
  
    if (cislo < 10) {
      document.body.style.backgroundColor = "blue";
    } else if (cislo > 30) {
      document.body.style.backgroundColor = "red";
    } else {
      document.body.style.backgroundColor = "green";
    }
  }
  
