
//Simple math functions.

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function cubed1(num) {
    return num ** 3;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

console.log(cubed(3));
console.log(cubed2(3));
console.log(factorial(12));

//Function properties regarding outer and local variables.

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable

//verifying if the parameter is missing, if no arguments were passed etc.

function showMessage(text) {
  // ...

  if (text === undefined) { // if the parameter is missing
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message

//another way

function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown