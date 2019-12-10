# Function
- [Default parameter](#default-parameter)


## Default parameter
[Back](#function)
### C++
```
// A function with default arguments, it can be called with  
// 2 arguments or 3 arguments or 4 arguments. 
int sum(int x, int y, int z=0, int w=0) 
{ 
    return (x + y + z + w); 
} 
  
/* Driver program to test above function*/
int main() 
{ 
    cout << sum(10, 15) << endl; 
    cout << sum(10, 15, 25) << endl; 
    cout << sum(10, 15, 25, 30) << endl; 
    return 0; 
}
```
### C
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
### Go
No default parameters
```
```

### JavaScript
```
  const twoFer = (name = 'you') => `One for ${name}, one for me.`;

```
### TypeScript
```
  twoFer( name:string = 'you') {
    return `One for ${name}, one for me.`;
  }
```

## Variadic function
function accepts a variable number of arguments.
### C++
```
// A function with default arguments, it can be called with  
// 2 arguments or 3 arguments or 4 arguments. 
int sum(int x, int y, int z=0, int w=0) 
{ 
    return (x + y + z + w); 
} 
  
/* Driver program to test above function*/
int main() 
{ 
    cout << sum(10, 15) << endl; 
    cout << sum(10, 15, 25) << endl; 
    cout << sum(10, 15, 25, 30) << endl; 
    return 0; 
}
```
### C
```

```
### Java
```
private static void printArgs(String... args) {
    for (int i = 0; i < args.length; i++) {
        String string = args[i];
        System.out.printf("Argument %d: %s", i, string);
    }
}
```


### C#
```  
static int Foo(int a, int b, params int[] args)
{
    // Return the sum of the integers in args, ignoring a and b.
    int sum = 0;
    foreach (int i in args)
        sum += i;
    return sum;
}
     
```
### Python
```
  def foo(a, b, *args):
    print(args)  # args is a tuple (immutable list).
```
### Go
```
// This variadic function takes an arbitrary number of ints as arguments.
func sum(nums ...int) {
	fmt.Print("The sum of ", nums) // Also a variadic function.
	total := 0
	for _, num := range nums {
		total += num
	}
	fmt.Println(" is", total) // Also a variadic function.
}
```

### JavaScript
```
  const twoFer = (name = 'you') => `One for ${name}, one for me.`;

```
### TypeScript
```
  twoFer( name:string = 'you') {
    return `One for ${name}, one for me.`;
  }
```