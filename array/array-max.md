### Cpp
std::max_element() returns an iterator pointing to the element with the largest value in the range [first,last).
```
  #include <algorithm>
  
  int maxCandy = *std::max_element(candies.begin(), candies.end());
```