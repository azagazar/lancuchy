var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();

console.log(animalUpperCased);

var textAfter = text.replace('Papugi', animalUpperCased);
console.log(textAfter.length/2);

var textSubstr = textAfter.substr(0, 50);

console.log(textSubstr);