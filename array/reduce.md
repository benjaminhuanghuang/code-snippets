



### JavaScript
```
const target = [...str].reduce((accumulator, current) => (current ** len) + accumulator, 0);
```
The for loop style
```
  let target = 0;
  for (let i = 0; i < str.length; i += 1) {
    target += str.charAt(i) ** len; // power operator cast operand as a number
  }
```

