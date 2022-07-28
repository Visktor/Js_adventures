let example = 'Example String Origin';

// The length property returns the length of the string.

let len = example.length;
 console.log(len);
//will return the ammount of characters contained within the variable 'example'

/* concat() as with " + ", can concatanate two strings */

let str = "Apple, Banana, Kiwi" // Learning how to slice pieces of strings.
let slc = str.slice(7);
console.log(slc); //it's going to output Banana, Kiwi. That's because it counts from 0.

/* A - 0, P - 1, P - 2, L - 3, E - 4 ... */ 
//It also counts spaces and symbols.

let unspace = str.replace(" ", "");
console.log(unspace); // This will replace only the first space with nothing. It will erase the first space, basically.

let gunspace = str.replace(/ /g, ""); //This will replace ALL the spaces with the string with nothing. Erase ALL the spaces.
console.log(gunspace);

let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray);

