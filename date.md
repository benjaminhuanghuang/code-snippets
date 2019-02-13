# Date
## Add
- Java
```

```
- C#
```  
  DateTime value = new DateTime(2017, 1, 18);
  return value.AddSeconds(SECONDS);
  
  DateTime today = DateTime.Today;
```
- Python
```
  from datetime import timedelta
  return moment + timedelta(seconds=1e9)
```
- JavaScript
```
  var date1 = new Date('December 17, 1995 03:24:00');
  // Sun Dec 17 1995 03:24:00 GMT...

  var date2 = new Date('1995-12-17T03:24:00');
  // Sun Dec 17 1995 03:24:00 GMT...

  console.log(date1 === date2);
  // expected output: false;

  console.log(date1 - date2);
  // expected output: 0
```