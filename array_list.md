# Array / List

## Init
- Java
```
  s.charAt(i)
```
- C#
```
  char[] letters = { 'A', 'B', 'C' };
```

- Python
Python does not have built-in support for Arrays, but Python lists can be used instead.
```
chars = ["a", "b", "c"]
```
- JavaScript
```
var cars = ["Saab", "Volvo", "BMW"];
```


## List to array
- Java
```
  List<String> wordList = new ArrayList<String>();
  String[] results = new String[wordList.size()];
  return wordList.toArray(results);

```
- C#
```
  List<string> list = new List<string>();  
  string[] array = list.ToArray();

```

- Python
```
```
- JavaScript
```
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
```
- JavaScript
```
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