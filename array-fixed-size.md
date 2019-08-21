
# Array

## Create array with init value
### C++
```
  T arr[5];
   
  int foo [5] = { 16, 2, 77, 40, 12071 };

  int bar [5] = { 10, 20, 30 };    // expected [10, 20, 30 , 0, 0]

  int baz [5] = { };               // expected [0, 0, 0 , 0, 0]

  int array[100] = {0};

  int array[100] = { [0 ... 99] = -1 };   // gcc extension

  std::fill(array, array+100, 42);         // sets every value in the array to 42

```
STL array
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

var twoD [2][3]int
for i := 0; i < 2; i++ {
    for j := 0; j < 3; j++ {
        twoD[i][j] = i + j
    }
}
```

### Java
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




## Array to list
- Java
```
  Integer[] values = { 1, 3, 7 };
  List<Integer> list = new ArrayList<Integer>(Arrays.asList(values));

```
- C#
```
  List<int> lst = new List<int>(new int[] { 10, 20, 10, 34, 113 });
```
```
  var lst = new List<int>();
  lst.AddRange(new int[] { 10, 20, 10, 34, 113 });
```

- Python
```
N/A
```
- JavaScript
```
N/A
```

## Add, delete, modify
- Java
```
  
```
- C#
```
  
```

- Python
```
```
- JavaScript
```
```

## Merge two arrays 
- Java
```

```
- C#
```  

```
- Python
```
  letters = []
  nums = []
  all = [letter[1] + " " + letter[0] for letter in letters] + nums
```
- JavaScript
```
```
## Merge two lists 
- Java
```
  List<String> listA = new ArrayList<String>();
  listA.add("A");

  List<String> listB = new ArrayList<String>();
  listB.add("B");

  List<String> listFinal = new ArrayList<String>();
  listFinal.addAll(listA);
  listFinal.addAll(listB);
```
or
```
  import org.apache.commons.collections.ListUtils;
  List<String> listA = new ArrayList<String>();
	listA.add("A");
		
	List<String> listB = new ArrayList<String>();
	listB.add("B");

	List<String> listFinal = ListUtils.union(listA, listB);
```

- C#
```  

```
- Python
```
  letters = []
  nums = []
  all = [letter[1] + " " + letter[0] for letter in letters] + nums
```
- JavaScript
```
```


## Clone
- Java
```
  ArrayList newList = new ArrayList<>(oldList);

  char[] temp = Arrays.copyOf(this.map, this.map.length); 
```

- C#
```  
  List<int> newList = new List<int>(oldList));

  char[] temp = new char[26];
  Array.Copy(this.Map, temp, this.charMap.Length);

```
- Python
```
  newList = list(oldList)
```
- JavaScript
```
  let newList = [...oldList];
```


## Check elements in array
- Java
```
  Boolean[] items = ...;
  List<Boolean> itemsList = Arrays.asList(items);
  if (itemsList.stream().allMatch(e -> e)) {
      // all
  }
  if (itemsList.stream().anyMatch(e -> e)) {
      // any
  }
  
```

- C#
```  
  class Pet
  {
      public string Name { get; set; }
      public int Age { get; set; }
  }

  Pet[] pets = { new Pet { Name="Barley", Age=10 },
                  new Pet { Name="Boots", Age=4 },
                  new Pet { Name="Whiskers", Age=6 } };

  // Determine whether all pet names in the array start with 'B'.
  bool allStartWithB = pets.All(pet => pet.Name.StartsWith("B"));


```
- Python
```
  lookup = [0] * 26
  # all() function checks and returns True only if all the elements in the 
  # given array is 'Truthy'. Here, 0 will be evaluated as 'Falsy' and any
  # occurrance greater than 0 will evaluate as 'Truthy'
  return all(lookup)

  # The any() method returns True if any element of an iterable is True. If not, any() returns False.
  any(lookup)
```
- JavaScript
```
  // The every() method tests whether all elements in the array pass the test implemented by the provided function.
  function isBelowThreshold(currentValue) {
    return currentValue < 40;
  }

  var array1 = [1, 30, 39, 29, 10, 13];

  console.log(array1.every(isBelowThreshold));
  // expected output: true


  //The some() method tests whether at least one element in the array passes the test implemented by the provided function.
  var array = [1, 2, 3, 4, 5];

  var even = function(element) {
    // checks whether an element is even
    return element % 2 === 0;
  };

  console.log(array.some(even));
  // expected output: true



```