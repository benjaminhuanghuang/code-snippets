
### C++
- Use + or append
```
 ret += s1;
 ret.append(s2);
```
- Using char[] and std::sprintf or std::snprintf()
```
  #include <cstdio>

  #define MAX_BUFFER_SIZE 128

  char out_string[MAX_BUFFER_SIZE];
  std::sprintf(buffer, "%02d", number);
  printf("out_string = \"%s\"\n", out_string);
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
```

```


### JavaScript
```
```
### TypeScript
```
```
