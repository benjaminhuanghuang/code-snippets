# Find sub sring in string
### C++
- Use std::find()
```
  if (find(rows[i].begin(), rows[i].end(), word[0]) != rows[i].end())


```
- Use std::find-first()
从pos位置(默认是0，即从头开始查找)开始查找str1，从前往后，如果找到str1中的**任何一个字符**，则返回其在str中的索引值；如果没有找到，则返回string::npos。
```
```

- Use string.find(string) / string.find(char)
```
  if (word.find(str) != string::npos)

  if (word.find(c) != string::npos)
```
### C
```

```

### Go
```
```
### Java
```

```


### C#
```  

```
### Python
```

```


### JavaScript
- Use string.indexOf()
```
  var str = "Hello world, welcome to the universe.";
  var n = str.indexOf("welcome");
```
### TypeScript
```
```