function myFunction() {
   const countValue = document.getElementById("countValue");
    let  sayi = parseInt(countValue.textContent);
    countValue.textContent = ++sayi;
    changeColor();
  }
  const changeColor = ()=>{
    if (countValue.textContent ==5) {
        countValue.style.color = "orange";
          diff.textContent = '5.Ekrana bakışın odaklanamıyorsan birde pomodoro yöntemini deneyelim';
  }
    else if (countValue.textContent ==10) {
        countValue.style.color = "red";
          diff.textContent = 'Bugünlük yeter çalışsanda verim alamazsın';
  }
   else{
    countValue.style.color = "black";   
   }
  }




/*   let audio = document.getElementById("rainMusic");
  function toggleMusic() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  function toggle2Music() {
    let audio = document.getElementById("forestMusic");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  function toggle3Music() {
    let audio = document.getElementById("fireMusic");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  function toggle4Music() {
    let audio = document.getElementById("pianoMusic");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  } */                
  
  
  /*TEK FONK İLE HEPSİNİ HALLETTİM EHEHEHEHHEHEE  */

  function Music(X){
    const idsineulas = `music${X}`;
    const idninicinegir = document.getElementById(idsineulas);
    if (idninicinegir.paused) {  /* paused durmus */
      idninicinegir.play();
    } else {
      idninicinegir.pause();
    }
  }
  

  function myReset() {
    const countValue = document.getElementById("countValue");
    let  sayi = parseInt(countValue.textContent);
    countValue.textContent =0;
    document.getElementById("diff").textContent = '';
    if (sayi== 5 ||sayi == 10) {
      document.getElementById("countValue").style.color = "black";
    }
}

