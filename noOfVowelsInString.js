const vowels = ['a','e','i','o','u'];

function countVowles(strig){
    let count =0;
    for(let i=0;i<=strig.toLowerCase().length-1;i++){
        if(vowels.includes(strig[i])){
            count =count+1;
        }
    }
    return count;
};

const count = countVowles('sateeshkumar');
console.log(count);