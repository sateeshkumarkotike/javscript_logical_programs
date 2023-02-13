let arr1 =[ 
    { id:1, name: 'Shubham' },
    { id:3, name: 'Vikas' }, 
    { id:2, name: 'Akshay' },
    { id:4, name: 'Surendra' }
    ]
  
    let obj ={}

    for(let i=0;i<=arr1.length-1;i++){
        obj[arr1[i].name]=arr1[i].id;
    }

    console.log(obj);
  