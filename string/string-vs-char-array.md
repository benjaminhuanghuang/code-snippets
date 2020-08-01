## String to Char array

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
Here are 4 ways to split a word into an array of characters.

- Use split()
```
const string = 'word';
let chars = string.split('');
```
- Use spread syntax
```
let chars = [...string];
```
- Use Array.from()
```
Array.from(string);
```
- Use Object.assign()
```
Object.assign([], string);
```


## Char array to string


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
- Use constructor of string
```  
  char[] array = s.ToCharArray();
  Array.Reverse(array);
  string newStr = new string(array);
```

### Python
- Use join()
```
  str = '12345'
  chars = list(str)      # conver string to char list
  newStr = ''.join(chars)


```
- Process char in string
```
  new_str = [fun(c) for c in str]
```


### JavaScript
- Use join()
```
  chars = str.split('');
  newStr = chars.join('');
```