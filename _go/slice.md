

Init a slice
```
userList = []string{} 

userList = make([]string, 0)
```


Remove item
```
userList = append(userList[0:index], userList[index+1:]...)
```