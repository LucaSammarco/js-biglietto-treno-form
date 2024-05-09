// const userName = prompt("Come ti chiami?");
// console.log("Ciao " + userName);
// console.log

// // let number = 100
// // console.log (number);

// // const pi = 3.14
// // console.log (pi);

// // pari o dispari: chiedere all'utente/ssa se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// // let choise = prompt ("Odd or even?")
// // let number = prompt ("Select a number")

// // let pcnum = Math.floor(Math.random () * 10);

// // console.log(pcnum)


// let element = button

// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });



const bottone = document.querySelector("button")

const prezzoAlKm = 0.267113;
let sconto = 0;

bottone.addEventListener("click", function(){

  let userDistance = document.querySelector("#km").value
  let userAge = document.querySelector("#age").value

  if (userAge > 63) {
    sconto = 37.893;
} else if (userAge < 18) {
    sconto = 24.552;
}

  let prezzo = prezzoAlKm * userDistance;
  prezzo = prezzo - (prezzo * sconto / 100);

  console.log(prezzo.toFixed(2));

  document.querySelector("#userData").innerHTML = "Based on the <strong>" + userDistance + "</strong> km selected and your age of <strong>" + userAge + "</strong>, the final price will be:";

    document.querySelector("#finalPrice").innerHTML = "<strong>€" + prezzo.toFixed(2) + "</strong>";

    document.querySelector(".yourPrice").classList.remove("blur-effect");

  


})

