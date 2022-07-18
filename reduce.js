"use strict"
let arr=[1,4,5,6]
//reduce
const sumReducer=(accumulator,currval)=>accumulator+currval;

function reduce(arr,reducer,initalValue) {

  let accumulator=initalValue===undefined?0:initalValue;

  for(let i=0;i<arr.length;i++){

    accumulator=reducer(accumulator,arr[i]);

  }

  return accumulator;
}

const reduceResult= reduce(arr,sumReducer);
console.log(reduceResult);