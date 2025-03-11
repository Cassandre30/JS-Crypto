function what_are_words_worth () {
    let smtg = prompt("Enter something");
    console.log(smtg.length);
    return confirm ("The word "+smtg+" contains "+smtg.length+" letters")
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
function count_words_by(string_of_words, letter = ' ') {
    if (typeof string_of_words !== 'string' || typeof letter !== 'string') {
      return 0;
    }
    
    let count = 0;
    let isWord = false;
    
    for (let i = 0; i < string_of_words.length; i++) {
      if (string_of_words[i] !== letter) {
        if (!isWord) {
          count++;
          isWord = true;
        }
      } else {
        isWord = false;
      }
    }
    
    return count;
  }
  // Tests
  console.group('Partie 3');
  console.assert(count_words_by('Turing believes machines think', 'i') === 5);
  console.assert(count_words_by('Turingbelievesmachinesthink', 'i') === 5);
  console.assert(count_words_by('Therefore machines do not think', 'e') === 5);
  console.groupEnd();
  
  function is_a_vowel(letter) {
    const vowels = 'aeiouAEIOU';
    return vowels.includes(letter);
  }
  
  function count_vowels(string_of_words) {
    let count = 0;
    for (let char of string_of_words) {
      if (is_a_vowel(char)) {
        count++;
      }
    }
    return count;
  }
