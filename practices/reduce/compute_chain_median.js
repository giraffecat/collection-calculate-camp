'use strict';

function compute_chain_median(chain) {
  var chain=chain.replace(/-/g,'');
  var chain=chain.replace(/>/g,' ');
  var sort=chain.split(' ');
  for(let i=0;i<sort.length;i++)
    sort[i]=parseInt(sort[i]);
  var change;
   for(let i=0;i<sort.length;i++)
     for(let j=0;j<sort.length;j++)
       if(sort[j]>sort[j+1])
       {change=sort[j];
         sort[j]=sort[j+1];
         sort[j+1]=change;}
   var mediannum=sort.length/2;
   var median=sort[mediannum];
   if(sort.length%2==0)
     median=(sort[mediannum]+sort[mediannum-1])/2;
       return median;
}
var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
var result=compute_chain_median(chain);
console.log(result)

module.exports = compute_chain_median;
