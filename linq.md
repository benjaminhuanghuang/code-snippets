## Find items in list
- Java
The filter() method creates a new array with all elements that pass the test
```
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]
```

The find() method returns the value of the first element in the array that satisfies the provided testing function
```
  var array1 = [5, 12, 8, 130, 44];

  var found = array1.find(function(element) {
    return element > 10;
  });

  console.log(found); // expected output: 12
```
- C#
Where() function
```  
  public string[] FindAnagrams(string[] potentialMatches)
  {
    return potentialMatches.Where(word =>
    {
      string lower = word.ToLower();
      string sorted = new string(lower.OrderBy(c => c).ToArray());
      return sorted.Equals(sortedWord) && !lower.Equals(lowercaseWrod);
    }).ToArray();
  }
```
- Python
```

```
- JavaScript
```
```