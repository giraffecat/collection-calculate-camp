'use strict';
var number_map_to_word_over_26 = function(collection){
  var result=[];
  var s='';
  for(let i=0;i<collection.length;i++){
    if(collection[i]>26)
    {collection[i]=collection[i]%26;
    result[i]='a'+String.fromCharCode(collection[i]+96)}
  else result[i]=String.fromCharCode(collection[i]+96)
  }
  return result;
};
var collection=[55,44,33];
var result=number_map_to_word_over_26(collection);
console.log(result);
module.exports = number_map_to_word_over_26;
