'use strict';
var rank_desc = function(collection){
  var result=[];
  var change;
  for(let i=0;i<collection.length;i++)
  {for(let j=0;j<collection.length;j++)
    if(collection[j]>collection[j+1])
    {change=collection[j];
      collection[j]=collection[j+1];
      collection[j+1]=change;}}
  return collection;
};
var collection=[77,33,2,4,2];
var result=rank_desc(collection);
console.log(result);
module.exports = rank_desc;
