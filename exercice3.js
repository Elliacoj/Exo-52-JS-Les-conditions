/* Modifier le code ci dessous pour réaliser l'exercice */
let x = prompt("rentrez une valeur pour x");
let y;

y = 3;

if (x == y) {
    document.getElementById('monDiv').innerHTML = "La variable x est égal à la variable y";
}

else if (x > y){
    document.getElementById('monDiv').innerHTML = "La variable x est supérieure à la variable y";
}

else {
    document.getElementById('monDiv').innerHTML = "La variable x n'est pas supérieure à la variable y";
}

