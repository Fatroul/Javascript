"use strict";
console.log('OK');

var recettes = [
    {
        titre: "Salade Niçoise", 
        page: "recette_salade_nicoise.html",
        image: "salade.jpg",
        description: "Fraîche, très parfumée, savoureuse au mille saveurs tout autant que simple, telle est la salade niçoise. A consommer sans modération en été, pour profiter des bons produits frais.",
        personnes: 4,
        temps: 28,
        difficulte: 0,
        cout: 1,
        ingredients: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel",
        etapes: "4 tomates rondes assez fermes///4 oeufs///2 oignons cébettes (ou petits oignons)///8 févettes (petites fèves)///1 poivron vert///200 g de thon au naturel///4 filets d'anchois au sel///Olives noires de Nice (si possible)///feuille de basilic///8 radis///Vinaigre de vin rouge///Huile d'olive///Poivre///Sel"
    },
    {
        titre: "Tarte aux poireaux", 
        page: "recette_tarte_poireaux.html",
        image: "tarte.jpg",
        description: "Servir avec une salade verte.",
        personnes: 6,
        temps: 50,
        difficulte: 0,
        cout: 1,
        ingredients: "250 g de farine///140 g de beurre///2 cuillères à soupe d'eau///3 poireaux///400 g de lardons///3 oeufs///100 g de fromage râpé///25 cl de crème fraîche///Poivre///Sel",
        etapes: "250 g de farine///140 g de beurre///2 cuillères à soupe d'eau///3 poireaux///400 g de lardons///3 oeufs///100 g de fromage râpé///25 cl de crème fraîche///Poivre///Sel"
    }
];

var html = "";
var len = recettes.length;

for(var i = 0; i < len; i++) {
    // Ici on reconstruit nos "li" = éléments de liste
    // Accés recette => recettes[i]
    // Accés titre d'une recette => recettes[i].titre
    // <li><a href="pages_entrees/recette_salade_nicoise.html">Salade Niçoise</a></li>
   html += "<li class=\"elem\" id=\"rec" + i + "\">" + recettes[i].titre + "</a></li>";
}

var liste = document.getElementById("liste");
liste.innerHTML = html;


/* Fonctionnalité modale */

var container = document.getElementById("rec_container");
container.addEventListener("click", () => {
    container.style.display = "none";
});

var elems = document.getElementsByClassName("elem");
var len = elems.length;
for(var i = 0; i < len; i++) {
    elems[i].addEventListener("click", (event) => {
        event.preventDefault();
        var index = parseInt(event.target.id.substring(3));
        showRecette(index);
    });
}

function showRecette(index) {
    console.log("Vous avez demandé la recette " + recettes[index].titre);
    container.style.display = "block";

    var element = document.getElementById('recette');

    var recetteHtml = "";
    recetteHtml += "<img src=\"../img/" + recettes[index].image + "\">";
    recetteHtml += "<div class=\"description\">";
    recetteHtml += "<h2>" + recettes[index].titre + "</h2>";
    recetteHtml += "<p>" + recettes[index].description + "</p>";
    recetteHtml += "<table><tr><th>Personnes</th><th>Temps</th><th>Difficulté</th><th>Coût</th></tr><tr>";
    recetteHtml += "<td>" + recettes[index].personnes + "</td>";
    recetteHtml += "<td>" + recettes[index].temps + "</td>";
    recetteHtml += "<td>" + recettes[index].difficulte + "</td>";
    recetteHtml += "<td>" + recettes[index].cout + "</td>";
    recetteHtml +="</tr></table>";
    recetteHtml += "</div><div class='contenu'><div class='ul'><h2>Ingrédients</h2>";
    recetteHtml += "</div><div class='ol'><h2>Etapes</h2>";
    recetteHtml += formatLst(recettes[index].ingredients, "ul");
    recetteHtml += formatLst(recettes[index].etapes, "ol");
    recetteHtml += "</div></div></div>";


    element.innerHTML = recetteHtml;
}



function formatLst(strToTab , type) {
    var tab = strToTab.split("///");
    var listHtml = "<" + type + ">";
    var max = tab.length;
    for(var i = 0; i < max; i++) {
        listHtml += "<li>" + tab[i] + "</li>";
    }
    listHtml += "</ul>";
    
    return listHtml;
}


//1. Récupérer l'élément formulaire (et l'afficher en console)
//2. Ajouter un listener sur son évènement submit (et afficher en console "Le formulaire a été soumis")

var form = document.getElementById("form");
console.log(form);




form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Le formulaire a été soumis");
    var titre = document.getElementById("nomrecette").value;
    console.log(titre);
    
    
    
    
    console.log("Le formulaire a été soumis");

});

//3. Lorsque que le formulaire est soumis, afficher en plus dans la console, l'élément input pour la saisie du titre
//4. Afficher la valeur de cet élément (toujours lors de la soumission du formulaire)





