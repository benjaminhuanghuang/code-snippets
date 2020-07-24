### C++
- Customize Sort
```
  multiset<int, greater<int>> greadterSet;    // largest -> smallest

  multiset<int, less<int>> lessSet;           // smallest -> largest 

  multiset<int> defaultSet;                   // use less<> by default
```
- Sample
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
- lower_bound and upper_bound
```
  #include <set>

  multiset<long> s;   // use less<> by default

  auto ceil = s.lower_bound(n);   // first element that is not less than val. (>=val)
  auto ceil2 = s.upper_bound (n); //  iterator to the first element that is greater than val. (>val)
 
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