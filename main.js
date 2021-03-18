// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le
// seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore
// utilizzando destructuring e template literal
$(document).ready(function() {
  // let nome = "bmx";
  // let peso = 3;

  const bikes = [];

   bikes.push({
     nome: "bmx",
     peso: 3
   });
   bikes.push({
     nome: "graziella",
     peso: 10
   });
   bikes.push({
     nome: "bici",
     peso: 4
   });

   let index = 0;
   let min = bikes[0].peso ;
   for (let i = 1; i < bikes.length; i++) {
       if (bikes[i].peso < min) {
         const{peso} = bikes[i];
         min = peso;
         index = i;

       }
   }


    console.log(`la bici che pesa di meno è ${bikes[index].nome} ed il suo peso è ${min}`);

})



//jsnack2

const squadre = [
  {
    nome: "Juventus",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Sassuolo",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Shakhtar",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Leicester",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Maccabi",
    puntifatti: 0,
    falli: 0,
  },

  {
    nome: "Bayern Munich",
    puntifatti: 0,
    falli: 0,
  },
]

let newDati = []

for (let i = 0; i < squadre.length; i++) {
  squadre[i].puntifatti = randomNumberInRange(0, 100);
  squadre[i].falli = randomNumberInRange(0, 100);

  const {nome, falli} = squadre[i]
  newDati.push(nome, falli);
}

// const [teamOne, teamTwo, teamThree] = squadre[i].puntifatti

console.log(newDati);

// FUNCTIONS

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

console.log(squadre);
