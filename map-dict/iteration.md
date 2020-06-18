


```
 std::map<std::string, int>::iterator it = mapOfWordCount.begin();
    // Iterate over the map using Iterator till end.
    while (it != mapOfWordCount.end())
    {

    }
   
```
- Use rang based for loop
```
 for (auto const& elem : map) {
    if (elem.first == elem.second) 
        lucky = elem.first;
  }
```