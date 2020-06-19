## Exist
### C++
```


```
### C
```

```

### Go
```
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
```
```
### TypeScript
```
  let codonStopSet = new Set(["UAA", "UAG", "UGA"]);
  codonStopSet.has(codon);
```
- Use enum
```
  enum CodonStop {
    UAA = "UAA",
    UAG = "UAG",
    UGA = "UGA",
  }

  isStopCodon(codon: string): boolean {
    return codon in CodonStop;
  }
```
