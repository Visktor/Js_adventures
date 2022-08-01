// THIS DOCUMENT WAS CREATED WITH THE SOLE INTENT OF REGISTERING IMPORTANT ARRAY OPERATIONS AND METHODS.

//How to get the last element of an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

//create an unordered list with all the array elements:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits2.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits2[i] + "</li>";
}
text += "</ul>";

//add lemon to the last position in fruits:
const fruits3 = ["Banana", "Orange", "Apple"];
fruits3[fruits3.length] = "Lemon";

// remember when you use 'typeof' on an array it will return 'object' so you must use this instead:
Array.isArray(fruits);

// OR:
fruits instanceof Array; //Will return true 


// .tostring() and .join() work pretty much the same way except with the latter you can specify the separator.

//Popping items out of an array, or pushing items into an array:
fruits.pop(); //removes the last element of the array and returns the 'popped out' value.

//The push() method adds a new element to an array (at the end):
fruits.push("Kiwi"); // will add kiwi as the last element on fruits array. It also returns the array's length.


//The shift() method removes the first array element and "shifts" all other elements to a lower index:

fruits.shift(); // the element on the position 4 will go to pos 3 and so on.
//The shift() method returns the value that was "shifted out":

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
fruits.unshift("Lemon")// will insert lemon at the start and push all positions up one.
//also returns the new array length.

//How to easily append a new Item at the end of the array:
fruits[fruits.length] = "Kiwi";

//The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); //always returns a new array. Doesn't change the original arrays.
// concatenating multiple arrays: arr1.concat(arr2, arr3);


