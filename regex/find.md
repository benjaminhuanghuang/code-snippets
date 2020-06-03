## Replace

### C++
```

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