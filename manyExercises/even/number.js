let x = prompt('Please digit a number greater than 100. - ')
while ((x < 100) && (x != 0)){
    if (x === null || x === undefined){
        break;
    }
    x = prompt('The previous number was under 100, please try again. - ')
}
