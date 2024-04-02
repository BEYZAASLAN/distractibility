let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(()=> {
    let day = new Date();
    let hh = day.getHours() * 30; 
    let  mm = day.getMinutes() * 6;
    let ss= day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`; 
    mn.style.transform =`rotateZ(${mm}deg)`; 
    sc.style.transform = `rotateZ(${ss}deg)`; 

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

let am  = h>=12 ? "PM" : "AM";

    if(h>=12){
        h = h-12;
    }

    h=(h<10) ? "0"+h :h;
    s=(s<10) ? "0"+s :s;
    m=(m<10) ? "0"+m :m;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML=s;
    ampm.innerHTML = am;

})

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
