'use strict';

function compute_average(collection) {
  var sum=0;
  for(let item of collection)
  sum=sum+item;
  var result=sum/collection.length;
  return result;
}
module.exports = compute_average;

