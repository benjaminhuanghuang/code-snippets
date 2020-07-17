


### C++
- insert() single element 在这种情况下，它会返回一个 pair 对象，这个 pair 对象包含一个迭代器，以及一个附加的布尔值用来说明插入是否成功。如果元素被插入，返回的迭代器会指向新元素；如果没有被插入，迭代器指向阻止插入的元素。
```
auto pr = words.insert("ninety"); // Returns a pair - an iterator & a bool value
```


- insert(iterator, "nine")  返回迭代器
```
auto iter = words.insert (pr.first, "nine"); // 1st arg is a hint. Returns an iterator
```

- insert(list)   什么也不返回
```
words.insert({"ten", "seven", "six"});  // Inserting an initializer list
```