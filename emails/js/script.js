// creo un array di email
const emails = ['test1@gmail.com', 'test2@gmail.com', 'test3@gmail.com', 'test4@gmail.com', 'test5@gmail.com', 'test6@gmail.com', 'test7@gmail.com',];

const userMail = [prompt("Inserisci la tua email")];

emails.push(userMail[0]);


let findMail = false;

for (let i = 0; i < emails.length; i++) {
    if (emails[i] === userMail) {
        findMail = true;
    }
}
if (findMail) {
    document.getElementById("userChoice").innerHTML = "Elemento Trovato!!"
    console.log('Elemento trovato!');
} else {
    document.getElementById("userChoice").innerHTML = "Elemento NON Trovato!!"
    console.log('Elemento non trovato.');
}






// console.log(emails);
console.log(userMail)