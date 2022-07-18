"use strict"
let arr=[1,4,5,6]
//map
 function map(arr,mapFunc) {

   let arr2=[];

   for(let i=0;i<arr.length;i++){
        const result= mapFunc(arr[i]);
        arr2.push(result);
   }

   return arr2;
}
const sqArr= map(arr,num=>num**2);

console.log(sqArr);

