var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
var chain=chain.replace(/-/g,'');
var chain=chain.replace(/>/g,' ');
var sort=chain.split(' ');
console.log(sort)
for(let i=0;i<sort.length;i++)
  sort[i]=parseInt(sort[i]);
console.log(sort)


