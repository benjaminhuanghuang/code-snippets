## String to Char to Code to Char

### C++
C++ and C can accss the char in string directly
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
  char[] arr = s.ToCharArray();
```

### Python
```
str = '12345'
chars = list(str)      # conver string to char list
```

### JavaScript
Encode string 

fromCharCode()

charCodeAt()
```
for(let c of str){
    if(isAlpha(c))
    {
      let code = c.charCodeAt();
      code = (code + 13 - 'A'.charCodeAt()) % 26 + 'A'.charCodeAt();
      ans +=  String.fromCharCode(code);
    }
    else
    {
      ans += c;
    }
  }

function isAlpha(char)
{
  return (char >='A' && char <='Z'); 
}
```


