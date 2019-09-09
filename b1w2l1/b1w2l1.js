alert("We hebben een aantal gegevens van u nodig");

function mijnFunctie1(){
  var voornaam = prompt("Vul hier uw voornaam in", "Jan ");
  if (voornaam != null){
    document.getElementById("demo").innerHTML =
    "Hallo " + voornaam + "! Hoe gaat het met u?"
  }
}

function mijnFunctie2(){
  var achternaam = prompt("Vul hier uw achternaam in", "Alleman");
  if (achternaam != null){
    document.getElementById("demo").innerHTML =
    achternaam + " wat een leuke naam!"
  }
}

function mijnFunctie3(){
  var leeftijd = prompt("Vul hier uw leeftijd in", "24");
  if (leeftijd != null){
    document.getElementById("demo").innerHTML =
    leeftijd + " wat een mooie leeftijd!"
  }
}

function test(){
  var voornaam = prompt("Vul hier uw voornaam in");
  var achternaam = prompt("vul hier uw achternaam in");
  var leeftijd = prompt("vul hier uw leeftijd in");
  if (leeftijd != null){
    document.getElementById("demo").innerHTML =
      "Hallo" + " " + voornaam + " " + achternaam + " " + leeftijd + " " + "welkom op deze site"
  }
}
