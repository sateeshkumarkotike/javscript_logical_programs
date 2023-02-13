let string = 'madam';

function stringPalindrom(string){
     let constValues = string.split('');
    //  console.log(constValues)
     let reverseArray = constValues.reverse();
    //  console.log(reverseArray);
     let finalSting = reverseArray.join('');
     console.log(finalSting);
     return finalSting;

}

const output=stringPalindrom(string);
if(string===output){
    console.log('string is palindrom');
}else{
    console.log('string id not palindrom');
}