 let mansikka = document.getElementById('berry');
mansikka.style.backgroundColor='red';
console.log(mansikka);
console.log("I found the berry: " + mansikka.innerHTML);

let appelsiini = document.querySelector("[data-foodtype = 'squishy' ]");
appelsiini.style.backgroundColor = "orange";
 console.log(appelsiini);
 console.log("I found the berry: " + appelsiini.innerHTML);

let lista = document.getElementsByTagName('li');
console.log(lista);

for (i=0; i<6; i++){
  let lista = document.getElementsByTagName('li')[i];
  lista.style.width='100px';
  lista.style.listStyleType='none';
  if (i ===3){
    lista.style.backgroundColor='green';
  }
  console.log(lista.innerHTML);

 }

 let losta = document.querySelectorAll('li');
 console.log(losta);

 let lasta = document.querySelectorAll('li');
 lasta.forEach(function(mansikki){
   mansikki.style.border='solid';


   console.log(mansikki.innerHTML);
 });



