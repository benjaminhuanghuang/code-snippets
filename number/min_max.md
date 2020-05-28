# Min and Max of numbers
2 to the nth power
### C++
INT_MAX = 2147483647  = 7FFFFFFF  = 2^31 - 1
INT_MAX = -2147483648 = -80000000 = -2^31
```
  #include <climits>

  std::cout<<"maximum value of int: "<<INT_MAX<<'\n';
	std::cout<<"minimum value of int: "<<INT_MIN<<'\n';
```

### Java
```
int min = Integer.MIN_VALUE;
int max = Integer.MAX_VALUE;
```

### C#
```  
int min = int.MinValue;
int max = int.MaxValue;
```

### Python

```
min = -2^(n-1) 
max = 2^(n-1) - 1.

- python 2
>>> sys.maxint
min =  -sys.maxint - 1
```

### JavaScript
// JavaScript use float numbers
```
var max = Number.MAX_VALUE;     // 2^1024
var min = Number.MIN_VALUE;
```


