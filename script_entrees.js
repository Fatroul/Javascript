"use strict";
console.log("froutch")

var recettes = [
    {titre: "Salade Niçoise", 
    page: "recette_salade_nicoise.html",
    image: "../image/salade.jpg"

},
    {titre: "Tarte aux poireaux", 
    page: "recette_tarte_poireaux.html"
}
];

var html = "";
var len = recettes.length;
for(var i=0; i < len; i++) {
    //ici  on reconstruit  nos "li" = éléments de liste
    // accés recette = recettes[i]
    // accés titre d'une recette = recettes[i].titre

    html += "<li class='elems' id=\"rec-" + i + "\""> + recettes[i].titre + </li>"
}
    //PROBLEMMEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
 var liste = document.getElementById("liste");
 liste.innerHTML = html;

 /* fonctionnallité modale*/
 

 var container = document.getElementById("rec_container");
 container.addEventListener("click" , () => {
     container.style.display = "none"
 });

 var elems = document.getElementsByClassName("elems");
 var len = elems.length;
 for(var i = 0; i<len; i++) {
     elems[i].addEventListener("click", (event) => {
         event.preventDefault()
         var index = event.target.id.substring(3);
         showRecette(index);

     })
 }
 console.log(elems);

 function showRecette(i) {
     console.log("Vous avez demandé la recette n°")
     container.style.display = "block";
 }













//<li><a href="pages_entrees/recette_salade_nicoise.html">Salade Niçoise</a></li>
//<li><a href="pages_entrees/recette_tarte_poireaux.html">Tarte aux poireaux</a></li>