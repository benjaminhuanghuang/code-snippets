### C++
```
  unordered_map<int, int> counter;

  for(auto i : nums){
      counter[i]++;
  }
```
### C
```

```

### Go
```
```
### Java
- Check map.containsKey
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
- Or use getOrDefault（JDK 8）
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
- Use Counter() method
```
  for v in Counter(nums).values()

```


### JavaScript
```
```
### TypeScript
Use the Nullish Coalescing || 
```
  let result = new Map<string, number>();

  for (let word of this.getWords(sentence)) {
    result.set(word, (result.get(word) || 0) + 1);
  }
```