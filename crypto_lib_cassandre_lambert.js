function what_are_words_worth () {
    let smtg = prompt("Enter something");
    console.log(smtg.length);
    return confirm ("The word "+smtg+" contains "+smtg.length+" words")
}

function count_words(string_of_words) {
    let words = string_of_words.split(' ');  // Séparer la phrase en mots
    let count = 0;

    // Boucle pour parcourir les mots
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== '') {  // Vérifie si le mot n'est pas une chaîne vide
            count++;
        }
    }
    return count;
}
