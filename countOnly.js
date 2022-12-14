//given an array `allItems` and an object `itemsToCount`, it will return an object containing counts of everything that the input object listed.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    //console.log(item);
  }

  return results;
};

module.exports = countOnly;
