/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

// #1 Chiedi all'utente la sua mail
var mailUtente = prompt("Digita la tua email");
console.log("Email digitata dall'utente: " + mailUtente);
document.getElementById("mail-utente").innerHTML = mailUtente;

// #2 Crea una lista di email per il confronto
var listaMail = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com"];
console.log(listaMail);

// #3 Controlla che sia nella lista mail di chi può accedere

for (var i = 0; i < listaMail.length; i++) {
    
    if (mailUtente == listaMail[i]) {
        console.log("La tua email è in lista!");
        document.getElementById("result").innerHTML = "La tua email è in lista!"
    } else {
        console.log("Mi dispiace. La tua email non è in lista!");
        document.getElementById("result").innerHTML = "Mi dispiace. La tua email non è in lista!"
    }

}

// #4 Stampa un messaggio appropriato sull'esito del controllo