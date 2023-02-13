let str = 'hi how are you all';

function reverseWordsInSentence(str){
  let arr = str.split(' ');
  console.log(arr);
  let reversed = arr.map((element)=>{
     return element.split('').reverse().join('');
  });
  console.log(reversed);
  return reversed.join(' ')

}

const output = reverseWordsInSentence(str);
console.log(output);