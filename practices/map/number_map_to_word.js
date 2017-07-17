'use strict';
var number_map_to_word = function(collection){
  var result=[];
  var s='';
  for(let i=0;i<collection.length;i++)
    result[i]=String.fromCharCode(collection[i]+96)
  return result;
};
var collection=[1,3,5,7,9];
var result=number_map_to_word(collection);
console.log(result)

module.exports = number_map_to_word;
