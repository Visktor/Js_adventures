//THIS DOCUMENT WAS MADE WITH THE SOLE INTENTION OF DOCUMENTING AND EXPERIMENTING WITH JAVASCRIPT LOOPS


//This is the "for... of" type loop:
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
//Will get the first value of the 'cats' array, assign it to cat, then run the code inside the curly brackets repeatedly 
//until it's reached the end of the array.



/* You can use map() to do something to each item in a collection and create a new collection containing
 the changed items: */

 function toUpper(string) {
  return string.toUpperCase();
}

const cats2 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
const upperCats = cats2.map(toUpper);
console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

//Filter:

function lCat(cat) {
  return cat.startsWith('L');
}

const cats3 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats3.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]


