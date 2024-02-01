// creo un array di email
const emails = ["test1@gmail.com", "test2@gmail.com", "test3@gmail.com", "test4@gmail.com", "test5@gmail.com", "test6@gmail.com", "test7@gmail.com",];

const userMail = [prompt("Inserisci la tua email")];

emails.push(userMail[0]);

if (userMail ){
    document.querySelector("#userChoice") = "va bene"
} else {
    alert("La tua email non è registrata.")
}

// const newElement = document.createElement("div");

// if (prompt("Inserisci la tua email") === )

console.log(emails);
console.log(userMail)