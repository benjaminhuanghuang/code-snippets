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

The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object

The g modifier is used to perform a global match (find all matches rather than stopping after the first match)

```
  // get all matches of regex with g modifier
  const rnaPattern = /[A-Z]{3}/g;
  const codons = rnaStr.match(rnaPattern);
  for (const codon of codons) {
    ...
  }
```
### TypeScript
```
```