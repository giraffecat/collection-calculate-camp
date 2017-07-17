'use strict';

function compute_median(collection) {
  var sort=collection;
  var change;
  for(let i=0;i<sort.length;i++)
    for(let j=0;j<sort.length;j++)
      if(sort[j]>sort[j+1])
      {change=sort[j];
        sort[j]=sort[j+1];
        sort[j+1]=change;}
  var mediannum=parseInt(sort.length/2);
  var median=sort[mediannum];
  if(sort.length%2==0)
    median=(sort[mediannum]+sort[mediannum-1])/2;
  return median;

}

module.exports = compute_median;


