//These are all the same, basically.
let one = 'This is a string.'
let two = "This is also a string."
let three = `Again, this is a string.`

/*The main difference between them is that the backtick can be used to place
variables within a string */

let four = `${one}${two}`
console.log(four);

//output: "This is a string.This is also a string." on the console log.

/* another way to combine strings is with the " + " sign. */

let five = one + two;
console.log(five);

//output is exactly the same as before.

/* use the backslash to escape characters so they are accounted as strings */

let six = 'I don\'t know whay you\'re talking about.'

//To display a backslash within a string, use double backslash.

let seven = "This is a backslash \\";


