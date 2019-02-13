# Hash map / Dictionary

## Calculate char numbers
- Java
```
  Map<Character, Integer> map = new HashMap<>();
  for (int i = 0; i < str.length(); i++) {
      char c = str..charAt(i)
      if (map.containsKey(c)) {
          map.put(c, map.get(c) + 1);
      } else {
          map.put(c, 1);
      }
  }

  // getOrDefault（JDK 8）
  Map<Integer, Integer> map = new HashMap<>();
  for (int num : nums) {
      map.put(num, map.getOrDefault(num, 0) + 1);
  }
```
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
- Java
```
  Map<Integer, Integer> map = new HashMap<>();
  if (map.containsKey(nums[i])) {
  }

  if(map.containsValue(3)) {
  }
```
- C#
```
  
```

- Python
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
- JavaScript

## Iteration
- Java
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
- C#
```
  
```

- Python
```
  for k, v in thisdict.items():
    print(k, v)
```
- JavaScript

