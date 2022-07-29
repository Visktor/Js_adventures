// COMPARATORS AND CONDITIONS

let age = 5;

if (!(age >= 14 && age <= 90)) {
};

if (age < 14 || age > 90) {

}

// in JS the if statements work similarly as with python. Except you have to specify the variables you're comparing or 
// testing every single time. 

// The structure switch works similarly, where 'switch' and 'case' are the keywords that specify the conditions as with the 'if' statement.
// 'case' works almost like elif, adding conditions everytime, except it must be used from the first condiction.
// Whereas 'default' works exactly like 'else', specifying what happens if none of those conditions turn out to be true.

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:      
    para.textContent = '';
 };

// below is an exemple of another type of synthax for representing conditions. The " ? ".

let age2 = prompt('age?', 18);

let message = (age2 < 3) ? 'Hi, baby!' :
  (age2 < 18) ? 'Hello!' :
  (age2 < 100) ? 'Greetings!' :

  alert( message );

// exercise 01:

let number1 = prompt('What is the number?', '');
(number1 < 0) ? alert('-1') : (number1 == 0) ? alert('0') : alert('1');

// Interesting application of Switch:

// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
	// January, February, March
	case 0:
	case 1:
	case 2:
		console.log("Winter");
		break;
	// April, May, June
	case 3:
	case 4:
	case 5:
		console.log("Spring");
		break;
	// July, August, September
	case 6:
	case 7:
	case 8:
		console.log("Summer");
		break;
	// October, November, December
	case 9:
	case 10:
	case 11:
		console.log("Autumn");
		break;
	default:
    console.log("Something went wrong.");
}

