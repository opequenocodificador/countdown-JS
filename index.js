// Créer la logique de compte à rebours

/*choice.value = 5 minutes

choice.value * 60 = totalSeconds

let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60

// Créer un événement à la validation du form pour lancer le compte à rebours*/
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  countdownDisplay = choice.value;
  //choice.value = "";
  document.getElementById("countdownDisplay").innerHTML = countdownDisplay;
  console.log(choice.value * 60);
});
