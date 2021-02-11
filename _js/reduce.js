// sum
items =[
  {
    key: 1,
    amount: 2
  },
  {
    key: 1,
    amount: 3
  }
]

items.reduce((accumulate, item) => accumulate + item.amount, 0);

/*
[{id: 1, name:"test"}]   to {
  1: {
    id: 1
    name: 'test'
  }
}
*/
export const flatternArr = (arr) => {
  // map is the final obj
  return arr.reduce((map, item) => {
    map[item.id] = item
    return map
  }, {})
}