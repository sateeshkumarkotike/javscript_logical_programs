let arr = ['apple','banana','mango','apple','mango','mango'];

// method 1
let duplicate  = arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
})
console.log(duplicate);

// method 2
function removeDuplicates(arr){
    let unique  = [];
    arr.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element);
        }
    });
    return unique;
}

const removed = removeDuplicates(arr);
console.log(removed);

// method 3
function removeDuplicates2(arr){
    let unique = [];
    for(let i=0;i<=arr.length-1;i++){
        if(unique.indexOf(arr[i])=== -1){
            unique.push(arr[i]);
        }
    }
    return unique;
}

const removed2 = removeDuplicates2(arr);
console.log(removed2);