## Char <-> int
- Java
```
  
```
- C#
```

```

- Python
Python has only 'string' type no 'char' type. A single character like 'a' is still a string in Python.
```
  char = chr(97)
  i = ord('a')
```
- JavaScript
JS has only 'string' type no 'char' type. A single character like 'a' is still a string in JS.
```
"ABC".charCodeAt(0) 
```

## Upper case vs lower case
```
// Upper case A - Z, 65 - 90
// Lower case a - z, 97 - 122
// a - A = 32

a = A ^ (1<<5)
A = a ^ (1<<5)
```