### C++
C++ 11 use {}赋值
```
unordered_map<string, string> m{{"Jan", "01"},
                                {"Feb", "02"},
                                {"Mar", "03"},
                                {"Apr", "04"},
                                {"May", "05"},
                                {"Jun", "06"},
                                {"Jul", "07"},
                                {"Aug", "08"},
                                {"Sep", "09"},
                                {"Oct", "10"},
                                {"Nov", "11"},
                                {"Dec", "12"}};

```
### C
```

```

### Go
```
```
### Java
Check map.containsKey
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
```
Or use getOrDefault（JDK 8）
```
  Map<Integer, Integer> map = new HashMap<>();
  for (int num : nums) {
      map.put(num, map.getOrDefault(num, 0) + 1);
  }
```

### C#
```  

```
### Python
Create dict from words
```

```


### JavaScript
```
```
### TypeScript
- Use Object.entries

The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. 

```
  const expectedCounts = new Map(Object.entries({ one: 1, of: 1, each: 1 }))
```
- Use []
```
  const codonProtein = new Map<string, string>([
    ["AUG", "Methionine"],
    ["UUU", "Phenylalanine"]
  ]);
```