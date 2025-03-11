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
  console.group('Partie 4');
  console.assert(count_vowels('Turing believes machines think') === 10);
  console.assert(count_vowels('Turing lies with men') === 6);
  console.assert(count_vowels('Therefore machines do not think') === 10);
  console.groupEnd();
  
  const count_consonants = (string_of_words) => string_of_words.replace(new RegExp(`[${vowels.join('')} ]`, 'gi'), '').length;

  function remove(string_of_words, caracter) {
    return string_of_words.split(caracter).join('');
}
console.group('Partie 6');
console.assert(remove('Turing believes machines think','z') === 'Turing believes machines think');
console.assert(remove('Turing believes machines think','e') === 'Turing blivs machins think');
console.assert(remove('Turing lies with men', 'i') === 'Turng les wth men');
console.assert(remove('Therefore machines do not think', ' ') === 'Thereforemachinesdonotthink');
console.assert(remove('aeeiuouyuioz', 'o') === 'aeeiuuyuiz');
console.assert(remove('', '') === '');
console.assert(remove('    ', ' ') === '');
console.assert(remove('ccccc', 'c') === '');
console.assert(remove('c c c c c', 'c') === '    ');
console.groupEnd();

function remove_many(string_of_words, characters) {
    let result = '';
    for (let char of string_of_words) {
        if (!characters.includes(char)) {
            result += char;
        }
    }
    return result;
}
