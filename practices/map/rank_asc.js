'use strict';
var rank_asc = function(collection){
  var result=[];
  var change;
  for(let i=0;i<collection.length;i++)
    for(let j=0;j<collection.length;j++)
  if(collection[j]<collection[j+1])
    {change=collection[j];
  collection[j]=collection[j+1];
  collection[j+1]=change;}
  return collection;
};
var collection=[55,54,99,44,33];
var result=rank_asc(collection);
console.log(result);
module.exports = rank_asc;
