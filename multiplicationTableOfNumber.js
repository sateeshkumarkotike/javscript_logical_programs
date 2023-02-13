
let number =3;

function multiplicationTableOfNumber(num){
   for(let i=1;i<=10;i++){
    let result = i*num;
      console.log(` ${num}*${i} = ${result}`);
   }
}

multiplicationTableOfNumber(number);