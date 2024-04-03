let liste_nom = [];
var nombre_precedent;
var liste_questionpose = [];

function init() {
  localStorage.name = "";
  console.log(localStorage.name);
}

function ajouter_nom() {
  console.log("entrer");
  var name = document.getElementById("name").value;
  var namesContainer = document.getElementById("names-container"); // Sélection du nouveau conteneur
  var chaque_name = document.createElement("div");
  chaque_name.textContent = name;
  chaque_name.className = "bg-blue-100 text-blue-800 text-lg font-medium p-4 rounded shadow max-w-xs w-full text-center";
  namesContainer.appendChild(chaque_name);
  liste_nom.push(name);
  name = "sd";
  console.log("test:", name, liste_nom);
}

function enregistrer_name() {
  localStorage.name = JSON.stringify({ liste_nom });
  console.log(localStorage.name);
}

function jenaijamais() {
  var nom = JSON.parse(localStorage.name);
  var nom2 = nom.liste_nom;
  //console.log(localStorage.name);
  //console.log(nom2)
  var taille = nom2.length;
  var nombre_nom = Math.floor(Math.random() * taille);
  //console.log(nombre_nom,nombre_precedent);
  while (nombre_nom == nombre_precedent) {
    nombre_nom = Math.floor(Math.random() * taille);
    //console.log("while");
  }
  //console.log(nombre_nom);
  nombre_precedent = nombre_nom;
  //console.log(nombre_precedent);

  var taille_q = liste_jenaijamais.length;
  var nombre_q = Math.floor(Math.random() * taille_q);
  console.log(nombre_q);
  for (var i = 0; i < liste_questionpose.length; i++) {
    console.log("i=", i, "length=", liste_questionpose.length);
    if (nombre_q == liste_questionpose[i]) {
      console.log(nombre_q, liste_questionpose[i]);
      while (nombre_q == liste_questionpose[i]) {
        console.log("while");
        nombre_q = Math.floor(Math.random() * taille_q);
        console.log("nombre q=", nombre_q);
        console.log(
          "liste1=",
          liste_jenaijamais.length,
          "liste2=",
          liste_questionpose.length
        );
        if (liste_jenaijamais.length == liste_questionpose.length) {
          document.getElementById("questionis").textContent =
            "plus de questions";
          window.location.href = "name.php";
          console.log("break");
          break;
        }
        i = 0;
        console.log("i=", i);
      }
    }
  }
  liste_questionpose.push(nombre_q);
  console.log(liste_questionpose);
  document.getElementById("quijoue").textContent = nom2[nombre_nom];
  document.getElementById("questionis").textContent =
    liste_jenaijamais[nombre_q];
}

var liste_jenaijamais = [
  "Raconte t’as première fois",
  "Que dirais tu à la dernière personne que tu as embrassé",
  "J’ai déjà / je n’ai jamais Black out ",
  "J’ai déjà / je n’ai jamais pécho en boîte",
  "J’ai déjà / je n’ai jamais trompé ",
  "J’ai déjà / je n’ai jamais été trompé ",
  "J’ai déjà / je n’ai jamais pris de drogue",
  "Raconte nous la dernière fois que tu as pécho quelqu’un (contexte)",
  "Qu’elle était ta première impression quand tu as vu les autres joueurs pour la première fois ",
  "Fais 20 squat (défi)",
  "Raconte t’as pire honte",
  "Qui est la/le plus fêtard ?",
  "La pire excuse pour mettre un râteau ou quitter quelqu’un ?",
  "Fais un arbre droit (défi)",
  "As tu déjà menti à un jeu d’alcool",
  "Quel est le nombre max de personne que tu a pécho en un mois ?",
  "A tu déjà regretter quelques choses que tu a fais en étant bourrée ? Si oui quoi?",
  "A tu déjà fait l’amour dans un lieu public? Si oui le quel? ",
  "    Quelle est la personne que tu aimes le plus dans ta famille ?",
  "Tes parents t’ont-ils déjà surpris au lit avec une fille ?",
  "Qu’est-ce qui est rédhibitoire chez une fille ou un garçon pour toi ?",
  "As-tu déjà reçu des messages coquins ?",
  "Quel est le défaut que tu détestes le plus chez une personne ?",
  "A tu déjà espionner un ou une ex sur les réseaux sociaux ",
  "As-tu déjà menti à un entretien d’embauche ou sur ton CV ?",
  "As tu déjà couché avec un ou une collègue de travail ?",
  " Quelle est la plus grosse gaffe que tu aies faite ?",
  "Quelle est la plus grosse honte de ta vie ?",
  "Quel est ton plus grand remords ?",
  "T’es-tu déjà réveillé sans te souvenir de ta soirée ?",
  " Quel est le pire surnom que l’on t’ait donné ?",
  "Je ne me suis jamais fait virer d’un bar ou d’une discothèque.",
  "Je n’ai jamais menti à mes parents sur l’endroit où j’étais.",
  " Je ne me suis jamais fait arrêter.",
  " Je n’ai jamais fait semblant de rire à une blague que je n’avais pas comprise.",
  " Je n’ai jamais flirté avec quelqu’un pour gagner un pari",
  " Je n’ai jamais menti pendant un RDV galant afin d’y mettre un terme au plus vite.",
  "  Je n’ai jamais embrassé d’inconnu ",
  " Je n’ai jamais envoyé de nude ",
  " Je n’ai jamais vomi à cause de l’alcool ",
  " Je n’ai jamais fait de bain de minuit ",
  " Je n’ai jamais embrassée plus d’une personne en 24h ",
  "Je n’ai jamais fouillé dans les affaires de mon ou ma partenaire ",
  "Je n’ai jamais dormi dehors pendant toute une nuit ",
  " Je n’ai jamais été l’alibi d’un ami menteur",
  "Je n’ai jamais appeller mon ex en état d’ebriete ",
  "Je n’ai jamais convaincu un ami de larguer son partenaire ",
  "Je n’ai jamais appeller mon partenaire par le mauvais prénom ",
  "Je n’ai jamais fait l’amour dans une voiture",
  "A quel âge a tu perdu ta virginité ? ",
  "Quel a été ton pire rendez vous ?",
  "Qui est le/ la plus probable d’avoir une aventure avec une personne plus âgée ? ",
  "Qui es le/la plus probable de renverser quelqu’un en voiture ? ",
  "Qui es le/la plus probable de recoucher avec un/une ex ? ",
  "T'as déjà kiffé le mec/meuf de ton frère ou de ta sœur ?",
  "Quel est l'endroit le plus bizarre ou tu l'as fait ? ",
  "Est-ce que tu te tatouerais le nom de ton/ta partenaire ?",
  "Si tu ne pouvais manger qu’un seul aliment pour le reste de ta vie, lequel choisirais-tu ?",
  "D’après toi, quelle est la couleur qui représente le plus la joie ?",
  "S’il te restait deux heures à vivre sur terre, que ferais-tu ?",
  "Si tu devais faire tes valises et déménager dans un pays étranger demain, où déciderais-tu d’aller ?",
  "Quelle est la chanson dont tu connais toutes les paroles ?",
  "Quel est le dernier mensonge que tu as dit ?",
  "Est-ce que tu envisagerais un jour d’être dans une relation à distance ?",
  "Si tu avais un clone, que lui demanderais-tu de faire ?",
  "Quand tu étais plus jeune, que voulais-tu faire quand tu serais grand ?",
  "nomme et raconte ton meilleur coup au lit",
  "combien aimerais-tu avois d'enfant",
  "Connais-tu certains secrets de famille ?",
  "Quelle est la plus grosse vacherie que t’ai faite un membre de ta famille ?",
  "Décris-toi en tant que futur papa/maman",
  "As-tu déjà fait l’amour dans le lit de tes parents ?",
  "Comment réagirais-tu si ton enfant se droguait ?",
  "Si ta copine/copain te trompe, tu préfères qu'iel te l’avoue ?",
  "Qu’est-ce qui est rédhibitoire chez une fille/un gars pour toi ?",
  "Pourrais-tu aider un proche à cacher un cadavre sans poser de question ? Si oui, qui ?",
  "Quel est le truc que tu faisais ado dont tu as honte aujourd'hui ?",
  " Si tu pouvais voyager dans le temps pour assister à UN événement passé, ce serait quoi ?",
  "As-tu plus peur du vide / de la hauteur ou des endroits profonds / sous la terre ?",
  "Si tu ne pouvais plus regarder qu'un seul film, ce serait lequel ?",
  "Si tu pouvais voir n'importe quel·le artiste ou groupe en concert, mort ou vivant, qui choisirais-tu ?",
  "De toutes vos connaissances en commun, avec qui aimerais-tu coucher ?",
  "Si tu pouvais obtenir de nouvelles connaissances ou compétences sans rien faire, que choisirais-tu ?",
  "As-tu déjà couché avec quelqu'un présent dans cette pièce ?",
  "T'es-tu déjà fait trahir par un·e ami·e ? Comment as-tu réagi ?",
  "Cite trois trucs que tu n'aimes pas alors que la majorité des gens adorent ",
  "Si tu avais le pouvoir de tuer quelqu'un que tu connais à distance, est-ce que tu l'utiliserais ?",
  "Crois-tu aux esprits ? Si oui, en as-tu peur ?",
  "Quel est l'endroit le plus insolite où tu as pratiqué le sexe ? Quel autre endroit aimerais-tu tester ?",
  "Si tu pouvais parler aux animaux d'une espèce seulement, laquelle choisirais-tu ?",
  "Raconte ta pire galère de soirée, celle dont tu te souviendras toujours ",
  "As-tu une attirance que tu considères honteuse pour une personne, célébrité ou non ?",
  "Si tu pouvais revenir en arrière pour changer une décision que tu as prise, ce serait quoi ?",
  "As-tu déjà arrêté un rapport sexuel parce que tu t'ennuyais ? ",
  "As-tu déjà été viré·e de cours ou pris une heure de colle au collège/lycée ? Si oui, pourquoi ?",
  "Comment réagirais-tu en cas d'apocalypse zombie ? Tenterais-tu de survivre ou laisserais-tu tomber ?",
  "Quel est le jeu dont tu ne pourrais jamais te lasser ?",
  "je n'ai jamais voulu être du sexe opposé",
  "je n'ai jamais été battu",
  "je ne suis jamais resté eveillé pour reste rà parler avec une personne",
  "je n'ai jamais été toxique",
  "je n'ai jamais ",
  "je n'ai jamais espérer + avec une personne",
  "etat des lieux",
  "la musique qui te fzis le + pense a un ex",
  "Défi : fais la chaise 2 min / fais la planche 2 min",
  "La dernière personne que tu as pécho (son nom)",
  "Laisse la personne à ta droite décidé du message et de la personne à qui tu l’envoie",
  "Je n’ai jamais pris la pilule du lendemain",
  "Je n’ai jamais eu le Covid",
  "Je n’ai jamais vomi",
];
