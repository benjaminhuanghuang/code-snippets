### C++
```
  arr.insert(arr.begin() + i, n);
```



### Python
```
  list.insert(i, elem)
```

### JavaScript

array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
```
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');  // inserts at index 1
  console.log(months);
  // expected output: Array ["Jan", "Feb", "March", "April", "June"]

  months.splice(4, 1, 'May');  // replaces 1 element at index 4
  console.log(months);
```

### Go
```
  a = append(a[:index+1], a[index:]...)
```