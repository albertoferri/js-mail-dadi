// creo variabile per il bottone
const buttonElement = document.querySelector("#button");

// creo evento al click del bottone
buttonElement.addEventListener("click",
    function(){
        // imposto variabili assegnate random 
        let numberUser = Math.round(Math.random()*5+1);
        let numberPc = Math.round(Math.random()*5+1);

        document.getElementById("userResult").innerHTML = "Hai ottenuto: " + numberUser;
        document.getElementById("pcResult").innerHTML = "Computer: " + numberPc;
        
        // aggiunta verifica dei valori (il più alto vince)
        if (numberUser > numberPc){
            document.getElementById("winner").innerHTML = "WOW HAI VINTO! SARÀ LA FORTUNA DEL PRINCIPIANTE!";
        } else{
            document.getElementById("winner").innerHTML = "NON HA VINTO IL COMPUTER: HAI PERSO TU!";
        }
        // if pareggio
        if (numberUser == numberPc){
            document.getElementById("winner").innerHTML = "VEDILA COSÌ, POTEVA ANDARTI PEGGIO!";
        }

        // console log
        console.log(`Scelta utente: ${numberUser} Scelta PC: ${numberPc}`);
    }
)