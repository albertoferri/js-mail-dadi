// creo un array di email
const emails = ['test1@gmail.com', 'test2@gmail.com', 'test3@gmail.com', 'test4@gmail.com', 'test5@gmail.com', 'test6@gmail.com', 'test7@gmail.com',];
// creo costante per l'input dell'utente
const userMail = prompt("Inserisci la tua email");

// ho inserito la mail dentro l'array
emails.push(userMail[0]);

// inposto booleana per trovare la mail dentro l'array
let findMail = false;

// utilizzo un ciclo for per cercare l'elemento dentro l'array
for (let i = 0; i < emails.length; i++) {
    if (emails[i] === userMail) {
        findMail = true;
    }
}

// controllo il valore e lo stampo in pagina
if (findMail) {
    document.getElementById("userChoice").innerHTML = 'Email registrata!';
    console.log('Email registrata!');
} else {
    document.getElementById("userChoice").innerHTML = 'Email non registrata.';
    console.log('Email non registrata.');
}

// console.log(emails);
console.log(userMail)