### C++
- Create set from vector
```
  std::vector<int> input({ 1, 2, 2, 1, 3, 1, 4 });
	std::unordered_set<int> set(input.begin(), input.end());
```

- - Create set from const vector
```
  unordered_set<string> dict(wordDict.cbegin(), wordDict.cend());
```
### C#
- Create set from int[]
```
  var candySet = new HashSet<int>(candies);
```