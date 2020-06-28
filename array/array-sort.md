## Array sort
### C++
- Use std::sort()
```
  std::sort(nums.begin(), nums.end());
```

- Use std::sort() and reverse iterators
```
	std::sort(vec.rbegin(), vec.rend());
```
- Use comp
````
  sort(begin(A), end(A), greater<int>());
```

- Use std::sort() and lambda function
```
  std::sort(intervals.begin(), intervals.end(),
    [](const vector<int> &a, const vector<int> &b) {
      return a[0] < b[0];
  });
```

### C
```

```
### Go
Use sort.Slice
```
  sort.Slice(intervals, func(i int, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
```
### Java
- Use Arrays.sort() and reverseOrder()
```
Arrays.sort(arr, Collections.reverseOrder()); 
```

- Use Arrays.sort() and Comparator<T>
```
  Arrays.sort(intervals, new Comparator<Interval>() {
    public int compare(Interval a, Interval b) {
      return a.start - b.start;
    }
  });
````
  
```
- Use Collections.sort()
Collections.reverseOrder() to sort a list in descending order.
```
  // Create a list of Integers 
  ArrayList<Integer> al = new ArrayList<Integer>(); 
  al.add(30); 
  al.add(20); 
  al.add(10); 
  al.add(40); 
  al.add(50); 

  Collections.sort(al, Collections.reverseOrder());
```
### C#
- Use Array.sort()
```  
  Array.Sort(nums);
```

### Python
- Use list.sort(key=..., reverse=...)
sort() doesn't return any value
```
  nums.sort()

  nums.sort(reverse=True)          # descending

  list.sort(key=lambda r:r[0])     # use comparison
```

- Use sorted
sorted() returns an iterable list
```
  sorted("This is a test string from Andrew".split(), key=str.lower)

  sorted(student_tuples, key=lambda student: student[2])
  sorted(student_objects, key=lambda student: student.age) 

  intervals = sorted(intervals, key=lambda x: x.start)
```

### JavaScript
- Use Array.prototype.sort()
The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
```
  const array1 = [1, 30, 4, 21, 100000];
  array1.sort();
  console.log(array1);    //[1, 100000, 21, 30, 4]
```

- Sort with compare Function
```
  var numbers = [4, 2, 5, 1, 3];
  numbers.sort(function(a, b) {
    return a - b;
  })

  // Sort object
  intervals.sort((a,b)=> {
    return a[0] -  b[0];
  })
```

### TypeScript
```
```

