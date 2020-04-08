## Create array with init value
### C++
- Init array
```
  T arr[5];
   
  int foo [5] = { 16, 2, 77, 40, 12071 };

  int bar [5] = { 10, 20, 30 };    // expected [10, 20, 30 , 0, 0]

  int baz [5] = { };               // expected [0, 0, 0 , 0, 0]

  int array[100] = {0};

  int array[100] = { [0 ... 99] = -1 };   // gcc extension

  std::fill(array, array+100, 42);         // sets every value in the array to 42

```
- STL array
``` 
    std::array<int, 3> a1{ {1, 2, 3} }; // double-braces required in C++11 prior to the CWG 1270 revision
                                        // (not needed in C++11 after the revision and in C++14 and beyond)
    std::array<int, 3> a2 = {1, 2, 3};  // never required after =
    
    std::array<std::string, 2> a3 = { std::string("a"), "b" };
 
    // container operations are supported
    std::sort(a1.begin(), a1.end());
    std::reverse_copy(a2.begin(), a2.end(), std::ostream_iterator<int>(std::cout, " "));

```

### C
```
int num[5] = {1, 1, 1, 1, 1};

int num[ ] = {1, 1, 1, 1, 1};

int num[5] =  { };                // num = [0, 0, 0, 0, 0]

int num[5] =  { 0 };             // num = [0, 0, 0, 0, 0]

int num[5]={ [0 . . . 4 ] = 3 };               // num = { 3, 3, 3, 3, 3}

int num[  ]={ [0 . . . 4 ] = 3 };               // num = { 3, 3, 3, 3, 3}

```
### Go
```
var a [5]int

b := [5]int{1, 2, 3, 4, 5}

```
- 2D array
```
var twoD [2][3]int
for i := 0; i < 2; i++ {
    for j := 0; j < 3; j++ {
        twoD[i][j] = i + j
    }
}
```
- make grid
```
n, m := len(grid), len(grid[0])

res := make([][]int, n)
for i := 0; i < n; i++ {
  res[i] = make([]int, m)
}
```

### Java
- new array and Arrays.fill
```
  int[] dp = new int[n+1];
  Arrays.fill(dp, Integer.MAX_VALUE);
```


### C#
```
  char[] letters = { 'A', 'B', 'C' };
```

### Python
Python does not have built-in support for Arrays, but Python lists can be used instead.
```
  chars = ["a", "b", "c"]

  lookup = [0] * 26

  dp = [0 for _ in range(amount + 1)]   

  seq_list = [[] for _ in range(n)]
```

- Use *
```
n, m = len(grid), len(grid[0])
res = [[0] * m for _ in range(n)]
```

- JavaScript
```
  var cars = ["Saab", "Volvo", "BMW"];

  var array1 = [1, 2, 3, 4];

  // fill with 0 from position 2 until position 4
  console.log(array1.fill(0, 2, 4));
  // expected output: [1, 2, 0, 0]

  // fill with 5 from position 1
  console.log(array1.fill(5, 1));
  // expected output: [1, 5, 5, 5]

  console.log(array1.fill(6));
  // expected output: [6, 6, 6, 6]  
```
- 
- 2D, new Array
```
let n = grid.length, m = grid[0].length;
let res = new Array(n);
for (let i = 0; i < n; i++) {
    res[i] = new Array(m);
}
```