## Number to string
Use std::to_string() available in C++ standard library since C++11
### C++
```
  #include <string>

  string s = std::to_string(12345);
```
Use C++ standard library std::stringstream.
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
### C
Use C standard library function snprintf().
```
#include <cstdio>

#define MAX_BUFFER_SIZE 128

int main()
{
  int number = 123;
  char out_string [MAX_BUFFER_SIZE];
  snprintf(out_string, MAX_BUFFER_SIZE, "%d", number);
  printf("out_string = \"%s\"\n", out_string);
  return 0;
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

  50 .toString();  // '50'  
  (60).toString(); // '60'
  (7).toString(2); // '111' (7 in base 2, or binary)
```
Using String() method
```
  let a = 30;

  String(a);     // '30'
  String(24);    // '24'
  String(35.64); // '35.64'
```
Using template strings in ES6
```
  let num = 50;
  let string = `${num}`;      // '50'

  let flt = 50.205;
  let floatString = `${flt}`; // '50.205'
```
Concatenating an Empty String
```
  let a = '' + 50      // '50';

  let a = '' + 281e-26 // '2.81e-24'
```
### TypeScript
```
```

## Format number to string
### C++

## String format
### C++
Using stringstream
```
  std::stringstream ret;

  ret << std::setw(2) << std::setfill('0') << m_hours << ":" << std::setw(2)
      << std::setfill('0') << m_minutes;
  return ret.str();
```

Using char[] and sprintf
```
  #include <cstdio>

  char buffer[6];
  std::sprintf(buffer, "%02d:%02d", m_hours, m_minutes);
  return buffer;
```

Using fmt library in C++ 20
```
  return std::format("{:02}:{:02}", m_hours, m_minutes);
```

### C
Use C standard library function snprintf().
```
#include <cstdio>

#define MAX_BUFFER_SIZE 128

int main()
{
  int number = 123;
  char out_string [MAX_BUFFER_SIZE];
  snprintf(out_string, MAX_BUFFER_SIZE, "%d", number);
  printf("out_string = \"%s\"\n", out_string);
  return 0;
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
print("{:.2f}".format(3.1415926));

```



### JavaScript
```
```
### TypeScript
```
```