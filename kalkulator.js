let tombol = document.querySelector(".kalkulator-tombol");
let kalkulator = document.querySelector("#kalkulator");

tombol.addEventListener("click",function(e){
   let tombolClick = e.target;
   let nilaiTombol = tombolClick.innerText;
   
   if(nilaiTombol === "C"){
    kalkulator.value = "";
   } else if (nilaiTombol == "<"){
    kalkulator.value = kalkulator.value.slice(0,-1);
   } else if (nilaiTombol == "="){
    kalkulator.value = eval(kalkulator.value);
   } else {
   kalkulator.value = kalkulator.value + nilaiTombol;
   }
})
   

