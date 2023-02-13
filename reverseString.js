// method 1
function reverString(str){
    if(!str||typeof str !=='string'){
        return 'not valid'
    }
    let revArray = [];
    for(let i=str.length-1;i>=0;i--){
        revArray.push(str[i]);
    }
    // for(let i=0;i<=str.length-1;i++){
    //     revArray.push(str[i]);
    // }
    return revArray.join('');
}
let rev = reverString('sateesh');
console.log(rev);

// method 2
function revString2(str){
    return str.split('').reverse().join('');
}

const revString = revString2('sateesh');
console.log(revString)
