

### C++
Use the iterator
```
 std::map<std::string, int>::iterator it = mapOfWordCount.begin();
  // Iterate over the map using Iterator till end.
  while (it != mapOfWordCount.end())
  {

  }
   
```
- Use range based for loop
```
 for (auto const& elem : map) {
    if (elem.first == elem.second) 
        lucky = elem.first;
  }
```
- Use range based pair for loop 
```
 for (pair<const string, int> elem : map) {
    if (elem.first == elem.second) 
        lucky = elem.first;
  }
```


### JavaScript
