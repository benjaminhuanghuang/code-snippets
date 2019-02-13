## Find items in list
- Java
```

```
- C#
.Where function
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