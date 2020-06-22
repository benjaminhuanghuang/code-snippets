# Array to list
### Java
```
  Integer[] values = { 1, 3, 7 };
  List<Integer> list = new ArrayList<Integer>(Arrays.asList(values));

```
### C#
- Use constructor new List<int>()
```
  List<int> lst = new List<int>(new int[] { 10, 20, 10, 34, 113 });
```
- Use ListAddRange()
```
  var lst = new List<int>();
  lst.AddRange(new int[] { 10, 20, 10, 34, 113 });
```
- Use Array.ToList();
````
  string[] array = new string[]
  {
      "one",
      "two",
      "three",
      "four",
      "five"
  };
  // use list constructor.
  List<string> list1 = new List<string>(array);
  Test(list1);

  // use ToList method.
  List<string> list2 = array.ToList();
  Test(list2);
- 

### Python
```
N/A
```
### JavaScript
```
N/A
```