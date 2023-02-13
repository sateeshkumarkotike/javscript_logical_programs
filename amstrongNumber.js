let number =153;
let temp = number;
let sum = 0;

while(number>0){
    let remainder = number%10;
    sum = sum+(remainder*remainder*remainder);
    number= number/10;
}
if (sum==temp){
    console.log(`number ${temp} amstrong number`);
}else{
    console.log(`number ${temp} is not amstrong number`);
}
