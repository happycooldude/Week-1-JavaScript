alert("We hebben een aantal gegevens van u nodig");

function mijnFunctie1(){
  var person = prompt("Vul hier uw voornaam in", "Jan ");
  if (person != null){
    document.getElementById("demo").innerHTML =
    "Hallo " + person + "! Hoe gaat het met u?"
  }
}

function mijnFunctie2(){
  var person = prompt("Vul hier uw achternaam in", "Alleman");
  if (person != null){
    document.getElementById("demo").innerHTML =
    "Hallo " + person + "! Hoe gaat het met u?"
  }
}

function mijnFunctie3(){
  var person = prompt("Vul hier uw leeftijd in", "24");
  if (person != null){
    document.getElementById("demo").innerHTML =
    "Hallo " + person + "! Hoe gaat het met u?"
  }
}
