// method 1
function removeDuplicatesFromString(str){
    let unique = '';
    for(let i =0;i<=str.length-1;i++){
        if(unique.includes(str[i])==false){
            unique = unique+str[i];
        }
    }
    return unique;

}

const remaingString = removeDuplicatesFromString('sateesha')
console.log(remaingString);

//method 2
function removeDuplicates2(str){
  let unique = '';
  for(let chr of str){
    if(unique.includes(chr)===false){
        unique += chr;
    }
  }
  return unique;
}


const remaingString2 = removeDuplicates2('sateesh kumar naidu');
console.log(remaingString2)