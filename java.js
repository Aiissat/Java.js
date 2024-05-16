//Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.

let phrase="aissatou est rew"

function inverseurChaine (phrase) {
    return phrase.split('').reverse().join('') ;

}

console.log(inverseurChaine(phrase))

//Créez une fonction qui compte le nombre de caractères dans une chaîne.

function compterCaracteres (phrase) {
    return phrase.length;
    
}

console.log (compterCaracteres(phrase)) ;


//implémentez une fonction qui met en majuscule la première lettre de chaque mot dans une phrase.

function mettreMajusculesPremieresLettres(phrase) {
    let tab = phrase.split(" ")
    
    for (let index = 0; index < tab.length; index++) {
        tab[index] = tab[index].charAt(0).toUpperCase() + tab[index].slice(1)
    }

    return tab.join(' ')

}

console.log(mettreMajusculesPremieresLettres(phrase))


function minAndMax (array) {
    let min = array[0]
    let max = array[0]

    for (let index = 0; index < array.length; index++) {
        if (array[index] < min) {
            min = array[index]
        }
        if (array[index] > max) {
            max = array[index]
        }
    }

    return [min, max]
}

console.log(minAndMax([12, 4, 67, 5, 8, 98]))

//créez une fonction qui calcule la somme de tous les éléments d'un tableau.

function calculerSomme(tableau) {

let somme = 0

for (let index = 0; index < tableau.length; index++) {
    somme += tableau[index];
    
}

return somme;

}

console.log(calculerSomme([12, 4, 67, 5, 8, 98]))

//Implémentez une fonction qui filtre les éléments d'un tableau en fonction d'une condition donnée.

function filtrerTableau(taleau,condition){

    const tableauFiltre = taleau.filter(élément => eval('élément' + condition));

    return tableauFiltre;

}

console.log(filtrerTableau(([12, 4, 67, 5, 8, 98]), ' > 13'))
    
//Écrivez une fonction pour calculer la factorielle d'un nombre donné.

function calculerFActorielleIterative(n) {

let resultat = 1
for (let je = 2; je <= n; je++ ) {

    resultat *= je

}

return resultat;


}

console.log(calculerFActorielleIterative(5))


//Créez une fonction pour vérifier si un nombre est premier ou non.

function estNombrePremier(nombre) {

    if (nombre <= 1) {
        return false;

    }


    for (let index = 2; index < nombre; index++) {
        if (nombre % index === 0) {
            return false
        } 
    }


    return true

}

console.log(estNombrePremier(233))

//Implémentez une fonction pour générer la séquence de Fibonacci jusqu'à un nombre donné de termes. (recherche sur le net)

function générateurFibonacci(nbTermes) {

    if (nbTermes < 2) {
        return []

    }


    let sequence = [0, 1];

for (let je = 2; je < nbTermes; je++ ) {
    let prochainTerme = sequence[je - 1] + sequence [je - 2];
    sequence.push(prochainTerme);

}

return sequence

}


console.log(générateurFibonacci(8))

