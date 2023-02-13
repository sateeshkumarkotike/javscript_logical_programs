let arr = [1,2,3,4,5,6,7];

function removeItemsFromArray(arr,removableItem){
    let newArray = [];
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]!==removableItem){
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

const newArray = removeItemsFromArray(arr,3);
console.log(newArray);