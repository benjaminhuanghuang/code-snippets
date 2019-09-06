# Date
- [Add](#add)
- [Format](#format)

## Add
[Back](#date)

###  C++
```
#include "boost/date_time/posix_time/posix_time.hpp"
using namespace boost::posix_time;
static const long GIGA_SECOND = 1e9;

ptime advance(ptime time)
{
  return time + seconds(GIGA_SECOND);
}


```

### Go
```
  then := current.Add(1e9 * time.Second)

```
### Java
```

```
### C#
```  
  DateTime value = new DateTime(2017, 1, 18);
  return value.AddSeconds(SECONDS);
  
  DateTime today = DateTime.Today;
```
### Python
```
  from datetime import timedelta
  return moment + timedelta(seconds=1e9)
```
### JavaScript
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
getTime() returns the number of milliseconds between midnight of January 1, 1970
```
   return new Date(this.initDate.getTime() + Gigasecond.MILLISECONDS_IN_A_GIGASECOND);
```


## Format
[Back](#date)

### C++
```

```
### C
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
### Go
```
```

### JavaScript
```
```
### TypeScript
```
```