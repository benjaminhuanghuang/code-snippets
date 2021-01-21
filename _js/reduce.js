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
