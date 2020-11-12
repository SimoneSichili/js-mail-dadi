/* Gioco dei dadi, chi fa di più vince.
Generare un numero random da 1 a 6, sia per il
giocatore sia per il compute. Stabilire il
vincitore, in base a chi fa il punteggio più alto. */

// #1 Genera un numero random per l'utente
var numUser = Math.floor(Math.random() * 6) +1;
console.log("Il numero generato per l'utente è: " + numUser);
document.getElementById("user").innerHTML = "Il numero generato per l'utente è: " + numUser;

// #2 Genera un numero random per il PC
var numPC = Math.floor(Math.random() * 6) +1;
console.log("Il numero generato per il PC è: " + numPC);
document.getElementById("pc").innerHTML = "Il numero generato per il PC è: " + numPC;

// #3 Confronta i due numeri e stabilisci il punteggio più alto
// #4 Stabilisci il vincitore
if (numUser > numPC) {
    console.log("L'utente è il vincitore");
    document.getElementById("winner").innerHTML = "Il vincitore è l'utente!";
} else if (numUser < numPC) {
    console.log("il PC è il vincitore");
    document.getElementById("winner").innerHTML = "Il vincitore è il PC!";
} else {
    console.log("Pareggio");
    document.getElementById("winner").innerHTML = "Pareggio!";
}
