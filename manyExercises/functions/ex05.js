let userInput = 15;

let x = 1;

while (x < userInput) {
    x++;
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('bizzbuzz')
    }

    else if (x % 3 === 0) {
        console.log('bizz')
    }
    
    else if (x % 5 === 0) {
        console.log('buzz')
    }

    else console.log(x);
}