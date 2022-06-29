let title = document.querySelector(".title");
let tours = "Tours de jeux : ";
let joueur1 = tours + "Joueur 1";
let joueur2 = tours + "Joueur 2";

let score = document.querySelector(".score");
let scoreJ1 = "Joueur 1: " + 0 ;
let scoreJ2 = "Joueur 2: " + 0 ;

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
let divs = document.querySelectorAll(".div");
let tour = true
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
        } else {
            this.textContent = "X"
            titleP.textContent = joueur1;
            this.style.color ="rgb(19, 19, 19)";
            tour = true;
        }
    })
}


// Restart
document.querySelector("button").addEventListener("click", function() {
    for( div of divs) {
        div.textContent = "";
    }
})