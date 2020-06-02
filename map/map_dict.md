# Hash map / Dictionary
# Create map
### C++
```
  #include <map>
  using namespace std;
  // C++ 11
  map<int, char> m = {
    {1, 'a'}, 
    {3, 'b'}, 
    {5, 'c'}, 
    {7, 'd'}
  };

  // alias
  typedef std::map<char, int> nucle_map;
```
### Java
```

```


### C#
```  

```
### Python
```

```
### JavaScript
Method 1
```
var first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
```

Method 2
```
var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}
```
### TypeScript
```
// Init
let map = new Map([
  [ "A", 1 ],
  [ "B", 2 ],
  [ "C", 3 ]
]);

// Using Object.entries
const expectedCounts = new Map(Object.entries(
  { car: 1, 
    ':': 2, 
    carpet: 1
  }))   
```
## Access item
### C++
```
std::map<int, std::vector<std::string>> _roster;
_roster[grade]    // will create item automatically
```
```
 if(_roster.find(grade) == _roster.end())
 {

 }

 if (!_roster.count(grade))
  {
    return std::vector<std::string>();
  }

  return _roster.at(grade);
```
## Iteration
### C++
```
#include <iostream>
#include <unordered_map>
using namespace std;

unordered_map<int, string> m =
{
  {1, "one"},
  {2, "two"},
  {3, "three"}
};

// C++ 11
for (auto const &pair: m)
  std::cout << "{" << pair.first << " -> " << pair.second << "}\n";

// C++ 17
for( auto const& [key, val] : m )
{

}
```
Using iterator
```
std::map<char,int> mymap;

mymap['b'] = 100;
mymap['a'] = 200;
mymap['c'] = 300;

for (std::map<char,int>::iterator it=mymap.begin(); it!=mymap.end(); ++it)
  std::cout << it->first << " => " << it->second << '\n';
```
### Java
Using map.keySet(), map.values(), map.entrySet()

```
  HashMap<Character, Integer> map = new HashMap<Character, Integer>();
  
  for (Character d : map.keySet()) {

  }

  for (Integer i : map.values()) {

  }

  HashMap<String, Integer> map = new HashMap<>();
  int max = 0;
  for (Map.Entry<String, Integer> entry : map.entrySet()) {
      if (entry.getValue() > max) {
          max = entry.getValue();
          String mcw = entry.getKey();
      }
  }
  
```
### C#
```
  
```

### Python
```
  for k, v in thisdict.items():
    print(k, v)
```
### Go
```
  var employee = map[string]int{
      "Mark": 10, "Sandy": 20,
      "Rocky": 30, "Rajiv": 40, "Kate": 50
      }

  for key, element := range employee {
      fmt.Println("Key:", key, "=>", "Element:", element)
  }
```

- JavaScript

## Calculate char numbers
- Java

- C#
```
  
```

- Python
```
  import collections
  # 
  dict = collections.Counter('abcdaab')

  # or
  dict = {}
  for c in s:
      if c in h:
          dict[c] += 1
      else:
          dict[c] = 1
```

- JavaScript
```
```


## Exist or not
### Java
```
  Map<Integer, Integer> map = new HashMap<>();
  if (map.containsKey(nums[i])) {
  }

  if(map.containsValue(3)) {
  }
```
### C#
```
  
```

### Python
```
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
# Does the key exit or not
if "model" in thisdict:
  print("Yes")
```
### JavaScript



