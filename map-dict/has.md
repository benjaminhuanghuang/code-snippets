### C++
```
std::map<int, std::vector<std::string>> counter;
counter[grade]    // will create item automatically
```

```
 if(counter.find(grade) == counter.end())
 {

 }

 if (!counter.count(grade))
  {
    return std::vector<std::string>();
  }

  return roster.at(grade);
```

### JavaScript
```
  users = new Map();

  
  if(users.has(name))
  {

  }
```

### Java
```
  Map<Integer, Integer> map = new HashMap<>();
  
  if (map.containsKey(nums[i])) {
  }

  if(map.containsValue(3)) {
  }
```


### C#

