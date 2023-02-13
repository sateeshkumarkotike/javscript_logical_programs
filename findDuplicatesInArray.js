const numbers = [1, 2, 3, 2, 2, 4, 5, 5, 6];

const duplicate = numbers.filter((item,index)=>{
    return numbers.indexOf(item)!==index;
})
console.log(duplicate);

const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));

console.log(duplicates);

var arr = [ 
    {key : '11', value : '1100', hashKey : '00X' },
    {key : '22', value : '2200', hashKey : '018' }
  ];
  
  //convert
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    result[arr[i].key] = arr[i].value;
  }
  console.log(result);

  