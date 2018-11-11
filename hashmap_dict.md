# Hash map / Dictionary
## Calculate char numbers
- Java
```
  Map<Character, Integer> map = new HashMap<>();
  for (int i = 0; i < str.length(); i++) {
      char c = str.charAt(i);
      map.put(c, 0);
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

for letter in 'abcde':
    print '%s : %d' % (letter, dict[letter])

```
- JavaScript

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

