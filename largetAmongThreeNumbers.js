let number1 =30;
let number2 =12;
let number3 =20;

let largetNumber;
if(number1>=number2 && number1>=number3){
    largetNumber = number1;
}else if(number2>=number1 && number2>=number3){
    largetNumber = number2;
}else {
    largetNumber =number3;
}

console.log(largetNumber);