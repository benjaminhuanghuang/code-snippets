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