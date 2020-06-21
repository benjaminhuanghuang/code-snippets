## Number to string
### C++
- Use C style

- Use std::to_string() available in C++ standard library since C++11
```
  #include <string>

  string s = std::to_string(12345);
```

- Use C++ standard library std::stringstream.
```
  #include <sstream>
  #include <iostream>

  int main()
  {
    int i = 123;
    std::stringstream ss;
    ss << i;
    std::string out_string = ss.str();
    std::cout << out_string << "\n";
    return 0;
  }
```

- Using fmt library in C++ 20
```
  return std::format("{:02}:{:02}", m_hours, m_minutes);
```
### C
- Using char[] and std::sprintf or std::snprintf()
```
  #include <cstdio>

  #define MAX_BUFFER_SIZE 128

  char out_string[MAX_BUFFER_SIZE];
  std::sprintf(buffer, "%02d", number);
  printf("out_string = \"%s\"\n", out_string);
```
### Go
```
  import  "strconv"

  strconv.Itoa(12)

```
### Java
```
  String s = 100 + "";
```


### C#
- Use Int32.ToString()
```  
  int val = 4;
  string msg = val.ToString();
```

- Use string concatenation
```
  int numOfApples = 16;
  string msg = "There are " + numOfApples + " apples";
```

- Use StringBuilder
```
  int val = 4;
  
  var builder = new StringBuilder();

  builder.Append("There are ");
  builder.Append(val).ToString();
  builder.Append(" hawks");

  Console.WriteLine(builder);
```

- Use string Format
```
int val = 4;

string msg2 = string.Format("There are {0} hawks", val);
string msg3 = $"There are {val} hawks";
```

### Python
```
  text = str(12)
```

```
  print("{:.2f}".format(3.1415926));
```

### JavaScript
- Concatenating an Empty String
```
  let a = '' + 50      // '50';

  let a = '' + 281e-26 // '2.81e-24'
```

- Using method num.toString(base)
```
  const num = 213; 
  const text = num.toString(16));

  50 .toString();  // '50'  
  (60).toString(); // '60'
  (7).toString(2); // '111' (7 in base 2, or binary)
```
- Using String() method
```
  let a = 30;

  String(a);     // '30'
  String(24);    // '24'
  String(35.64); // '35.64'
```
- Using template strings in ES6
```
  let num = 50;
  let string = `${num}`;      // '50'

  let flt = 50.205;
  let floatString = `${flt}`; // '50.205'
```

### TypeScript
```
```

