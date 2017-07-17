'use strict';
var map_to_three_multiples = function(collections){
  var result=[];
  for(let i=0;i<collections.length;i++)
    result[i]=collections[i]*3;
  return result;
};
var collectionA=[1,3,5,4,9];
var result=map_to_three_multiples(collectionA);
console.log(result);

module.exports = map_to_three_multiples;
