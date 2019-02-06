# String
## Access the characters in the string
- Java
```
  String str = "Hello";
  char c = s.charAt(0)
```
- C#
```
  string str = "Hello";
  char first = str[0];
       
```

- Python
```
  str = "Hello"
  first = str[0]      // first is a string not char
```

- JavaScript
JS has only 'string' type no 'char' type. A single character like 'a' is still a string in JS.
```
  let str = "Hello";
  let c = s[0];
  let c2 = s.charAt(0);    // c2 is a string.
  
```

## Iterate over the characters in the string
- Java
```
  for (char c : s.toCharArray()) {
           
  }
```
- C#
```
  
```

- Python

- JavaScript

## Reverse
- Java
```

```
- C#
```  
  char[] charArray = s.ToCharArray();
  Array.Reverse( charArray );
  return new string( charArray );
```
- Python
```
  reverse = string[::-1] 
```
- JavaScript
```
  // Using reverse() method for array
  str.split("").reverse().join("");

  // Using spread syntax (ES6) + reverse()
  [...str].reverse().join('');

```

## Sub string
- Java
```
  String s="hello";  
  
  string sub = s.substring(2);  // llo  [startIndex...]

  System.out.println(s.substring(0,2));  //he  [startIndex, endIndex)
```
- C#
```
  string s3 = "Visual C# Express";
  string sub = s3.Substring(7, 2);   // startIndex, length
```

- Python
```
  str = "Hello"
  # slicing string    
  sub = str[6:11]          # [startIndex, endIndex)
  sub2 = str[7:]
  
```
- JavaScript
```
  var str = "Hello world!";
  var res = str.substring(1, 4);   // [startIndex, endIndex)
```

## String <-> Char array
- Java
```
  String s = "Hello";
  char[] chars = s.toCharray();
  for (char c : chars) {
           
  }
```
- C#
```
  char[] letters = { 'A', 'B', 'C' };
  string alphabet = new string(letters);
```

- Python
```
  str = "Hello"
  # slicing string
  sub = str[6:11]
  sub2 = str[7:]
  
```
- JavaScript



## Template literals
- Java
```

```
- C#
```
  return $"One for {input ?? "you"}, one for me.";
```

- Python
```

```
- JavaScript
```
  return `One for ${name ? name : 'you'}, one for me.`;
```