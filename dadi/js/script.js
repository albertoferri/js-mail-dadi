// creo una variabile per il bottone
const buttonElement = document.querySelector("#button");

// creoun evento al click del bottone: genero due numeri casuali
buttonElement.addEventListener("click",
    function() {
        const numberUser = Math.floor(Math.random() * 5 + 1);
        document.getElementById("userResult").innerHTML ="Il tuo dado: " + numberUser;
        console.log(numberUser)
    }    
)
buttonElement,addEventListener("click",
    function() {
        const numberPc = Math.floor(Math.random() * 5 + 1);
        document.getElementById("pcResult").innerHTML ="computer: " + numberPc;
        console.log(numberPc)
    }
)
    
