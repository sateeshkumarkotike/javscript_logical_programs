
let num = 4;

function factorialNumber(num){
    let fact = 1;
    for(let i=num;i>0;i--){
        fact = fact*i;
    }
    return fact;
}

const output = factorialNumber(num);
console.log(output);
