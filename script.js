let title = document.querySelector(".title");
let tours = "Gamer : ";
let joueur1 = tours + "Players 1";
let joueur2 = tours + "Players 2";

let score = document.querySelector(".score");
let scoreJ1 = "Players 1 : " + 0 ;
let scoreJ2 = "Players 2 : " + 0 ;

let titleP = document.createElement("p");
titleP.textContent = joueur1;
title.appendChild(titleP);

let score1P = document.createElement("p");
let score2P = document.createElement("p");
score1P.textContent = scoreJ1;
score2P.textContent = scoreJ2;
score.appendChild(score1P);
score.appendChild(score2P);


// CLICK
let button = document.querySelector("button")
let body = document.querySelector("body")
let divs = document.querySelectorAll(".div");
let tour = true
let click = 9 ;
for(div of divs) {
    div.addEventListener("click", function() {
        if ( this.textContent === "O" || this.textContent === "X") {
            alert("Case déjà utilisé");
        }
        else if ( tour === true) {
            this.textContent = "O"
            tour = false;
            titleP.textContent = joueur2;
            this.style.color ="rgb(255, 77, 77)";
            click--;
        } else {
            this.textContent = "X"
            titleP.textContent = joueur1;
            this.style.color ="rgb(19, 19, 19)";
            tour = true;
            click--;
        }
        if (click === 0) {
            let terminer = document.createElement("p")
            terminer.classList.add("terminer");
            terminer.textContent = "Click to restart for news games"
            body.appendChild(terminer)
        }
    })
}



// Restart
button.addEventListener("click", function() {
    for( div of divs) {
        div.textContent = "";
    }
    let terminer = document.querySelector(".terminer");
    body.removeChild(terminer);
    click = 9;
    console.log(click)
})