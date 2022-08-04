let num = Number(prompt("First number - "));
let secondNum = Number(prompt("Second number- "));

outer:for (x = num; x < secondNum; x++){
   for (y = 2; y < x; y++){
    if (x % y === 0){
        continue outer;
    }
   }
console.log(x)
}

