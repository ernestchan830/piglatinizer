$( "document" ).ready(function() {

$("#button").click(function() {
    var inputValue = $('.input').val();
    $('output').text(inputValue)
    console.log(inputValue)
    var vowels = ["a","e","i","o","u"];
    var firstLetter = inputValue[0];

    if (vowels.includes(firstLetter)){
        $('output').text('start with vowel');

     }

        $('output').text('start with consonant');

})

});


//     function sliceFromSecond(word) {
//      return word.slice(1);

// }

//     function firstLetterAy(word) {
//      return word[0] + "ay";
// }

// function checkVowel(word) {
//   var vowels = ["a","e","i","o","u"];
//   var firstLetter = word[0];

//   if (vowels.includes(firstLetter)){
//     return 'start with vowel';

//   }
//   return 'start with consonant';

// }