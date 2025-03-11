function what_are_words_worth () {
    let smtg = prompt("Enter something");
    console.log(smtg.length);
    return confirm ("The word "+smtg+" contains "+smtg.length+" letters")
}
