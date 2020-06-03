## String to number
### C++
- Use stoi() from C++ 11
stoi() works for both C++ strings and C style strings
```
  #include <string>

  string str1 = "45"; 
  string str2 = "3.14159"; 
  string str3 = "31337 geek"; 

  int myint1 = stoi(str1); 
  int myint2 = stoi(str2); 
  int myint3 = stoi(str3);
```
- Use atoi() legacy C-style function
atoi() works only for C-style strings (character array and string literal)
```
  #include <cstdlib> 

  const char *str1 = "42"; 
  const char *str2 = "3.14159"; 
  const char *str3 = "31337 geek"; 
    
  int num1 = atoi(str1); 
  int num2 = atoi(str2); 
  int num3 = atoi(str3); 
```

### C
- Use atoi() legacy C-style function
atoi() works only for C-style strings (character array and string literal)
```
  #include <cstdlib> 

  const char *str1 = "42"; 
  const char *str2 = "3.14159"; 
  const char *str3 = "31337 geek"; 
    
  int num1 = atoi(str1); 
  int num2 = atoi(str2); 
  int num3 = atoi(str3); 
```

### Go
- Use strconv
```
  b, err := strconv.ParseBool("true")
  f, err := strconv.ParseFloat("3.1415", 64)
  i, err := strconv.ParseInt("-42", 10, 64)   // 64 is bitSize
  u, err := strconv.ParseUint("42", 10, 64)
```
### Java
- Integer.parseInt(), returns a primitive int
```
  String number = "10";
	int result = Integer.parseInt(number);			
	System.out.println(result);
```

- Integer.valueOf() returns a new Integer() object.
```
  String number = "10";
	Integer result = Integer.valueOf(number);		
	System.out.println(result);
```

### C#
```  
  int x = Convert.ToInt32(TextBoxD1.Text)
```
### Python
- Use int(), float()
```
  num = int("10")
  num = int("0x12F")        # Error
  num = int("0x12F", base=16)

  f = float('10.5674')
```

### JavaScript
- Use parseInt(str, base), parseFloat()

```
  var text = '42px';
  var integer = parseInt(text, 10);  // 42

  var text = '3.14someRandomStuff';
  var pointNum = parseFloat(text);  // 3.14
```

- Use Number(), Number is stricter than Number parseXXX()
```
  Number('123'); // returns 123
  Number('12.3'); // returns 12.3
  Number('3.14someRandomStuff'); // returns NaN, Number is stricter than Number parseXXX()
  Number('42px'); // returns NaN, Number is stricter than Number parseXXX()
```

### TypeScript
```
```

