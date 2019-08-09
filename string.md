# String Operations
- [String length](#string-length)
- Iteration
- Sort
- Reverse
- Modify(insert, append, delete, change charactor)
- Convert with number
- [Trim](#trim)
- stripped

## String length  
[Back](#string-operations)

- C++

string.length() returns the length of the string, in terms of bytes.

Both string::size and string::length are synonyms and return the same value. (http://www.cplusplus.com/reference/string/string/size/)

```
  std:: string str;    // create str = ""
  str.length();
  str.size();
```

- Java
```
 String s = "Hello Java String Method";
 int length = s.length();
```

- C#
```  
string str = "abcdefg";
int len = str.Length;      
```

- Python
```
string = "Hello" 
length = len(string) 
```

- JavaScript
```
const str = "Hello World!";
const n = str.length;
```

- TypeScript
```
var str: string = "Hello World"; 
console.log("Length "+uname.length)
```

## Iterat charactors in string
[Back](#string-operations)

- C++
Using iterator
```
for (auto it = a.begin(); it != a.end(); ++it)
{
  auto index = std::distance(a.begin(), it);

  differences += (a[index] != b[index]);
}
```
Using index
```
for (auto index = 0u; index < a.length(); ++index)
{
  differences += (a[index] != b[index]);
}
```
Using for loop
```
const string sequence;

for (const char c : sequence)
{

}  
```

- Java
```
```

- C#
```
```

- Python
```
  DNA_TO_RNA_MAP = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
  return ''.join(DNA_TO_RNA_MAP[c] for c in dna_strand)
```

- JavaScript
```
```
## Sort chars in string
[Back](#string-operations)

- Java
```
  char tempArray[] = inputString.toCharArray(); 
  Arrays.sort(tempArray); 
  return new String(tempArray); 
```
- C#
```  
  sortedWord = baseWord.OrderBy(c => c).ToString();
```
```
  char[] a = s.ToCharArray();
  Array.Sort(a);
  sorted = new string(a);
```
- Python
```
  a = 'ZENOVW'
  b = sorted(a) # sorted() returns a list ['E', 'N', 'O', 'V', 'W', 'Z'] 
  c = ''.join(b)   # c is 'ENOVWZ'
```
- JavaScript
```
  var str='ACBacb';
  str.split('').sort().join('');    // get 'ABCabc'
```

```
  function case_insensitive_comp(strA, strB) {
      return strA.toLowerCase().localeCompare(strB.toLowerCase());
  }

  var str = 'ACBacbA';
  str = str.split("");
  str = str.sort();
  str = str.sort( case_insensitive_comp )
  // concatenate the chunks in one string
  str = str.join("");
  alert(str);
```
## Access the characters in the string
[Back](#string-operations)

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
[Back](#string-operations)

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
[Back](#string-operations)

- C++
```
  std::string s= input;
  reverse(s.begin(), s.end());
  return s;
```
Better one using reverse_iterator
```
  return std::string(input.rbegin(), input.rend());;
```
- Java
```

```
- C#

Using Array.Reverse
```  
  char[] charArray = s.ToCharArray();
  Array.Reverse( charArray );
  return new string( charArray );
```
Uing Linq
```
  using System.Linq;
  return new string(input.Reverse().ToArray());
```

- Python
```
  reverse = string[::-1] 
  reverse = "".join(reversed(string)) 
```
- JavaScript
Using reverse() method for array
```
  str.split("").reverse().join("");
```
Using spread syntax (ES6) + reverse()
```
  [...str].reverse().join('');
```

## Sub string
[Back](#string-operations)

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
[Back](#string-operations)

- C++
```
  N/A
```
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
[Back](#string-operations)
- C++
```
```
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

## Char <-> int
[Back](#string-operations)

- Java
```
  numbers[secret.charAt(i) - '0']
```
- C#
```

```

- Python
Python has only 'string' type no 'char' type. A single character like 'a' is still a string in Python.
```
  char = chr(97)
  i = ord('a')
```

- JavaScript
JS has only 'string' type no 'char' type. A single character like 'a' is still a string in JS.
```
"ABC".charCodeAt(0) 
numbers[secret.charCodeAt(i) - '0'.charCodeAt(0)]
```

## Upper case vs lower case
[Back](#string-operations)
- C++
```
// Upper case A - Z, 65 - 90
// Lower case a - z, 97 - 122
// a - A = 32

a = A ^ (1<<5)
A = a ^ (1<<5)
```

## isPangram Sample

- Java
```
public boolean isPangram(String input) {
    if (input == null || input.length() < 26) {
        return false;
    }
    boolean[] used = new boolean[26];
    for (char c : input.toCharArray()) {
        if(Character.isLetter(c))
            used[Character.toLowerCase(c) - 'a'] = true;
    }

    for (int i = 0; i < 26; i++) {
        if (used[i] == false)
            return false;
    }
    return true;
}
```
- C#
```
public static bool IsPangram(string input)
{
  int[] letters = new int[26];
  input = input.ToLower();
  for (int i = 0; i < input.Length; i++)
  {
    if (Char.IsLetter(input[i]))
    {
      int pos = input[i] - 'a';
      letters[pos]++;
    }
  }

  for (int i = 0; i < 26; i++)
  {
    if (letters[i] == 0)
      return false;
  }
  return true;
}
```
- Python
```
  def is_pangram(sentence):
    used = [0] * 26
    sentence = sentence.lower()
    for char in sentence:
        if 'a' <= char <= 'z':   # is letter
            index = ord(char) - ord('a')
            used[index] += 1
    return all(lookup)
```

## Trim 
[Back](#string-operations)
- C++
```
  const std::string WHITESPACE = " \n\r\t\f\v";

  std::string ltrim(const std::string& s)
  {
    size_t start = s.find_first_not_of(WHITESPACE);
    return (start == std::string::npos) ? "" : s.substr(start);
  }

  std::string rtrim(const std::string& s)
  {
    size_t end = s.find_last_not_of(WHITESPACE);
    return (end == std::string::npos) ? "" : s.substr(0, end + 1);
  }

  std::string trim(const std::string& s)
  {
    return rtrim(ltrim(s));
  }

  std::string trim_simple(const std::string &s)
  {
    size_t start = s.find_first_not_of(" ");
    size_t end = s.find_last_not_of(" ");
    return (start == std::string::npos || end == std::string::npos "" ) ? "" : s.substr(start, end + 1);
  }
  
  int main()
  {
    std::string s = "\n\tHello World \r\n";
    std::cout << "START::" << trim(s) << "::END";

    return 0;
  }
```

- Java
```
// trims the trailing and leading spaces  
String s = " geeks for geeks has all java functions to read  ";  
System.out.println(s.trim());   
      
```
Using regex
```
System.out.println("//test/me".replaceAll("^/+", ""));
Trailing:

System.out.println("//test/me//".replaceAll("/+$", ""));
```

Using  Apache StringUtils
```
System.out.println(StringUtils.stripStart("//test/me", "/"));
System.out.println(StringUtils.stripEnd("//test/me", "/"));

```


- C#
```  

```
- Python
```

```
- Go
```
```

- JavaScript
```

```

- TypeScript
```
```

## Strip
[Back](#string-operations)

- C++
```
  #include <algorithm>
  #include <string>
  std::string str("nie-longlove-sliyawe-i");
  auto itor = remove(str.begin(), str.end(), 'e');
  str.erase(itor, str.end());
```
- C
```
void removeSpaces(char *str) 
{ 
    int count = 0; 
  
    for (int i = 0; str[i]; i++) 
        if (str[i] != ' ') 
            str[count++] = str[i]; // here count is 
    str[count] = '\0'; 
} 
```  

- Java
Using regex replace
```
static String removeSpace(String str) 
{ 
    str = str.replaceAll("\\s",""); 
    return str; 
} 
```

- C#
```  
static String removeSpace(String str)  
{  
    str = str.Replace(" ","");  
    return str;  
}  
```
- Python
```
def removeSpaces(string): 
    string = string.replace(' ','') 
    return string 
```
- Go
```
```

- JavaScript
```

```

- TypeScript
```
```