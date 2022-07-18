"use strict"
let arr=[1,4,5,6]
//filter
function filter(arr,filterFunc) {
    let arr3=[]
    for(let i=0;i<arr.length;i++){
        
         if( filterFunc(arr[i])){
              arr3.push(arr[i]);
         }
    }
    return arr3;
  
  }
  const filterresult= filter(arr,num=> num%2===0);
  console.log(filterresult);
  
  