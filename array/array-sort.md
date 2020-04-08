## Array sort
### C++
Use std::sort() and lambda function
```
  std::sort(nums.begin(), nums.end());
```
### C
```

```
### Go
```
  
```
### Java
use Arrays.sort() and Comparator<T>

```
  
```
### C#
```  
  Array.Sort(nums);
```
### Python
```
  nums.sort()
```

### JavaScript
Use Array.prototype.sort()
The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
```
  const array1 = [1, 30, 4, 21, 100000];
  array1.sort();
  console.log(array1);    //[1, 100000, 21, 30, 4]
```
### TypeScript
```
```


## Array sort
### C++
Use std::sort() and lambda function
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
```
  sort.Slice(intervals, func(i int, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
```
### Java
use Arrays.sort() and Comparator<T>

```
  Arrays.sort(intervals, new Comparator<Interval>() {
    public int compare(Interval a, Interval b) {
      return a.start - b.start;
    }
  });
```
### C#
Use Array.sort() and lambda function
```  
  Array.Sort(intervals, (i1, i2) => i1.start - i2.start);
```
### Python
Use sorted method and lambda function
```
  intervals = sorted(intervals, key=lambda x: x.start)
```

### JavaScript
Use Array.prototype.sort() and arrow function
```
  intervals.sort((a,b)=> {
    return a[0] -  b[0];
  })
```
### TypeScript
```
```