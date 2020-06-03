



### JavaScript
Here are 4 ways to split a word into an array of characters.
```
const string = 'word';

// Option 1
string.split('');

// Option 2
[...string];

// Option 3
Array.from(string);

// Option 4
Object.assign([], string);

// Result:
// ['w', 'o', 'r', 'd']
```