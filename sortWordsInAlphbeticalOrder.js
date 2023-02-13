let string = 'hello are you all';
let words = string.split(' ');
words.sort();
console.log(words);
for(let word of words){
    console.log(word);
}