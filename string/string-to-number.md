## Number to string
### C++
```
  #include <string>

  string s = std::to_string(12345);
```
### C
Use C standard library strtol (avoid atoi() which does not report errors).
```
  int number = (int)std::strtol(text.c_str(), nullptr, 10);
```
Using std::stoi() 
```
  std::string str("123");
  try {
    int n = std::stoi(str);
    std::cout << n << "\n";
  }
  catch (...) {
    std::cerr << "ERROR!\n";
  }
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
  text = str(12)
```

### JavaScript
Using method num.toString(base)
```
  const num = 213; 
  const text = num.toString(16));
```
### TypeScript
```
```

## String to Number
### C++


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
Uing reverse iteration with the reversed()function 
```
str = "Python" 
reversedstring =''.join(reversed(str))
```

Using slicing
create a slice that starts with the length of the string, and ends at index 0.
```
str = "Python" 
stringlength = len(str)
slicedString = str[stringlength::-1] 
```
Or
```
str = "Python" 
slicedString = str[::-1] 
```


### JavaScript
```
```
### TypeScript
```
```