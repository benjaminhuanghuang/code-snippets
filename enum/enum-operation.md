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
```

```


### JavaScript
```
```
### TypeScript
```
```