### C++
- https://en.cppreference.com/w/cpp/utility/variadic
```
  
```
### C
```

```

### Go
- Use ...
```
func sum(nums ...int) {
    fmt.Print(nums, " ")
    total := 0
    for _, num := range nums {
        total += num
    }
    fmt.Println(total)
}

func main() {

    sum(1, 2)
    sum(1, 2, 3)

    nums := []int{1, 2, 3, 4}
    sum(nums...)
}
```
### Java
- Use ...
```
  static void fun(int ...a) 
  { 
      System.out.println("Number of arguments: " + a.length); 

      // using for each loop to display contents of a 
      for (int i: a) 
          System.out.print(i + " "); 
      System.out.println(); 
  } 
    
  fun(100);         // one parameter 
  fun(1, 2, 3, 4);  // four parameters 
  fun();            // no parameter 
  
```


### C#
- Use params keyward
```  
public static void UseParams(params int[] list)
{
    for (int i = 0; i < list.Length; i++)
    {
        Console.Write(list[i] + " ");
    }
    Console.WriteLine();
}

UseParams(1, 2, 3, 4);

```
### Python
- Use * or **
```
  def myFun(*argv):  
      for arg in argv:  
          print (arg) 
      
  myFun('Hello', 'Welcome', 'to', 'GeeksforGeeks')  


  def myFun(**kwargs):  
      for key, value in kwargs.items(): 
          print ("%s == %s" %(key, value)) 
    
  # Driver code 
  myFun(first ='Geeks', mid ='for', last='Geeks') 
```


### JavaScript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

```
function foo(x, ...args) {
  console.log(x, args, ...args, arguments);
}

foo('a', 'b', 'c', z='d')


The output:
a
Array(3) [ "b", "c", "d" ]
b c d
Arguments
​  0: "a"
  ​1: "b"
  ​2: "c"
  ​3: "d"
  ​length: 4

```
### TypeScript
```
  export default class Triangle {
    sides: number[]
    constructor(...sides: number[]) {
        this.sides = sides
    }
  }

  const triangle = new Triangle(2, 2, 2)
```