/* ============================================================================================

// Exercice

// Créer un tableau avec 10 notes  (les notes seront sur 20)
// Compter le nombre de notes au dessus de la moyenne (10/20)
// Compter le nombre de notes en dessous de la moyenne

// Créer 2 variable compteurs

// Le nb. de note inférieur à 10 est de: 4
// Le nb. de note supérieur à 10 est de : 6
// Afficher Le nb. de note comprise entre 16 et 20 ou 8 et 12
// Stocker dans un nouveau tableau les notes comprises entre 12 et 18 (fonction push())
// Afficher le nouveau tableau de notes et le nombre d'elements qu'il comporte
// Calculer la moyenne de ce nouveau tableau


// Bonus: Afficher la note la plus petite
// Bonus 2: Afficher la note la plus grande

var Notes = [5,7,9,3,12,15,13,19,17,14]
console.log(Notes)

var compteurInf = 0;
var compteurSup = 0;

for(var i = 0; i < Notes.length; i++){

    if (Notes[i] < 10){

        compteurInf++; // compteurInf = compteurInf +1;
    }

    else {
        compteurSup++;
    }

}

console.log(compteurInf + " personnes ont moins de 10");
console.log(compteurSup + " personnes ont plus de 10");

// Afficher Le nb. de note comprise entre 16 et 20 ou 8 et 12
// Stocker dans un nouveau tableau les notes comprises entre 12 et 18 (fonction push())
// Afficher le nouveau tableau de notes et le nombre d'elements qu'il comporte
// Calculer la moyenne de ce nouveau tableau

// Bonus: Afficher la note la plus petite
// Bonus 2: Afficher la note la plus grande

var Notes = [5,7,9,3,15,12.1,13,19,17,14]
console.log(Notes);

var Notes16a20 = 0;
var Notes8a12 = 0;
var tabNewNotes = []; // initialise un nouveau tableau vide

for(var i = 0; i < Notes.length; i++){
    if (Notes[i] >= 16 && Notes[i] <= 20){
        Notes16a20++;

    }


    else if (Notes[i] >= 8 && Notes[i] <= 12){
            Notes8a12++;
    }


}

console.log(Notes16a20 + " personnes ont une note entre 16 et 20");
console.log(Notes8a12 + " personnes ont une note entre 8 et 12");

for(var i = 0; i < Notes.length; i++){

    if(Notes[i] >=12 && Notes[i] <=18){
        tabNewNotes.push(Notes[i]);
    }

}

var	noteTotale = 0
var nbrNote = tabNewNotes.length
var moyenneGene = 0

for (var i = 0; i < tabNewNotes.length; i++) {
	noteTotale = noteTotale + tabNewNotes[i];
	moyenneGene = noteTotale / nbrNote;

}

console.log("Voici le nouveau tableau généré : " + tabNewNotes);
// console.log(tabNewNotes.length);
// console.log(noteTotale);
// console.log(nbrNote);
console.log("La moyenne générale du nouveau tableau est de : " + moyenneGene + "/20 pour un total de " + nbrNote + " notes");


// meilleur et pire note

var bestNote = tabNewNotes[0] // variable égale à la première valeur du tableau
var worstNote = tabNewNotes[0] // idem

for (var i = 0; i < tabNewNotes.length; i++) {

	if (bestNote < tabNewNotes[i]) {
	  bestNote = tabNewNotes[i];
	}

  if (worstNote > tabNewNotes[i]) {
      worstNote = tabNewNotes[i];
  }

}

console.log("La meilleure note de ce tableau est " + bestNote + "/20");
console.log("La plus mauvaise note de ce tableau est " + worstNote + "/20");






============================================================================================ */
// --- BlackJoke ---


//init var
var sabotCarte = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var MainJoueur = [];
var MainBanque = [];


//  ------- initialisation de la première main
// ---> Banque
var NombreUnBanque = Math.floor(Math.random() * 10);
var NombreDeuxBanque = Math.floor(Math.random() * 10);
var CarteUnBanque = sabotCarte[NombreUnBanque];
var CarteDeuxBanque = sabotCarte[NombreDeuxBanque];
MainBanque.push(CarteUnBanque, CarteDeuxBanque);

// ---> Joueur
var NombreUnJoueur = Math.floor(Math.random() * 10);
var NombreDeuxJoueur = Math.floor(Math.random() * 10);
var CarteUnJoueur = sabotCarte[NombreUnJoueur];
var CarteDeuxJoueur = sabotCarte[NombreDeuxJoueur];
MainJoueur.push(CarteUnJoueur, CarteDeuxJoueur);

console.log("Carte de la banque : " + MainBanque);
console.log("Carte du Joueur : " + MainJoueur);

/// Calcul du score Joueur et Banque sur 2 cartes
var ScoreJoueur = CarteUnJoueur + CarteDeuxJoueur;
var ScoreBanque = CarteUnBanque + CarteDeuxBanque;

console.log("Avec 2 cartes, ( " + MainJoueur + " ) le Joueur à un score de " + ScoreJoueur);
console.log("Avec 2 cartes, ( " + MainBanque + " ) la Banque à un score de " + ScoreBanque);

// alert("Bienvenue");

if (ScoreJoueur == 20) {
  alert("BlackJoke !! (à 2 cartes)");

}
else {

  if (ScoreJoueur != 20) {
    var SouhaitUnJoueur = prompt("Avec 2 cartes vous avez un score de : " + ScoreJoueur + ". Souahitez-vous piocher ou stoper ? (saisisez piocher ou stoper) ");
    console.log("ChoixJoueur " + SouhaitUnJoueur);

    if(SouhaitUnJoueur == 'piocher') {
      console.log("le joueur à choisi de piocher");
      alert("Vous avez choisi de piocher");
      var NombreTroisJoueur = Math.floor(Math.random() * 10);
      var CarteTroisJoueur = sabotCarte[NombreTroisJoueur];
      MainJoueur.push(CarteTroisJoueur);
      ScoreJoueur = ScoreJoueur + CarteTroisJoueur;
      console.log("Le nouveau score du Joueur (sur : "+ MainJoueur.length + " cartes) : " + ScoreJoueur );
      var SouhaitDeuxJoueur = prompt( "Votre nouveau score est de " + ScoreJoueur + " (sur : "+ MainJoueur.length + " cartes). Souahitez-vous piocher ou stoper ? (saisisez piocher ou stoper) ");

        if(SouhaitDeuxJoueur == 'piocher'){
          console.log("le joueur à choisi de piocher");
          alert("Vous avez choisi de piocher");
          var NombreQuatreJoueur = Math.floor(Math.random() * 10);
          var CarteQuatreJoueur = sabotCarte[NombreQuatreJoueur];
          MainJoueur.push(CarteQuatreJoueur);
          ScoreJoueur = ScoreJoueur + CarteQuatreJoueur;
          console.log("Le nouveau score du Joueur (sur : "+ MainJoueur.length + " cartes) : " + ScoreJoueur );
          alert("Vous avez atteint le nombre maximal de cartes");

            if (ScoreJoueur > 20) {
              alert("Vous avez perdu avec un score supérieur à 20");
            }
            else{
              alert("Vous avez gagné (sur : "+ MainJoueur.length + " cartes) avec un score de " + ScoreJoueur + " contre " + ScoreBanque + " pour la banque(sur : "+ MainBanque.length + " cartes).");
              console.log("Gagné, score joueur supérieur au score Banque");
            }
        }
        else {
        console.log("le joueur à choisi de stoper avec "+ MainJoueur.length + " cartes");
        alert("Vous avez choisi de stoper il faut calculer les score et comparer");

          if (ScoreBanque < 17) {
            var NombreTroisBanque = Math.floor(Math.random() * 10);
            var CarteTroisBanque = sabotCarte[NombreTroisBanque];
            MainBanque.push(CarteTroisBanque);
            ScoreBanque = ScoreBanque + CarteTroisBanque;
            console.log("Le nouveau score de la Banque (sur : "+ MainBanque.length + " cartes) : " + ScoreBanque );
            alert("La Banque a pris une carte supplémentaire");
          }

          if (ScoreJoueur < ScoreBanque && ScoreJoueur != ScoreBanque) {
            alert("Vous avez perdu (sur : "+ MainJoueur.length + " cartes) avec un score de " + ScoreJoueur + " contre " + ScoreBanque + " pour la banque (sur : "+ MainBanque.length + " cartes).");
            console.log("Perdu, score du joueur inférieur au score de la Banque");
          }
          else{
            alert("Vous avez gagné (sur : "+ MainJoueur.length + " cartes) avec un score de " + ScoreJoueur + " contre " + ScoreBanque + " pour la banque(sur : "+ MainBanque.length + " cartes).");
            console.log("Gagné, score joueur supérieur au score Banque");
          }
        }

    }
    else {
    console.log("le joueur à choisi de stoper avec "+ MainJoueur.length + " cartes");
    alert("Vous avez choisi de stoper il faut calculer les score et comparer");

      if (ScoreBanque < 17) {
        var NombreTroisBanque = Math.floor(Math.random() * 10);
        var CarteTroisBanque = sabotCarte[NombreTroisBanque];
        MainBanque.push(CarteTroisBanque);
        ScoreBanque = ScoreBanque + CarteTroisBanque;
        console.log("Le nouveau score de la Banque (sur : "+ MainBanque.length + " cartes) : " + ScoreBanque );
        alert("La Banque a pris une carte supplémentaire");
      }

      if (ScoreJoueur < ScoreBanque && ScoreJoueur != ScoreBanque) {
        alert("Vous avez perdu (sur : "+ MainJoueur.length + " cartes) avec un score de " + ScoreJoueur + " contre " + ScoreBanque + " pour la banque (sur : "+ MainBanque.length + " cartes).");
        console.log("Perdu, score du joueur inférieur au score de la Banque");
      }
      else{
        alert("Vous avez gagné (sur : "+ MainJoueur.length + " cartes) avec un score de " + ScoreJoueur + " contre " + ScoreBanque + " pour la banque(sur : "+ MainBanque.length + " cartes).");
        console.log("Gagné, score joueur supérieur au score Banque");
      }
    }
  }
}


//
