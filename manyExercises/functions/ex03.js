// Make a function that returns a string with only it's first letter capitalized.

function capitalize(str){
   str = str.toLowerCase();
   let capitalLetter = str[0].toUpperCase();
   let newString = str.substring(1);
   str = `${capitalLetter}${newString}`;
   return str;
}

let str1 = 'CAPITALIZE THIS'

console.log(capitalize(str1));