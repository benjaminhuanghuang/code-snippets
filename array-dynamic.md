# Dynamic array

## Init
- C++
```
  vector<int> nums {2, 7, 11, 15};

  vector<int> nums = {2, 7, 11, 15};   // create a std::initializer_list<int>
  // fill 
  vector<int> s(n+1, 0);
```

- Java
```
  ArrayList<T>
```
- C#
```
  List<T>
```

- Python
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

  let newArr = new Array(10).fill(null);    
```
- TypeScript
```
  var cars = ["Saab", "Volvo", "BMW"];

  let newArr = new Array(10).fill(null);    
```
## Iteration

- JavaScript
```
for (let element of array) {
{}

for (let element in array) {
{}
```

- Python
```
tickers = [1, 2, 3]
for i, ticker in enumerate(tickers):
  pass
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