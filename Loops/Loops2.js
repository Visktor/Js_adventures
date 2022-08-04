// make a for loop that outputs a different result when the last element of the array arrives.

const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {   // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`
  } else {
    myFavoriteCats += `${cats[i]}, `
  }
}

console.log(myFavoriteCats);     // "My cats are called Pete, Biggles, and Jasmine."
