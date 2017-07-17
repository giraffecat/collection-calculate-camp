'use strict';

function compare_collections(collection_a, collection_b) {
  var flag = 1;
  for (let i = 0; i < collection_a.length; i++) {
    if (collection_a[i] !== collection_b[i])
      flag = 0;
  }
  if (flag)
    return true;
  else return false;
}


module.exports = compare_collections;


