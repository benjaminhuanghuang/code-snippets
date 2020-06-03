## Find or search
Find a sub string using regex

### C++
regex_search和regex_match都是匹配函数。
regex_search和regex_match的主要区别是：regex_match是全词匹配，而regex_search是搜索其中匹配的字符串。
regex_search找到第一个就停止，不进行多次搜索。

- Does string contain a sub string like "? *$"
```
  if (std::regex_search(greeting, std::regex("? *$")))
  {
    type = type | GreetingType::Question;
  }
```

### Java
```
  const codons = dna.match(/[A-Z]{3}/g);
  for (const codon of codons) {
    ...
  };
```


### C#
```  

```
### Python
```

```
### Go
```
```

### JavaScript

test() method returns true if it finds a match, otherwise it returns false
```
  function validateDNA(dna) {
    return (/^([A-Z]{3})+$/.test(dna));
  }
```
### TypeScript
```
```