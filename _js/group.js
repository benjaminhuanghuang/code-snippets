
const reGroup = (list, key) => {
  const newGroup = [];
  list.forEach(item => {
    keyValue = item['key']
    inGroup = newGroup.filter((group) => group['key'] === keyValue)
    if(inGroup.length > 0)
      inGroup[0].groupItems.push(treaty)
    else
      newGroup.push({[key]: keyValue, groupItems: [item]})
  });
  return newGroup;
};


const reGroup = (list, key) => {
  const newGroup = {};
  list.forEach(item => {
      const newItem = Object.assign({}, item);
      delete newItem[key];
      newGroup[item[key]] = newGroup[item[key]] || [];
      newGroup[item[key]].push(newItem);
  });
  return newGroup;
};



Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    const val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
};
