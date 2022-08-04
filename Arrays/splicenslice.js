/* The splice() can be used to add or remove items from an array, depending on the parameters supplied.

The slice() method slices out a piece of an array, effectively creating a new array with the sliced elements.*/
//This process doesn't leave behind empty spots on the original array.

//note that both these methods WILL modify the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //begin from position 2 (orange), remove 0 items, add the two following strings.

const example = ["01", "02", "03", "04", "05", "06",];
example.splice(4, 2, "07", "08"); //from position 4, remove 2 elements and add in two values. 
console.log(example);

const example2 = ["watermelon", "papaya", "pineapple", "lemon", "grape", "dragonfruit"]
console.log(example2.slice(2)); //from position 2, slice the original and create a new one with sliced elements.
