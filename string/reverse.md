
### C++
- Use reverse iterator 
```
  str = std::string(input.rbegin(), input.rend());;
```

### C
- Use Array.Reverse()
``` 
  char[] arr = s.ToCharArray();
  Array.Reverse(arr);
  return new string(arr);
```

### Go
```
```
### Java
- Use StringBuilder.reverse()
```
    StringBuilder sb = new StringBuilder(str);  
    sb.reverse();  
    return sb.toString();  
```
- Reverse a char array
```
  char ch[] = str.toCharArray();  
  String rev = "";  
  for(int i=ch.length-1;i>=0;i--){  
      rev+=ch[i];  
  }  
```   

### C#
```  

```
### Python
- Use slice operator [start,stop,step]
giving no field as start and stop indicates default to 0 and string length respectively and "-1" denotes starting from end and stop at the start.
```
  string = string[::-1]
```
- Use reversed()
reversed() accessing elements in reversed order
The reversed() returns the reversed iterator of the given string.
```
string = "".join(reversed(string)) 
```
- Use reverse()
reverse() updates the existing list in place.
```
str = '12345'
chars = list(str)      # conver string to char list
chars.reverse()
print("".join(chars))
```


### JavaScript
- Use Array.prototyp.reverse(). reverses an array in place
```
  str.split('').reverse().join('');
```
### TypeScript
Same as JavaScript 

