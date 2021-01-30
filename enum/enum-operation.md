### C
```
  typedef enum planet {
    MERCURY,
    VENUS,
    EARTH,
    MARS,
    JUPITER,
    SATURN,
    URANUS,
    NEPTUNE,
  } planet_t;

```  

### C++
Using static_cast<T>
```
  enum GreetingType
  {
    Else = 0,
    Question = 1,
    Yell = 2,
    Nothing = 4
  };

  inline GreetingType operator|(GreetingType a, GreetingType b)
  {
    return static_cast<GreetingType>(static_cast<int>(a) | static_cast<int>(b));
  }

  inline GreetingType operator&(GreetingType a, GreetingType b)
  {
    return static_cast<GreetingType>(static_cast<int>(a) & static_cast<int>(b));
  }


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
New in version 3.4

```
  from enum import Enum

  class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

  for color in Color:
    print(color)
    
```


### JavaScript
```
```
### TypeScript
```
```