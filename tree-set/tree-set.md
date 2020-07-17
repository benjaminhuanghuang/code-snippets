### C++
```
  #include <set>


  multiset<long> s;
  
  
  s.erase(s.find(nums[i]));

  auto it = s.insert(nums[i]);

  if (it != begin(s) && *it - *prev(it) <= t)
    return true;
  if (next(it) != end(s) && *next(it) - *it <= t)
    return true;


```


### Java

```
  import java.util.TreeSet;


  TreeSet<Long> set = new TreeSet<>();

  Long floor = set.floor(n);   // largest number small than n
  Long ceil = set.ceiling(n);  // smallest number larger than n


  set.add(n);

  set.remove(n);
  
```